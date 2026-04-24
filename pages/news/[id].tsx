import { GetServerSideProps } from 'next';
import { prisma } from '../../lib/prisma';
import { News } from '../../types/news';
import Head from 'next/head';
import { getTwitterShareUrl, getFacebookShareUrl, getRedditShareUrl } from '../../utils/socialShare';
import Link from 'next/link';

interface Props {
  news?: News
}

export default function NewsDetail({ news }: Props) {
  if (!news) return <div className="p-8 text-center text-gray-500">News not found.</div>;
  const url = typeof window !== 'undefined'
    ? window.location.href
    : typeof location !== 'undefined'
    ? location.href
    : '';
  return (
    <>
      <Head>
        <title>{news.title} | Football Fan News</title>
      </Head>
      <main className="min-h-screen bg-gray-50 pt-6">
        <div className="max-w-2xl mx-auto px-4 bg-white shadow rounded-lg p-6">
          <Link href="/news" className="text-sm text-blue-600 hover:underline">← Back to News</Link>
          <div className="flex items-center gap-3 mt-2 mb-1">
            <span className="uppercase px-2 py-0.5 rounded text-xs font-semibold bg-blue-100 text-blue-700">
              {news.category.replace('_', ' ')}
            </span>
            <span className="text-xs text-gray-400 ml-auto">
              {new Date(news.createdAt).toLocaleString()}
            </span>
          </div>
          <h1 className="text-2xl font-bold mb-3">{news.title}</h1>
          {news.imageUrl && (
            <img src={news.imageUrl} alt={news.title} className="w-full h-72 object-cover rounded mb-3" />
          )}
          <div className="prose prose-lg text-gray-900 mb-4" dangerouslySetInnerHTML={{ __html: news.content.replace(/\n/g, '<br/>') }} />
          <div className="flex gap-2 mt-2">
            <a className="inline-flex items-center text-sm text-blue-600 hover:underline"
               href={getTwitterShareUrl(news.title, url)}
               target="_blank"
               rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.8.36-1.67.61-2.58.73a4.48 4.48 0 0 0 1.98-2.48 9.17 9.17 0 0 1-2.87 1.1 4.48 4.48 0 0 0-7.64 4.09C7.69 9.84 4.07 8.13 1.64 5.15A4.48 4.48 0 0 0 3.1 11c-.7-.02-1.37-.21-1.96-.53v.05a4.49 4.49 0 0 0 3.6 4.4c-.37.1-.77.16-1.18.16-.29 0-.56-.03-.84-.08a4.45 4.45 0 0 0 4.18 3.1 9 9 0 0 1-5.58 1.92c-.36 0-.71-.02-1.06-.07A12.77 12.77 0 0 0 8.39 21c7.87 0 12.18-6.52 12.18-12.19 0-.19 0-.38-.01-.57A8.85 8.85 0 0 0 22.46 6z"/></svg>
              Twitter
            </a>
            <a className="inline-flex items-center text-sm text-blue-800 hover:underline"
               href={getFacebookShareUrl(url)}
               target="_blank"
               rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.84 8 9.8v-6.93h-2.4v-2.87H10V9.35c0-2.38 1.42-3.69 3.57-3.69 1.03 0 2.1.19 2.1.19v2.31H14c-1 0-1.3.63-1.3 1.29v1.54h2.58l-.41 2.87H12.7v6.93c4.56-.96 8-4.96 8-9.8z"/></svg>
              Facebook
            </a>
            <a className="inline-flex items-center text-sm text-orange-500 hover:underline"
               href={getRedditShareUrl(news.title, url)}
               target="_blank"
               rel="noopener noreferrer">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.06c0-6.64-5.38-12.02-12-12.02S0 5.42 0 12.06c0 6.61 5.38 12 12 12s12-5.39 12-12zm-5.19-2.59c.67 0 1.22.55 1.22 1.23 0 .67-.55 1.22-1.22 1.22a1.22 1.22 0 010-2.45zm-13.62 0a1.22 1.22 0 100 2.45 1.23 1.23 0 000-2.45zm2.34 6.99c1.03.77 2.55 1.25 4.47 1.25s3.44-.48 4.47-1.25c.31-.23.36-.67.13-.97-.23-.3-.67-.36-.97-.13-.8.6-2.08.99-3.62.99s-2.82-.39-3.62-.99a.695.695 0 00-.97.13c-.23.3-.17.74.13.97zm5.14-1.51c0 .74-.61 1.35-1.35 1.35-.75 0-1.35-.61-1.35-1.35a1.35 1.35 0 112.7 0zm3.57-1.35c-.75 0-1.36.61-1.36 1.35s.61 1.35 1.36 1.35c.74 0 1.35-.61 1.35-1.35 0-.74-.61-1.35-1.35-1.35z"/></svg>
              Reddit
            </a>
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const id = ctx.params?.id;
  if (!id || Array.isArray(id)) {
    return { props: { news: null } };
  }
  const n = await prisma.news.findUnique({
    where: { id: Number(id) }
  });
  if (!n) return { props: { news: null } };
  const news: News = {
    ...n,
    createdAt: n.createdAt.toISOString(),
    updatedAt: n.updatedAt.toISOString()
  };
  return { props: { news } };
};
