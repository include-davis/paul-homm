import { Inter } from "next/font/google";
import Footer from "@/components/footer/footer";
import "@/styles/globals.scss";
import { useRouter } from "next/router";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/header/header";

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
      <Header />
      <Component {...pageProps} />
      <Footer />
    </NextIntlClientProvider>
  );
}
