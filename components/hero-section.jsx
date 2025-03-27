import Link from 'next/link';
import { ContextAlert } from 'components/context-alert';

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center gap-3 sm:gap-4 w-full h-[100svh]">
      <img className="absolute h-full w-full object-cover" src="/images/hero.png" alt="" />
      <div className="bg-overlay absolute h-full w-full"> </div>
      <div className="hero-text-container px-5 text-center z-10 justify-items-center">
        <h1 className="mb-4 headline-5 md:headline-2">GLOBAL OR NOTHING</h1>
        <p className="text-lg mb-10">Tu socio estratégico en comercio internacional, de Argentina al mundo.</p>
        <div className="flex flex-col md-down:w-full md-down:max-w-[400px] md:flex-row gap-2.5">
          <Link
            href="https://docs.netlify.com/frameworks/next-js/overview/"
            className="btn btn-yellow md:px-[24px] md:py-[14px]"
          >
            HABLA CON UN EXPERTO
          </Link>
          <Link
            href="https://docs.netlify.com/frameworks/next-js/overview/"
            className="btn btn-outline md:px-[24px] md:py-[14px]"
          >
            NUESTROS SERVICIOS
          </Link>
        </div>
      </div>
    </section>
  );
}
