import React from "react";
import { marked } from "marked";
import hljs from "highlight.js";

interface Props {
  data: string;
}

marked.setOptions({
  highlight: function (code) {
    return hljs.highlightAuto(code).value;
  },
});

export default function Prose({ data }: Props) {
  return (
    <>
      <div
        className="prose prose-invert max-w-none prose-pre:font-medium prose-a:text-sky-400 prose-a:font-medium prose-a:shadow-undersky prose-a:no-underline"
        dangerouslySetInnerHTML={{ __html: marked(data) }}
      />
    </>
  );
}
