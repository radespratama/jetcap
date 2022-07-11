import fs from "fs";
import path from "path";
import type { NextPage, GetStaticProps } from "next";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Intro from "@layouts/Guidepage/Intro";
import ContentDisplay from "@layouts/Guidepage/ContentDisplay";

interface Props {
  guide: string;
}

const Guide: NextPage<Props> = ({ guide }) => {
  return (
    <Layout title="Jetcap - Basic guide">
      <article className="max-w-screen-xl mx-auto pt-28">
        <Intro />
        <ContentDisplay guide={guide} />
      </article>
    </Layout>
  );
};

export default Guide;

export const getStaticProps: GetStaticProps = async () => {
  const guideDirectory = path.join("src/libs/data");
  const files = fs.readdirSync(guideDirectory);

  const guides = files.map((filename: string) => {
    const isFile = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("src/libs/data", filename),
      "utf8"
    );

    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
      isFile,
      frontmatter,
      content
    };
  });

  return {
    props: {
      guide: guides,
    },
  };
};
