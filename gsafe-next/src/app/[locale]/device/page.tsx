"use client";

import Link from "next/link";
import { useTranslations } from 'next-intl';
import { Button } from 'antd';

export default function DevicePage() {
  const t = useTranslations();
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Device Management</h1>
      <p className="mb-4">This is the device management page where you can manage your GSAFE devices.</p>
      
      <div className="mt-6">
        <Button type="primary">
          <Link href="/">{t('common.buttons.getStarted')}</Link>
        </Button>
      </div>
    </div>
  );
} 