import { FC } from "react";
import Head from "next/head";
import Navbar from "../components/ui/Navbar";

interface Props {
  children?: React.ReactNode | undefined;
  title?: string;
}

const origin = typeof window === "undefined" ? "" : window.location.origin;

const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || "Pokemon App"}</title>
        <meta name="author" content="luiggy" />
        <meta name="description" content="Informacion sobre el pokemon ..." />
        <meta name="keywords" content="pokemon,pokedex" />
        <meta
          property="og:title"
          content={title ? `Informacion sobre ${title}` : "Poke App"}
        />
        <meta
          property="og:description"
          content={`Esta es la pagina sobre el pokemon ${title}`}
        />
        <meta property="og:image" content={`${origin}/img/banner.png`} />
      </Head>
      <Navbar />
      <main
        style={{
          padding: "0 20px",
        }}
      >
        {children}
      </main>
    </>
  );
};

export default Layout;
