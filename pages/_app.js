import "../styles/globals.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nprogress from "nprogress";
import "nprogress/nprogress.css";
import Script from "next/script";
import { SnackbarProvider } from "notistack";
import Popup from "../components/Popup";
import { UserDataProvider } from "../context/UserDataContext";
import { AuthContextProvider } from "../context/AuthContext";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1b4cd1",
      dark: "#060606",
      contrastText: "#1b4cd5",
    },
    secondary: {
      main: "#FE8235",
      dark: "#1b1b1b",
    },
    custom: {
      main: "#1b1b1b",
      contrastText: "#060606",
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
    router.events.on("routeChangeStart", () => nprogress.start());
    router.events.on("routeChangeComplete", () => nprogress.done());
    router.events.on("routeChangeError", () => nprogress.done());
  }, [router.events]);

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider maxSnack={1}>
        <Script
          src="//code.tidio.co/p58fgwnuyv1ijzjf6dycbalgjeqrffc8.js"
          async
        ></Script>
        <Popup>
          <AuthContextProvider>
            <UserDataProvider>
              <Component {...pageProps} />
            </UserDataProvider>
          </AuthContextProvider>
        </Popup>
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default MyApp;
