import React from "react";
import dynamic from "next/dynamic";
import MetaTags from "./MetaTags";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export default function Layout({
  children,
  title,
  description,
  url,
  image,
}: LayoutProps) {
  return (
    <>
      <MetaTags
        title={title}
        description={description}
        url={url}
        image={image}
      />
      <Header />
      <main className="flex-grow flex-wrap px-4">{children}</main>
      <Footer />
    </>
  );
}
