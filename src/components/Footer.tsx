"use client";

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  
  return (
    <footer className="bg-neutral-800 text-white py-8 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">GSAFE</h3>
            <p>{t('home.subtitle')}</p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:underline">{t('common.navigation.home')}</Link></li>
              <li><Link href="/device" className="hover:underline">{t('common.navigation.devices')}</Link></li>
              <li><Link href="/purchase" className="hover:underline">{t('common.navigation.purchase')}</Link></li>
              <li><Link href="/contact" className="hover:underline">{t('common.navigation.contact')}</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">{t('contact.title')}</h3>
            <p>{t('contact.info.email')}: contact@gsafe.com</p>
            <p>{t('contact.info.phone')}: +1 123 456 7890</p>
            <p>{t('contact.info.address')}: 123 Security St, Safety City</p>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} GSAFE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 