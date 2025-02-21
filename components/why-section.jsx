export function WhySection() {
  return (
    <section className="h-[100svh] justify-items-center md:max-h-[496px] bg-black py-16">
      <h2 className="mb-16 w-fit place-content-center text-center h2">
        ¿Por qué elegir <span className="bg-gradient bg-clip-text text-transparent">GLOBAL OR NOTHING</span>?
      </h2>
      <div className="flex flex-col md:flex-row gap-20 px-5 xl:px-[120px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <img src="/images/icon_world.png" alt="" height={88} width={88} />
          <h5 className="subtitle bg-gradient bg-clip-text text-transparent">Expansión sin límites</h5>
          <p className="text-left p-text">
            Proporcionamos acceso a redes globales, inteligencia de mercado, y un enfoque personalizado que maximiza las
            oportunidades para cada cliente.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <img src="/images/icon_shake.png" alt="" height={88} width={88} />
          <h5 className="subtitle bg-gradient bg-clip-text text-transparent">
            Confianza y excelencia en comercio exterior
          </h5>
          <p className="text-left p-text">
            Garantizamos un servicio ágil y preciso, ideal para empresas que buscan una experiencia sin fricciones en
            sus procesos de importación y exportación.
          </p>
        </div>
      </div>
    </section>
  );
}
