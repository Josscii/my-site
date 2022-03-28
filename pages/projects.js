import Head from "next/head";
import Layout from "../components/layout";
import Link from "next/link";
import Header from "../components/header";
import { getProjects } from "../lib/projects";

export default function Projects({ projects }) {
  return (
    <Layout>
      <Head>
        <title>Josscii's projects</title>
      </Head>
      <Header title="projects" href="/projects" />
      <section>
        <ul className="list-none">
          {projects.map(({ id, title, description, link }) => (
            <li className="flex flex-col mb-4 gap-1" key={id}>
              <Link href={link}>
                <a className="text-lg font-bold">{title}</a>
              </Link>
              <p>{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const projects = getProjects();
  return {
    props: {
      projects,
    },
  };
}
