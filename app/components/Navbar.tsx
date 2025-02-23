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
    <nav className="w-full">
      <div className="flex items-center justify-between h-10 py-4 px-4">
        <div className="flex items-center gap-4">
          <Navlink href="/">World</Navlink>
          <Navlink href="/">U.S.</Navlink>
          <Navlink href="/">Politics</Navlink>
          <Navlink href="/">Tech</Navlink>
          <Navlink href="/">Sports</Navlink>
        </div>

        {/* weird styling to absolutely center*/}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/" className="">
            <Image
              src="/logo-rem.png"
              alt="logo"
              width={100}
              height={100}
              className="h-5 w-auto animate-spin-slow hover:animate-spin"
            />
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Navlink href="/pricing">Products</Navlink>
          <Navlink href="/contact">About</Navlink>
          <Link
            className="font-bold hover:text-gray-500"
            href="https://cal.com/tanmai/30min"
            target="_blank"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
