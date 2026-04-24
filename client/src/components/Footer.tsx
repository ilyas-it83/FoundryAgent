import React from "react";

const Footer: React.FC = () => (
  <footer className="w-full bg-green-900 py-4 mt-12">
    <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
      <p className="text-sm text-green-100 font-medium">&copy; {new Date().getFullYear()} FootballFan. All rights reserved.</p>
      <div className="flex space-x-6 mt-2 md:mt-0">
        <a href="https://twitter.com" target="_blank" rel="noopener" className="hover:text-green-300 text-green-100">
          <span className="sr-only">Twitter</span>
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M24 4.56a9.94 9.94 0 01-2.828.775A4.932 4.932 0 0023.338 3c-.954.568-2.017.978-3.149 1.2A4.92 4.92 0 0016.616 3c-2.717 0-4.924 2.226-4.924 4.968 0 .39.045.765.126 1.128C7.728 8.986 4.1 7.112 1.67 4.149c-.425.736-.666 1.59-.666 2.504 0 1.726.853 3.243 2.172 4.133a4.898 4.898 0 01-2.23-.62v.062c0 2.414 1.695 4.446 3.946 4.909-.417.111-.86.171-1.316.171-.321 0-.633-.03-.938-.086.634 2.005 2.475 3.465 4.655 3.502A9.897 9.897 0 010 21.539a13.897 13.897 0 007.548 2.224c9.054 0 14.004-7.506 14.004-14.017 0-.213-.006-.425-.015-.636A10.075 10.075 0 0024 4.56z" />
          </svg>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener" className="hover:text-green-300 text-green-100">
          <span className="sr-only">Facebook</span>
          <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5">
            <path d="M22.675 0h-21.35C.601 0 0 .6 0 1.337v21.326C0 23.4.601 24 1.326 24h11.49v-9.294H9.691v-3.622h3.124V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.464.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.716-1.797 1.763v2.314h3.587l-.467 3.622h-3.12V24h6.116c.726 0 1.326-.6 1.326-1.337V1.337C24 .6 23.4 0 22.675 0" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
