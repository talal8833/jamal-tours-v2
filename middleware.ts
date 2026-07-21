import createMiddleware from "next-intl/middleware";
import { routing } from "./app/i18n/routing";

export default createMiddleware(routing);

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Next.js internals (_next)
  // - static files (those containing a dot, e.g. .jpg, .ico, .svg)
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
