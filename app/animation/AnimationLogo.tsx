"use client";
import Image from "next/image";
export const AnimateLogo = () => {
  return (
    <div className="flex flex-row justify-between  w-340 ">
      <div>
        <h1  className="text-5xl font-dancingScript ">Olá</h1>
        <h1 className="font-dancingScript fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none" > Eu sou Renata Lazarino</h1>
        <h1 className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto lg:bg-none font-dancingScript">Nails Designer</h1>
      </div>
      <Image
        className="rounded-lg"
      src="/renata.png" alt="Renata Lazarino" width={200} height={200} />
    </div>
  );
};
