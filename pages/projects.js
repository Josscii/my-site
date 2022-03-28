import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Header from "../components/header";

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Josscii's projects</title>
      </Head>
      <Header title="projects" href="/projects" />
      <section>
        <ul className="list-none">
          <li className="flex flex-col mb-4 gap-1">
            <Link href="https://apps.apple.com/cn/app/%E7%99%BD%E8%AF%9D%E5%A4%A9%E6%B0%94/id1501015098">
              <a className="text-lg font-bold">白话天气</a>
            </Link>
            <p>
              一款只用文字显示天气信息的 iOS
              app。天气类应用已经泛滥了，想要做一款不一样的很难，虽然自己不懂设计，但简洁总是很难出错。
            </p>
          </li>
          <li className="flex flex-col mb-3 gap-1">
            <Link href="https://shidou.josscii.me/">
              <a className="text-lg font-bold">诗斗</a>
            </Link>
            <p>
              一个 Wordle 的唐诗变体。2022年初互联网上最火的游戏 Wordle 的变体，
              玩法是猜唐诗。主要用到了 React + Tailwind。
            </p>
          </li>
          <li className="flex flex-col mb-3 gap-1">
            <Link href="https://shixi.josscii.me/">
              <a className="text-lg font-bold">时习</a>
            </Link>
            <p>
              一个简单的复习本。记录需要记忆的内容，然后在复习周期内不断的复习。主要用到了
              React + ChakraUI。
            </p>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
