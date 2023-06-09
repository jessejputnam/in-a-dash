import Head from "next/head";
import { SessionProvider } from "next-auth/react";

import type { AppProps } from "next/app";
import type { Session } from "next-auth";

import "@/styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps }
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={session}>
      <Head>
        <meta
          name='description'
          content='News/article/post/video aggregator dashboard for personalized topics and ability to share/follow/interact with other users and their posts/boards.'
        />
        <title>In a Dash</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />

        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest' />
        <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='apple-mobile-web-app-title' content='In A Dash' />
        <meta name='application-name' content='In A Dash' />
        <meta name='msapplication-TileColor' content='#da532c' />
      </Head>

      <Component {...pageProps} />
    </SessionProvider>
  );
}
