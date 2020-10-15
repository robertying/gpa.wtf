import "styles/index.css";
import { useMemo } from "react";
import { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ApolloProvider } from "@apollo/client";
import { useMediaQuery } from "@material-ui/core";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { zhCN } from "@material-ui/core/locale";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import relativeTime from "dayjs/plugin/relativeTime";
import { useApollo } from "lib/client";
import { ToastProvider } from "components/Toast";

dayjs.locale("zh-cn");
dayjs.extend(relativeTime);

function MyApp({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);

  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createMuiTheme(
        {
          palette: darkMode
            ? {
                type: "dark",
                primary: { main: "#9f7aea" },
                secondary: { main: "#fff" },
              }
            : {
                type: "light",
                primary: { main: "#660874" },
                secondary: { main: "#fff" },
              },
        },
        zhCN
      ),
    [darkMode]
  );

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta name="theme-color" content="#660874" />
        <meta name="apple-mobile-web-app-title" content="courseX" />
        <meta name="application-name" content="courseX" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#660874" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <DefaultSeo
        title="课程信息共享计划"
        titleTemplate="courseX｜%s"
        description="星期四课程信息共享计划"
        openGraph={{
          url: "https://course.thu.community/",
          type: "website",
        }}
      />
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <ToastProvider>
            <Component {...pageProps} />
          </ToastProvider>
        </ThemeProvider>
      </ApolloProvider>
    </>
  );
}

export default MyApp;
