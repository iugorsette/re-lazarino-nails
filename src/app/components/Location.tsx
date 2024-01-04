export function Location() {
  return (
    <div className="flex flex-col p-4">
      <div className="p-4">
        <h2 className="text-center text-2xl text-zinc-800">
          Onde nos encontrar
        </h2>
      </div>
      <div className="rounded-3xl overflow-hidden flex flex-col items-center justify-center md:flex-row md:items-end md:justify-end">
        <p className="text-center text-xl text-zinc-800 p-5 md:p-0">
          📍 Av. Francisco Viêira Martins, 461 A - Palmeiras Pte. Nova - MG, 35430-226
        </p>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3739.3231981085837!2d-42.89869092539892!3d-20.410776953458527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa4965092b14511%3A0x36075fabd8f6a01c!2sAv.%20Francisco%20Vi%C3%AAira%20Martins%2C%20461%20-%20Palmeiras%2C%20Pte.%20Nova%20-%20MG%2C%2035430-226!5e0!3m2!1spt-BR!2sbr!4v1704390627675!5m2!1spt-BR!2sbr"
          width="600"
          height="200"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}
