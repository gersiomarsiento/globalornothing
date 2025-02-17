import React from 'react';
import { ContactForm } from '/components/contact-form';

export default function Contact() {
  return (
    <div className="bg-black-1">
      <section className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-[100svh]">
        <img className="absolute h-full w-full object-cover" src="/images/city-view.jpeg" alt="" />
        <div className="bg-overlay absolute h-full w-full"> </div>
        <div className="hero-text-container px-5 text-center z-10 justify-items-center">
          <h1 className="mb-4">Contáctanos</h1>
          <p className="text-lg mb-10">Ponte en contacto con nosotros para hacer crecer tu negocio.</p>
        </div>
      </section>
      <section className="bg-[url(/images/map-bg.svg)]">
        <div className="container mx-auto px-5 py-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
