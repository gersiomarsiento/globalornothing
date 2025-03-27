export function WhySection() {
  return (
    <section className="justify-items-center md:max-h-[496px] bg-black-1 py-16">
      <h2 className="mb-16 w-fit px-6 text-center place-content-center headline-6 md:text-[45px] md:leading-[52px]">
        <span>¿Por qué elegir</span>
        <br className="md:hidden" />{' '}
        <span className="gold-headline md:text-[45px] md:leading-[52px]">GLOBAL OR NOTHING</span>?
      </h2>
      <div className="flex flex-col md:flex-row gap-20 px-5 xl:px-[120px]">
        <div className="flex flex-col gap-4 items-center text-center">
          <img src="/images/icon_world.png" alt="" height={88} width={88} />
          <h5 className="masked-text uppercase">Expansión sin límites</h5>
          <p className="text-left">
            Proporcionamos acceso a redes globales, inteligencia de mercado, y un enfoque personalizado que maximiza las
            oportunidades para cada cliente.
          </p>
        </div>
        <div className="flex flex-col gap-4 items-center text-center">
          <img src="/images/icon_shake.png" alt="" height={88} width={88} />
          <h5 className="masked-text uppercase">Confianza y excelencia en comercio exterior</h5>
          <p className="text-left">
            Garantizamos un servicio ágil y preciso, ideal para empresas que buscan una experiencia sin fricciones en
            sus procesos de importación y exportación.
          </p>
        </div>
      </div>
    </section>
  );
}
