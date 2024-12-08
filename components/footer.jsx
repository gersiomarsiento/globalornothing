import Link from 'next/link';
import Image from 'next/image';

const navItems = [
  { linkText: 'Sobre Nosotros', href: '/about' },
  { linkText: 'Servicios', href: '/services' },
  { linkText: 'Contacto', href: '/contact' }
];
export function Footer() {
  return (
    <footer className="bg-primary relative">
      <div className="footer-wrapper px-[140px] py-[64px] flex flex-row">
        <div className="flex flex-col pr-[120px]">
          <Link href="/">
            <Image src="/images/logo.png" width="480" height="48" alt="logo" />
          </Link>
          <p>
            En Global or Nothing, creemos que los límites son solo el comienzo. Nos dedicamos a ayudarte a expandir tus
            horizontes, conectándote con mercados globales y transformando tu visión en una realidad internacional.
          </p>
        </div>
        <div className="min-w-[300px]">
          <h6>NAVEGACIÓN</h6>
          {!!navItems?.length && (
            <ul className="flex flex-col gap-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link href={item.href} className="inline-block no-underline py-1 transition hover:opacity-80">
                    {item.linkText}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="min-w-[300px]">
          <h6>HEAD OFFICE - ARGENTINA</h6>
          <p>ejemplo@correo.com</p>
          <p>Tel.: 123 123 123 123</p>
          <p>Dirección, CP, Capital Federal</p>
          <div className="flex flex-row">
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
            <Link href="/">
              <Image src="/images/icon-ig.svg" width="24" height="24" alt="instagram" />
            </Link>
          </div>
        </div>
      </div>
      <p className="absolute bottom-2 inset-center-x">
        Copyright ©2024 All rights reserved | This website was designed by VC
      </p>
    </footer>
  );
}
