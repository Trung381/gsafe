"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from 'antd';

export default function PurchasePage() {
  const t = useTranslations();
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Purchase GSAFE</h1>
      <p className="mb-4">This is the purchase page where you can learn more about GSAFE products and pricing.</p>
      
      <div className="mt-6">
        <Button type="primary">
          <Link href="/">{t('common.buttons.learnMore')}</Link>
        </Button>
      </div>
    </div>
  );
} 