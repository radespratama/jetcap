import React from "react";
import dynamic from "next/dynamic";

const MetaTags = dynamic(() => import("./MetaTags"));
const Header = dynamic(() => import("./Header"));
const Footer = dynamic(() => import("./Footer"));

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
      <main className="flex-grow flex-wrap px-4 min-h-screen">{children}</main>
      <Footer />
    </>
  );
}
