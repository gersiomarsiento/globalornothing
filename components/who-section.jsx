import Link from 'next/link';

export function WhoSection() {
  return (
    <section className="relative h-[100svh] md:max-h-[788px] bg-black">
      <img className="absolute h-full w-full object-cover" src="/images/plane.jpg" alt="" />
      <div className="bg-overlay-2 absolute h-full w-full  md:max-w-[75%]">
        <div className="relative h-full w-full">
          <div className="content-wrapper absolute inset-center-y md:pl-5 xl:pl-[120px] md-down:h-full md:max-w-[80%] flex flex-col md:gap-10">
            <h4 className="md-down:h-full md-down:pt-12 md-down:text-center bg-overlay-title">Quiénes somos</h4>
            <div className="flex flex-col gap-10 bg-overlay-copy md-down:pt-20 md-down:pb-10 md-down:px-5">
              <p>
                En Global or Nothing, creemos que los límites son solo el comienzo. Nos dedicamos a ayudarte a expandir
                tus horizontes, conectándote con mercados globales y transformando tu visión en una realidad
                internacional.
                <br />
                Nos dedicamos a la intermediación comercial, gestión de compras internacionales y comercio exterior.
                Nuestro objetivo es ser un puente entre empresas globales y mercados clave, con especial énfasis en la
                eficiencia y la confiabilidad en el manejo de las operaciones.
              </p>
              <Link
                href="https://docs.netlify.com/frameworks/next-js/overview/"
                className="btn btn-yellow w-fit md-down:w-full md:px-[24px] md:py-[14px]"
              >
                LEER MÁS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
