"use client";

import { useTranslations } from 'next-intl';
import { Button } from 'antd';
import { ArrowRight, Shield, Lock, Bell } from 'lucide-react';
import Link from 'next/link';
import GSafeHero from '@/components/hero/gsafe-hero';

export default function Home() {
  const t = useTranslations();

  return (
    // <div className="flex flex-col">
    //   {/* Hero Section */}
    //   <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
    //     <div className="container mx-auto px-4">
    //       <div className="max-w-3xl mx-auto text-center">
    //         <h1 className="text-5xl font-bold mb-6">{t('home.title')}</h1>
    //         <p className="text-xl mb-10">{t('home.subtitle')}</p>
            
    //         <div className="flex gap-4 justify-center">
    //           <Button type="primary" size="large" className="bg-white text-primary hover:bg-gray-100">
    //             <Link href="/device" className="flex items-center">
    //               {t('common.buttons.getStarted')}
    //               <ArrowRight className="ml-2" size={16} />
    //             </Link>
    //           </Button>
    //           <Button size="large" ghost>
    //             <Link href="/purchase" className="flex items-center">
    //               {t('common.buttons.learnMore')}
    //             </Link>
    //           </Button>
    //         </div>
    //       </div>
    //     </div>
    //   </section>

    //   {/* Features Section */}
    //   <section className="py-20 bg-gray-50">
    //     <div className="container mx-auto px-4">
    //       <h2 className="text-3xl font-bold text-center mb-16">{t('home.features.title')}</h2>
          
    //       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    //         <div className="bg-white p-8 rounded-lg shadow-md text-center">
    //           <div className="text-primary mb-4 flex justify-center">
    //             <Shield size={48} />
    //           </div>
    //           <h3 className="text-xl font-bold mb-4">{t('home.features.protection')}</h3>
    //           <p className="text-gray-600">
    //             {t('home.features.protectionDesc')}
    //           </p>
    //         </div>
            
    //         <div className="bg-white p-8 rounded-lg shadow-md text-center">
    //           <div className="text-primary mb-4 flex justify-center">
    //             <Lock size={48} />
    //           </div>
    //           <h3 className="text-xl font-bold mb-4">{t('home.features.advanced')}</h3>
    //           <p className="text-gray-600">
    //             {t('home.features.advancedDesc')}
    //           </p>
    //         </div>
            
    //         <div className="bg-white p-8 rounded-lg shadow-md text-center">
    //           <div className="text-primary mb-4 flex justify-center">
    //             <Bell size={48} />
    //           </div>
    //           <h3 className="text-xl font-bold mb-4">{t('home.features.alerts')}</h3>
    //           <p className="text-gray-600">
    //             {t('home.features.alertsDesc')}
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
      
    //   {/* Call to Action */}
    //   <section className="py-16 bg-primary text-white">
    //     <div className="container mx-auto px-4 text-center">
    //       <h2 className="text-3xl font-bold mb-6">{t('home.cta.title')}</h2>
    //       <p className="text-xl mb-8 max-w-2xl mx-auto">
    //         {t('home.cta.subtitle')}
    //       </p>
          
    //       <Button size="large" className="bg-white text-primary hover:bg-gray-100">
    //         <Link href="/contact" className="flex items-center">
    //           {t('common.buttons.contactUs')}
    //         </Link>
    //       </Button>
    //     </div>
    //   </section>
    // </div>

    <main>
      <GSafeHero />
    </main>
  );
} 