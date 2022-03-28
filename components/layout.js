import Head from "next/head";

export const siteTitle = "Josscii’s personal website";

export default function Layout({ children }) {
  return (
    <div className="container mx-auto px-4 max-w-xl">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={siteTitle} />
      </Head>
      <main>{children}</main>
    </div>
  );
}
