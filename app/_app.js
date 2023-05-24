import '@/styles/globals.css';
import { useEffect } from 'react';

export default function App({ Component, pageProps }) {
  useEffect(() => {
    // No need for the import('preline') statement here
  }, []);

  return <Component {...pageProps} />;
}
