"use client";

import {Container} from "@mui/material";
import Navbar from "./components/navigation/navbar";

export default function Home() {
  return (
    <div className="h-full">
      <Navbar />
      <div className="h-3/6 mt-20 text-white">
        <Container className="flex justify-between border-2 border-white" maxWidth="xl">
          <h1 className="w-2/5">
            Start selling on Instagram, Tiktok, Youtube, and more with a few taps of a button
          </h1>
          <video controls className="h-full w-2/4 rounded">
            <source src="https://youtu.be/6KBp4MCFq_4?si=OtytmvG6xk1gmj9J" />
            <p>Your browser does not support video type.</p>
          </video>
        </Container>
      </div>
    </div>
  );
}
