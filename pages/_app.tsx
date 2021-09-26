import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@styles/theme";
import createEmotionCache from "@styles/createEmotionCache";
import Container from "@mui/material/Container";
import { WapperAuth } from "@src/auth";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <ThemeProvider theme={theme}>
        <WapperAuth>
          <CssBaseline />
          <Container>
            <Component {...pageProps} />
          </Container>
        </WapperAuth>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      </ThemeProvider>
    </CacheProvider>
  );
}
