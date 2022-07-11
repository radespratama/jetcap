import React from "react";
import { A } from "./NavLink";

export default function Footer() {
  return (
    <footer className="max-w-screen-xl mx-auto select-none text-white border-t border-gray-800">
      <section className="flex justify-between items-center py-4 px-4">
        <p className="text-base">
          Built using{" "}
          <A href="https://www.nextjs.org/" target="_blank" className="links">
            Next JS
          </A>
        </p>
        <div className="space-x-10 text-base">
          Want to contribute?{" "}
          <A href={process.env.GITHUB_REPO} target="_blank" className="links">
            Github
          </A>
        </div>
      </section>
      <section className="max-w-2xl py-3 text-center mx-auto border-t border-gray-800">
        &copy; {new Date().getFullYear()} Jetcap | Rades Pratama.
      </section>
    </footer>
  );
}
