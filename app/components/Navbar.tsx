import Link from "next/link";
import Image from "next/image";

function Navlink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`hover:text-gray-500 ${className}`}>
      {children}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between h-10 py-4 border-b">
      <div className="flex items-center gap-4">
        <Link href="/" className="">
          <Image
            src="/logo-rem.png"
            alt="logo"
            width={100}
            height={100}
            className="h-5 w-auto"
          />
        </Link>
        <Navlink href="/">World</Navlink>
        <Navlink href="/">U.S.</Navlink>
        <Navlink href="/">Politics</Navlink>
        <Navlink href="/">Business</Navlink>
        <Navlink href="/">Tech</Navlink>
        <Navlink href="/">Sports</Navlink>
      </div>
      <div className="flex items-center gap-4">
        <Link
          className="font-bold px-4 py-2 hover:text-gray-500"
          href="https://cal.com/tanmai/30min"
          target="_blank"
        >
          <p>Book a call</p>
        </Link>
      </div>
    </nav>
  );
}
