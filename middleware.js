// import { NextResponse } from "next/server";
// import Negotiator from "negotiator";

// // Importing the i18n configuration
// const { i18n } = require("./i18n.config");

// const matchLocale = require("@formatjs/intl-localematcher").match;

// function getLocale(request) {
//   const negotiatorHeaders = {};
//   request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

//   const locales = i18n.locales;
//   const languages = new Negotiator({ headers: negotiatorHeaders }).languages();

//   const locale = matchLocale(languages, locales, i18n.defaultLocale);
//   return locale;
// }

// function middleware(request) {
//   const pathname = request.nextUrl.pathname;
//   const pathnameIsMissingLocale = i18n.locales.every(
//     (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
//   );

//   // Redirect if there is no locale
//   if (pathnameIsMissingLocale) {
//     const locale = getLocale(request);
//     return NextResponse.redirect(
//       new URL(
//         `/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`,
//         request.url
//       )
//     );
//   }
// }

// const config = {
//   // Matcher ignoring `/_next/` and `/api/`
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
// };

// module.exports = { middleware, config };
