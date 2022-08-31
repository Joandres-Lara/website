import { FC } from "react";
import "styles/globals.css";

export default function App({
 Component,
 pageProps,
}: {
 Component: FC;
 pageProps: Record<string, unknown>;
}) {
 return <Component {...pageProps} />;
}
