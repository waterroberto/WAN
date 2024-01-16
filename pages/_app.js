import { createTheme, ThemeProvider } from '@mui/material/styles';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { SnackbarProvider } from 'notistack';
import nprogress from 'nprogress';
import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { AuthContextProvider } from '../context/AuthContext';
import { UserDataProvider } from '../context/UserDataContext';
import '../styles/globals.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#51b2df',
      dark: '#0a3877',
      contrastText: '#1b4cd5',
    },
    secondary: {
      main: '#010647',
      dark: '#1a052e',
    },
    custom: {
      main: '#1b1b1b',
      contrastText: '#060606',
    },
  },
});

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const router = useRouter();
  nprogress.configure({ showSpinner: false });
  // nprogress.configure({ showSpinner: false });

  useEffect(() => {
    router.events.on('routeChangeStart', () => nprogress.start());
    router.events.on('routeChangeComplete', () => nprogress.done());
    router.events.on('routeChangeError', () => nprogress.done());
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      {/* <Script src='//code.jivosite.com/widget/yOzEEKiM0t' async /> */}
      <Script src='//code.tidio.co/gszlypxhumqn7lgays1luqlionp7qxol.js' async />
      <AuthContextProvider>
        <UserDataProvider>
          <Component {...pageProps} />
        </UserDataProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default MyApp;
