import ActiveLink, { A } from "./NavLink";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gray-950">
      <nav className="max-w-screen-xl mx-auto grid grid-cols-2 gap-4 py-[13px] px-4 border-b border-gray-800">
        <A href="/" className="font-medium text-gray-100 tracking-tight text-3xl">
          Jetcap
        </A>
        <div className="flex items-center justify-end space-x-3">
          <ActiveLink href="/guide" className="links">
            Guide
          </ActiveLink>
          <ActiveLink href="/sponsor" className="links">
            Sponsor ?
          </ActiveLink>
        </div>
      </nav>
    </header>
  );
}
