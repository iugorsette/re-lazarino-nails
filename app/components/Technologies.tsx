import Image from "next/image";

export function Technologies() {
  const techData = [
    {
      name: "Aplicação decorada",
      imagem: "/image-1.png",
      description: "Para você que procura praticidade no dia a dia, a esmaltação em gel é ideal, pois dura em média 30 dias sem descascar e sem perder o brilho",
    },
    {
      name: "Nail Art",
      imagem: "/image-12.png",
      description: "Oferecemos uma variedade de opções, desde a esmaltação total até a clássica francesinha e muito mais. Deixe suas unhas brilharem com estilo e personalidade!",
    },
    {
      name: "Francesinha",
      imagem: "/image-3.png",
      description: "Apresentamos uma reviravolta moderna na clássica francesinha: adornada com corações pretos. Esta combinação única de elegância e ousadia oferece um toque de estilo sofisticado às suas unhas.",

    },
    {
      name: "Francesinha + encapsulada",
      imagem: "/image-4.png",
      description: "Unhas almond encapsuladas em estilo francesinha, alternando entre branco clássico e brilhos cintilantes. Elegância e glamour em uma manicure única.",
    },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-5.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-6.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-7.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-8.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-9.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-10.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-11.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-12.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-13.png",
    //   description: " ",
    // },
    // {
    //   name: "Aplicação decorada",
    //   imagem: "/image-14.png",
    //   description: " ",
    // }
  ];

  return (
    <div className="mt-5 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg mb-8">
        Aqui estão algumas de minhas
        <span className="text-pink-600"> artes </span> realizadas.
      </p>
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left gap-2">
        {techData.map((tech) => (
          <div
            key={tech.name}
            className={`flex flex-col content-start items-center group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-pink-600 hover:bg-gray-100 hover:dark:bg-neutral-800/30`}
          >
         
            <Image
              className=" items-center rounded-lg object-cover h-48 w-96"
              src={tech.imagem}
              alt="Renata Lazarino"
              width={200}
              height={200}
            />
               <h2 className={`mt-3 text-lg font-semibold`}>
              {tech.name}
            </h2>
            <p className="text-zinc-500"> {tech.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
