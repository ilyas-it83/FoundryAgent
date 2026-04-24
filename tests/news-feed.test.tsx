import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NewsFeed from '../components/news/NewsFeed';

// Mock fetch
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve({
      news: [
        {
          id: 1,
          title: 'Transfer News Test',
          content: 'A football transfer happened.',
          category: 'TRANSFER',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          imageUrl: null
        }
      ],
      count: 1
    })
  })
) as jest.Mock;

describe('NewsFeed', () => {
  it('renders and fetches news', async () => {
    render(<NewsFeed />);
    expect(screen.getByPlaceholderText('Search news...')).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText('Transfer News Test')).toBeInTheDocument();
    });
  });

  it('paginates', async () => {
    render(<NewsFeed />);
    await waitFor(() => {
      expect(screen.getByText('Transfer News Test')).toBeInTheDocument();
    });
    expect(screen.getByText('Page 1 / 1')).toBeInTheDocument();
    expect(screen.getByText('Previous')).toBeDisabled();
    expect(screen.getByText('Next')).toBeDisabled();
  });
});
