import fs from "fs";
import path from "path";
import dynamic from "next/dynamic";
import { useState, useEffect } from "react";
import type { NextPage, GetStaticProps } from "next";
import matter from "gray-matter";

import Layout from "@components/Layout";
import Loading from "@components/Loading";

const Intro = dynamic(() => import("@layouts/Guidepage/Intro"));
const ContentDisplay = dynamic(
  () => import("@layouts/Guidepage/ContentDisplay")
);

interface Props {
  guide: string;
}

const Guide: NextPage<Props> = ({ guide }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (guide) {
      setTimeout(() => {
        setLoading(false);
      }, 1500);
    }
    return () => clearTimeout();
  }, [guide]);

  return (
    <Layout title="Jetcap - Basic guide">
      {loading ? (
        <Loading />
      ) : (
        <article className="max-w-screen-xl mx-auto pt-28">
          <Intro />
          <ContentDisplay guide={guide} />
        </article>
      )}
    </Layout>
  );
};

export default Guide;

export const getStaticProps: GetStaticProps = async () => {
  const files = fs.readdirSync(path.join("data"));

  const guides = files.map((filename: string) => {
    const isFile = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("data", filename),
      "utf8"
    );

    const { content } = matter(markdownWithMeta);

    return {
      isFile,
      content,
    };
  });

  return {
    props: {
      guide: guides,
    },
  };
};
