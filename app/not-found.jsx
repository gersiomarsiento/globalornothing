import React from 'react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-[100svh]">
      <img className="absolute h-full w-full object-cover" src="/images/notfound.jpeg" alt="" />
      <div className="bg-overlay absolute h-full w-full"> </div>

      <div className="hero-text-container px-5 text-center z-10 justify-items-center">
        <h1 className="mb-4">¡Parece que nos perdimos!</h1>
        <p className="text-lg mb-10">
          No pudimos encontrar la página que estás buscando. Puedes volver al inicio haciendo clic en el siguiente
          botón.
        </p>
        <div className="flex flex-col md-down:w-full md-down:max-w-[400px] md:flex-row gap-2.5">
          <Link href="/" className="btn btn-yellow md:px-[24px] md:py-[14px]">
            VOLVER
          </Link>
        </div>
      </div>
    </section>
  );
}
