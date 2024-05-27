import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone="PST"
      messages={pageProps.messages}
      className={`${inter.variable}`}
    >
      <Component {...pageProps} />
    </NextIntlClientProvider>
  );
}
