import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex justify-center flex-1">
        <div className="w-full max-w-4xl px-4 border border-green-500 "></div>
      </div>
    </div>
  );
}
