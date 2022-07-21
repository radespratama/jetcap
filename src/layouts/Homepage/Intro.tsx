import toast from "react-hot-toast";
import { Copy } from "react-feather";
import { CopyToClipboard } from "react-copy-to-clipboard";

function ClipBoard() {
  const notify = () => toast.success("Copied to clipboard");

  return (
    <div className="max-w-[350px] w-full flex items-center space-x-3 rounded-lg bg-gray-900 overflow-hidden px-2">
      <div className="w-10/12 prose text-center">
        <pre className="bg-gray-900">{`${process.env.PUBLIC_API}`}</pre>
      </div>
      <div className="w-2/12 flex justify-center">
        <CopyToClipboard text={`${process.env.PUBLIC_API}`} onCopy={notify}>
          <button className="p-2 rounded-lg">
            <Copy className="w-5 h-5 text-gray-700 hover:text-gray-600" />
          </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}

export default function Intro() {
  return (
    <article className="max-w-screen-xl mx-auto">
      <section className="max-w-xl mx-auto text-white flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-5xl lg:text-6xl leading-tight font-bold text-center">
          Develop your UI before your backend
        </h1>
        <p className="font-medium text-lg my-5 text-center">
          Jetcap is a free online REST API that you can use whenever you need
          some fake data.{" "}
          <span className="gradient-tx">Instantly productive!</span> ✨
        </p>
        <ClipBoard />
        <p className="text-gray-400 mt-10 text-base md:text-base text-center font-medium">
          Free for use &bull; No credit card &bull; Secure
        </p>
      </section>
    </article>
  );
}
