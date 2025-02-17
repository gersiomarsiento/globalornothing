'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const navItems = [
  { linkText: 'Inicio', href: '/' },
  { linkText: 'Sobre Nosotros', href: '/pages/about' },
  { linkText: 'Servicios', href: '/pages/services' },
  { linkText: 'Contacto', href: '/pages/contact' }
];
const iconHamburger = '/images/icon-hamburger.svg';

export function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 100);
      setIsScrollingUp(currentScrollY < lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav
      className={`
      fixed transition-all duration-500 top-0 left-0 w-full flex flex-wrap justify-between items-center gap-4 px-5 xl:px-[120px] py-4 z-20 
      ${isScrolled ? 'bg-primary' : ''} 
      ${isScrollingUp ? 'translate-y-0' : '-translate-y-full'}
      ${isVisible ? 'xl-down:bg-primary' : ''}
      `}
    >
      <Link href="/">
        <Image src="/images/logo.png" width="288" height="48" alt="logo" className="md-down:max-w-[60vw]" />
      </Link>
      <button className="xl:hidden" onClick={() => setIsVisible(!isVisible)}>
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 34V32H40V34H8ZM8 25V23H40V25H8ZM8 16V14H40V16H8Z" fill="currentColor" />
        </svg>
      </button>
      {!!navItems?.length && (
        <ul
          className={`${
            isVisible ? 'flex animate-slideInFromTop' : 'hidden'
          } xl:flex flex-col xl:flex-row flex-wrap xl-down:w-full xl-down:items-center gap-x-10 gap-y-1`}
        >
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className={`inline-block no-underline px-4 py-2.5 transition hover:opacity-80 ${
                  item.linkText === 'Contacto' ? 'border border-solid border-white px-6 uppercase' : ''
                }`}
              >
                {item.linkText}
              </Link>
            </li>
          ))}
          <li className="no-underline px-4 py-2.5 transition hover:opacity-80">
            <select className="bg-transparent cursor-pointer" name="lang" id="lang">
              <option value="ES">ES</option>
              <option value="EN">EN</option>
            </select>
          </li>
        </ul>
      )}
    </nav>
  );
}
