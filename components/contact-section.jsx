import Link from 'next/link';

export function ContactSection() {
  return (
    <section className="">
      <div className="relative w-full h-[400px]">
        <img src="/images/contact-bg.jpeg" alt="contact section" className="w-full h-full object-cover opacity-45" />
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center px-10 text-center ">
          <h2>¿Listo para expandir tus horizontes?</h2>
          <div className="flex flex-col gap-2">
            <p>Conoce cómo nuestros servicios pueden transformar tu negocio.</p>
            <p>Contáctanos hoy mismo para una consulta personalizada.</p>
          </div>
          <Link
            href="https://docs.netlify.com/frameworks/next-js/overview/"
            className="btn btn-yellow w-fit md:px-[24px] md:py-[14px]"
          >
            CONTÁCTANOS
          </Link>
        </div>
      </div>
    </section>
  );
}
