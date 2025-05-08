import createMiddleware from 'next-intl/middleware';

// Define our supported locales
const locales = ['en', 'vi'];
const defaultLocale = 'en';

export default createMiddleware({
  // A list of all locales that are supported
  locales,
  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|.*\\..*).*)']
}; 