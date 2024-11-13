import { useRouter } from "next/router";
import Header from "./header/header";
import Footer from "./footer/footer";

const PageLayout = ({ children }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <>
      <Header locale={locale} />
      <main>{children}</main>
      <Footer locale={locale} />
    </>
  );
};

export default PageLayout;
