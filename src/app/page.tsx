import Image from "next/image";

export default function Home() {
  return (
    <main className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-white">
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-accent border border-accent-yellow"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <div className="w-full h-96 bg-dark-gray rounded-xl shadow-dark border border-stroke-gray"/>
      <h1 className="font-title text-4xl">Title</h1>
    </main>
  );
}
