import React from 'react';
import Link from 'next/link';
import { ServicesPageContent } from '/components/services-page-content';

export default function Services() {
  return (
    <div>
      <section className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-[100svh]">
        <img className="absolute h-full w-full object-cover" src="/images/cargo.jpeg" alt="" />
        <div className="bg-overlay absolute h-full w-full"> </div>
        <div className="hero-text-container px-5 text-center z-10 justify-items-center">
          <h1 className="mb-4">Nuestros servicios</h1>
          <p className="text-lg mb-10">Encuentra el servicio ideal para tu negocio.</p>
        </div>
      </section>
      <section>
        <ServicesPageContent />
      </section>
    </div>
  );
}
