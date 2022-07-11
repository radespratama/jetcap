import { A } from "@components/NavLink";

export default function Intro() {
  return (
    <>
      <h1 className="title-mark max-w-fit select-none text-gray-100 text-5xl font-bold leading-tight">
        Basic guide.
      </h1>
      <section className="my-5 max-w-2xl">
        <p className="text-base lg:text-lg text-white prose prose-a:underline prose-a:text-sky-500 tracking-wide">
          Below you`ll find examples using Fetch, Jquery, AJAX, and Axios API
          but you can{" "}
          <A
            href={process.env.GITHUB_REPO}
            target="_blank"
            className="underline-offset-4 hover:no-underline"
          >
            Jetcap
          </A>{" "}
          with any other language. You can copy-paste the code into your browser
          console to test quickly.
        </p>
        <div className="text-white text-lg mt-8">
          Endpoint list :
          <ul className="flex space-x-6 mt-2 cursor-pointer">
            <li className="text-sky-500">/users</li>
            <li className="text-sky-500">/todos</li>
            <li className="text-sky-500">/songs</li>
            <li className="text-sky-500">/images</li>
          </ul>
        </div>
      </section>
    </>
  );
}
