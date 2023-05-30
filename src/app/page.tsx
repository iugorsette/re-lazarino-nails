"use client";

import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import {  Recado } from "./components/Recado";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-pink-local-500 from-40% via-zinc-200 to-zinc-200">
      <Header />
      <div className="flex-grow">
        <Content />
        <Location />
        <Recado />
      </div>
      <Footer />
    </div>
  );
}