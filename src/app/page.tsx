"use client";

import Navbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="flex justify-between h-3/6 border-2 border-white mt-20">
        <p>hello</p>
        <p>hello</p>
      </div>
    </div>
  );
}