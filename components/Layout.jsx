import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ title, keyword, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
      </Head>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

Layout.defaultProps = {
  title: "Dslog | Agency Blog for Design and Development",
  description: "Sharing valuable memories of DShine",
  keyword: "Design, Development, Blog",
};