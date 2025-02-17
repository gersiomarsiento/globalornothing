import React from 'react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-[100svh]">
      <img className="absolute h-full w-full object-cover" src="/images/about-hero.png" alt="" />
      <div className="bg-overlay absolute h-full w-full"> </div>

      <div className="hero-text-container px-5 text-center z-10 justify-items-center">
        <h1 className="mb-4">
          Somos <span>GLOBAL OR NOTHING</span>
        </h1>
        <p className="text-lg mb-10">
          Nos dedicamos a la intermediación comercial, gestión de compras internacionales y comercio exterior. Nuestro
          enfoque es ser un puente entre empresas globales y mercados clave, con especial énfasis en la eficiencia y
          confiabilidad en el manejo de las operaciones.
        </p>
      </div>
    </section>
  );
}
