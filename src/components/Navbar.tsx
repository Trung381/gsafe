"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const t = useTranslations();
  const pathname = usePathname();
  
  // Determine if we're on the English or Vietnamese route
  const locale = pathname.startsWith('/vi') ? 'vi' : 'en';
  const toggleLocale = locale === 'en' ? 'vi' : 'en';
  
  // Get the path without the locale prefix
  const path = pathname.replace(/^\/(en|vi)/, '') || '/';
  
  return (
    <nav className="bg-primary text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">GSAFE</Link>
        
        <div className="flex items-center gap-4">
          <Link href="/device" className="hover:underline">
            {t('common.navigation.devices')}
          </Link>
          <Link href="/purchase" className="hover:underline">
            {t('common.navigation.purchase')}
          </Link>
          <Link href={`/${toggleLocale}${path}`} className="hover:underline">
            {toggleLocale.toUpperCase()}
          </Link>
          <Link 
            href="/contact" 
            className="bg-white text-primary px-4 py-2 rounded-md hover:bg-gray-100"
          >
            {t('common.buttons.contactUs')}
          </Link>
        </div>
      </div>
    </nav>
  );
} 