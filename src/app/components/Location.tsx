export function Location() {
  return (
    <div className="flex flex-col p-4">
<div className="p-4">
  <h2 className="text-center text-2xl text-zinc-800">Onde nos encontrar</h2>
</div>
<div className="rounded-3xl overflow-hidden flex flex-col items-center justify-center md:flex-row md:items-end md:justify-end">
  <p className="text-center text-xl text-zinc-800 p-5 md:p-0">📍 Av. Dr. José Mariano, 389 - Palmeiras, Pte. Nova - MG, 35430-228</p>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d934.8277488323952!2d-42.8936220748588!3d-20.4112794244504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa496503deb884b%3A0x3a17c421bec1f24b!2sEmbella%20Produtos%20de%20Beleza!5e0!3m2!1spt-BR!2sbr!4v1685404817456!5m2!1spt-BR!2sbr"
    width="600"
    height="200"
    loading="lazy"
  ></iframe>
</div>

    </div>
  );
}
