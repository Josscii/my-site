import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Image from "next/image";
import Nav from "../components/nav";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="flex flex-col items-center py-10">
        <Image
          priority
          src="/images/profile.jpeg"
          className="rounded-full"
          height={144}
          width={144}
          alt="Josscii Weiyi"
        />
        <h1 className="text-4xl font-extrabold mt-4">Josscii Weiyi</h1>
      </header>
      <section className="text-xl">
        <p>
          Hi，我是陈胜，网名 Josscii。以前是一名 iOS
          开发工程师，现在在努力学习前端。
          <Nav href="/blog">blog</Nav> {" / "}
          <Nav href="/projects">projects</Nav> {" / "}
          <Nav href="https://github.com/Josscii">github</Nav> {" / "}
          <Nav href="https://weibo.com/u/2268468831">weibo</Nav>。
        </p>
      </section>
    </Layout>
  );
}
