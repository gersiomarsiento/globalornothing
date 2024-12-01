"use client";
import Image from 'next/image';
import Link from 'next/link';
import netlifyLogo from 'public/netlify-logo.svg';
import { useState } from 'react';

const navItems = [
    { linkText: 'Inicio', href: '/' },
    { linkText: 'Sobre Nosotros', href: '/about' },
    { linkText: 'Servicios', href: '/services' },
    { linkText: 'Contacto', href: '/contact' },
];
const iconHamburger = '/images/icon-hamburger.svg';

export function Header() {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full flex flex-wrap justify-between items-center gap-4 px-2.5 md:px-5 py-4 z-10">
            <Link href="/">
                <Image src={netlifyLogo} alt="Netlify logo" />
            </Link>
            <button className="md:hidden" onClick={() => setIsVisible(!isVisible)}>
                <Image width="50" height="50" src={iconHamburger} alt="Hamburger menu" />
            </button>
            {!!navItems?.length && (
                <ul className={`${isVisible ? 'flex' : 'hidden'} md:flex flex-wrap gap-x-4 gap-y-1`}>
                    {navItems.map((item, index) => (
                        <li key={index}>
                            <Link
                                href={item.href}
                                className="inline-block px-1.5 py-1 transition hover:opacity-80 sm:px-3 sm:py-2"
                            >
                                {item.linkText}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
}