import Image from "next/image";
import { useMediaQuery } from "react-responsive";

import instagram from "../../../public/instagramLogo.svg";
import whatsapp from "../../../public/whatsappLogo.svg";

export function Header() {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const size = isMobile ? 96 : 248;

  return (
    <div className="bg-zinc-100 flex flex-col md:flex-row md:items-center md:justify-between p-3">
    <div>
      <h1 className="text-pink-local-500 text-center mb-1 mt-0 ">
        Renata Lazarino Nails
      </h1>
      <p className="text-zinc-400 text-center">
        Especialista em fibra de vidro
      </p>
    </div>
    <div className="p-2 bg-zinc-100 flex justify-center md:justify-end">
      <a
        target="_blank"
        href="https://www.instagram.com/renatalazarinonails/"
        className="hover:shadow-md hover:bg-zinc-300 rounded-full w-8 m-1"
      >
        <Image alt="instagram" src={instagram} />
      </a>
  
      <a
        target="_blank"
        href="https://wa.me/5531971630379"
        className="hover:shadow-md hover:bg-zinc-300 rounded-full w-8 m-1"
      >
        <Image alt="whatsapp" src={whatsapp} />
      </a>
    </div>
  </div>
  
  );
}
