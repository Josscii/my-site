import Head from "next/head";
import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import Header from "../components/header";

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Josscii's blog</title>
      </Head>
      <Header title="blog" href="/blog" />
      <section>
        <ul className="list-none">
          {allPostsData.map(({ id, date, title }) => (
            <li className="flex flex-col mb-2" key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <small className="text-gray-400">
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
