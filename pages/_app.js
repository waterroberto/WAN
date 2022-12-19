import '../styles/globals.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import Script from 'next/script';
import { SnackbarProvider } from 'notistack';
import Popup from '../components/Popup';

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
      <SnackbarProvider maxSnack={1}>
        <Script
          src='//code.tidio.co/p58fgwnuyv1ijzjf6dycbalgjeqrffc8.js'
          async
        ></Script>
        <Popup>
          <Component {...pageProps} />
        </Popup>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
