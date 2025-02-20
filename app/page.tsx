import Link from "next/link";
import Image from "next/image";
export default function Home() {
  return (
    <div>
      <nav className="flex items-center justify-between border-b">
        <Link href="/" className="flex items-center h-10">
          <Image
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="h-full w-auto"
          />
          <p className="px-4 py-2">Tomorrow.ai</p>
        </Link>
        <div className="h-10 flex items-center">
          <Link href="/book" className="px-4 py-2 bg-black text-white">
            Book a call
          </Link>
        </div>
      </nav>
    </div>
  );
}
