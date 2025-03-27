// 'use client';

import Link from 'next/link';
import React from 'react';

export function ContactSection() {
  // // PRUEBA DE PARRALLAX EFFECT
  // const [scrollY, setScrollY] = useState(0);

  // // Asegurarse de que solo se ejecute en el cliente
  // useEffect(() => {
  //   if (typeof window !== 'undefined') {
  //     // Actualizar la posición del scroll
  //     const handleScroll = () => {
  //       setScrollY(window.scrollY); // Obtener la posición vertical del scroll
  //     };

  //     window.addEventListener('scroll', handleScroll);

  //     // Limpiar el evento cuando el componente se desmonte
  //     return () => window.removeEventListener('scroll', handleScroll);
  //   }
  // }, []); // Solo se ejecuta una vez cuando el componente se monta

  // // Establecer el estilo de parallax basado en la posición del scroll
  // const parallaxStyle = {
  //   backgroundPositionY: `${scrollY * 0.5}px`,
  //   backgroundAttachment: 'fixed' // Ajuste la velocidad del parallax
  // };

  // FIN DE PRUEBA DE PARRALLAX EFFECT

  return (
    <section className="">
      <div
        className="relative w-full h-[400px]"
        // style={{
        //   backgroundImage: 'url("https://source.unsplash.com/random/1600x900")',
        //   ...parallaxStyle
        // }}
      >
        <img src="/images/Puerto-Madero.png" alt="contact section" className="w-full h-full object-cover" />
        <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center px-10 text-center ">
          <h2 className="gold-headline">¿Listo para expandir tus horizontes?</h2>
          <div className="flex flex-col gap-2">
            <p className="lowercase-subtitle">Conoce cómo nuestros servicios pueden transformar tu negocio.</p>
            <p className="lowercase-subtitle">Contáctanos hoy mismo para una consulta personalizada.</p>
          </div>
          <Link
            href="https://docs.netlify.com/frameworks/next-js/overview/"
            className="btn btn-yellow w-fit md:px-[24px] md:py-[14px] button"
          >
            CONTÁCTANOS
          </Link>
        </div>
      </div>
    </section>
  );
}
