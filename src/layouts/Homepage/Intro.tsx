import React from "react";

export default function Intro() {
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
        <button className="px-8 py-3 bg-sky-500 hover:bg-sky-700 transition-all duration-200 rounded-md text-gray-100 my-5">
          Get started
        </button>
        <p className="text-gray-400 text-lg font-medium">
          Free for use &bull; No card required &bull; Secure
        </p>
      </section>
    </article>
  );
}
