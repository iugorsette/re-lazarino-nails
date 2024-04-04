
export function About() {
  const downloadcv = () => {
    const pdfUrl = "/Profile.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Profile.pdf";
    link.click();
  };
  return (
    
    
    <div className="mt-20 max-w-5xl w-full font-mono text-sm lg:flex flex-col">
      <p className="text-lg">
        <span className=" text-xl ">
        🌟 Transforme suas unhas com <span className="text-pink-500">Renata Lazarino</span>! 🌟 </span>
        <br />
        Descubra a mágica das {" "}
        <span className="text-pink-500 hover:text-rose-800">
          fibras de vidro
        </span>{" "}
        com a especialista Renata Lazarino. Com mais de um ano de experiência e mais de{" "}
        <span className="text-pink-500">5000 unhas</span> transformadas.
      </p>

      <p className="mt-4 text-lg">
      Nosso compromisso é proporcionar a você a melhor experiência possível, combinando inovação e qualidade incomparáveis. Do básico ao extraordinário, cada unha é tratada com cuidado e expertise, garantindo resultados deslumbrantes.
      </p>

      <div className="w-full flex justify-center">
        <button
          className="neon-btn bg-rose-600 text-white font-bold py-2 px-4 rounded mt-8 w-64 self-center"
          type="button"
          onClick={downloadcv}
        >
          Tabela de precos
        </button>
      </div>
    </div>
  );
}
