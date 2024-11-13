import Header from "./header/header";
import Footer from "./footer/footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default PageLayout;
