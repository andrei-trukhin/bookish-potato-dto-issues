import { NextMiddleware, NextResponse } from 'next/server';

export class AuthMiddleware {
  constructor(private readonly privateRoutes: readonly string[]) {}

  middleware: NextMiddleware = request => {
    const isPrivateRoute = this.privateRoutes.includes(
      request.nextUrl.pathname,
    );

    if (isPrivateRoute) {
      // Check if the user is authenticated
      const isAuthenticated = false; // Implement your authentication logic here

      if (!isAuthenticated) {
        const url = new URL('/login', request.nextUrl.href);
        url.searchParams.append('next', request.nextUrl.pathname);
        return NextResponse.redirect(url, {
          status: 302,
        });
      }
    }

    return undefined;
  };
}
