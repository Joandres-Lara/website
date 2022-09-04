import { FC } from "react";
import Head from "next/head";
import "styles/globals.css";

export default function App({
 Component,
 pageProps,
}: {
 Component: FC;
 pageProps: Record<string, unknown>;
}) {

 return (
  <>
   <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, shrink-to-fit=no" />
   </Head>
   <Component {...pageProps} />
  </>
 )
}
