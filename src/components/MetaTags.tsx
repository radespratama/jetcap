import React from "react";
import Head from "next/head";

interface MetaProps {
  title: string;
  description?: string;
  url?: string;
  image?: string;
}

export const meta = {
  title: "JetCap - Free Fake Rest Api",
  description:
    "JetCap is a free online REST API that you can use whenever you need some fake data. It can be in a README on GitHub, for a demo on CodeSandbox, in code examples on Stack Overflow, ...or simply to test things locally.",
  image: "/static/images/Banner.png",
  type: "website",
};
export default function MetaTags({
  title,
  description,
  url,
  image,
}: MetaProps) {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, user-scalable=no"
      />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>{title || meta.title}</title>
      <meta name="title" content={title || meta.title} />
      <meta name="description" content={description || meta.description} />

      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="canonical" href={`${process.env.NEXT_APP_BASE_URL}/${url}`} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`${process.env.NEXT_APP_BASE_URL}/${url}`}
      />
      <meta property="og:title" content={title || meta.title} />
      <meta property="og:description" content={description || meta.title} />
      <meta property="og:image" content={image || meta.image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@radespratamaa" />
      <meta name="twitter:title" content={title || meta.title} />
      <meta
        name="twitter:description"
        content={description || meta.description}
      />
      <meta name="twitter:image" content={image || meta.image} />
    </Head>
  );
}
