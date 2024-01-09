'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'

import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

const items = [
    { label: 'Work', href: '/'},
    { label: 'About', href: '/about'},
    { label: 'Blog', href: '/blog'},
    { label: 'TSIF', href: '/tsif' },
    { label: 'Guestbook', href: '/guestbook' },
];

export const Header = () => {

    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    let path = usePathname();

    if (path?.includes("/works/")) {
      path = '/';
    }

    if (path?.includes("/blog/")) {
      path = '/blog';
    }

    return (
        <nav className={`z-50 text-xs md:text-sm mx-auto w-fit sticky px-2 ${scrolling ? 'opaque' : ''}`}
        >            
            <ul className="text-xs sm:text-sm md:text-base flex space-x-2 w-full sm:w-fit px-4">
                {items.map((item) => (
                    <li key={item.href} className="px-2 sm:px-4 h-full w-full py-2">
                        <Link href={item.href}>
                            {path === item.href && (
                                <motion.span layoutId='highlight'
                                    className="highlight w-full h-full" 
                                />
                            )}
                            {item.label}
                        </Link> 
                    </li>
                ))}
            </ul> 
        </nav>
    )
}