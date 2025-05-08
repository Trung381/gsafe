import { getRequestConfig } from 'next-intl/server';
import { locales, defaultLocale } from './config';

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  const validLocale = locales.includes(locale as any) ? locale : defaultLocale;
  
  // Import the messages for the validated locale
  const messages = (await import(`../messages/${validLocale}.json`)).default;
  
  return {
    locale: validLocale,
    messages
  };
}); 