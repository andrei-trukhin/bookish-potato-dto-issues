import {
  NextFetchEvent,
  NextMiddleware,
  NextRequest,
  NextResponse,
} from 'next/server';
import { middlewareConfiguration } from '@/app/_config/middleware.configuration';
import { RedirectsMiddleware } from '@/middleware/redirects.middleware';
import { AuthMiddleware } from '@/middleware/auth.middleware';

const redirectMiddleware = new RedirectsMiddleware(
  middlewareConfiguration.redirects,
);
const authMiddleware = new AuthMiddleware(
  middlewareConfiguration.privateRoutes,
);

export const middleware: NextMiddleware = (
  request: NextRequest,
  event: NextFetchEvent,
) => {
  // Redirects Middleware
  const redirectResponse = redirectMiddleware.middleware(request, event);
  if (redirectResponse) {
    return redirectResponse;
  }

  // Auth Middleware
  const authResponse = authMiddleware.middleware(request, event);
  if (authResponse) {
    return authResponse;
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    '/((?!api/|_next/static/|_next/image/|favicon.ico|icon\\d*.png).*)',
  ],
};
