import { CopyToClipboard } from "react-copy-to-clipboard";
import toast from "react-hot-toast";

export default function Intro() {
  const notify = () => toast.success("Copied to clipboard");

  return (
    <article className="max-w-screen-xl mx-auto">
      <section className="max-w-xl mx-auto flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl sm:text-6xl mb-6 leading-tight text-white font-bold text-center">
          Develop your UI before your{" "}
          <span className="gradient-tx">backend</span>
        </h1>
        <p className="text-gray-100 text-lg font-medium text-center">
          Used by{" "}
          <span className="italic">
            developers, architects, teachers, students, open source projects,
            code tinkerers{" "}
          </span>
          , … across the globe 🌏
        </p>
        <CopyToClipboard text={`${process.env.PUBLIC_API}`} onCopy={notify}>
          <div className="my-8 prose w-full max-w-sm rounded-md text-center font-mono text-white">
            <pre className="bg-gray-900">{process.env.PUBLIC_API}</pre>
          </div>
        </CopyToClipboard>
        <p className="text-gray-400 text-lg font-medium">
          Free for use &bull; No card required &bull; Secure
        </p>
      </section>
    </article>
  );
}
