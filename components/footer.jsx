import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { linkText: 'Sobre Nosotros', href: '/pages/about' },
  { linkText: 'Servicios', href: '/pages/services' },
  { linkText: 'Contacto', href: '/pages/contact' }
];
export function Footer() {
  return (
    <footer className="bg-primary relative">
      <div className="footer-wrapper px-5 xl-down:pb-20 xl:px-[140px] py-[64px] flex flex-col md:flex-row">
        <div className="flex flex-col xl-down:pb-5 md:pr-10 xl:pr-[120px]">
          <Link href="/">
            <Image src="/images/logo.png" width="480" height="48" alt="logo" />
          </Link>
          <p className="caption">
            En Global or Nothing, creemos que los límites son solo el comienzo. Nos dedicamos a ayudarte a expandir tus
            horizontes, conectándote con mercados globales y transformando tu visión en una realidad internacional.
          </p>
        </div>
        <div className=" md-down:hidden md:min-w-[200px] xl:min-w-[300px]">
          <h6 className="large-label pb-[9px]">NAVEGACIÓN</h6>
          {!!navItems?.length && (
            <ul className="flex flex-col gap-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="inline-block large-label no-underline py-[9px] transition hover:opacity-80"
                  >
                    {item.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="md:min-w-[200px] xl:min-w-[300px]">
          <h6 className="p-text-sm py-[4px]">HEAD OFFICE - ARGENTINA</h6>
          <p className="p-text-sm py-[4px]">ejemplo@correo.com</p>
          <p className="p-text-sm py-[4px]">Tel.: 123 123 123 123</p>
          <p className="p-text-sm py-[4px]">Alicia Moreau de Justo 2050, Of. 328, Puerto Madero, C.A.B.A.</p>
          {/* <div className="flex flex-row">
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
          </div> */}
        </div>
      </div>
      <div className="absolute bottom-2 inset-center-x w-full text-center px-5">
        <p className="caption">
          Copyright ©2024 All rights reserved | This website was designed by <a href="">VC</a>
        </p>
      </div>
    </footer>
  );
}
