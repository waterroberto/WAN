import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b4cd1',
      dark: '#060606',
      contrastText: '#1b4cd5',
    },
    secondary: {
      main: '#FE8235',
      dark: '#1B1B1B',
    },
  },
});

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  nprogress.configure({ showSpinner: false });

  useEffect(() => {
    router.events.on('routeChangeStart', () => nprogress.start());
    router.events.on('routeChangeComplete', () => nprogress.done());
    router.events.on('routeChangeError', () => nprogress.done());
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
