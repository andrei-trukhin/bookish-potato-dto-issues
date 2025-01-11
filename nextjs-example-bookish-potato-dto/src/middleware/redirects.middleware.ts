import { NextMiddleware, NextResponse } from 'next/server';
import { Redirect } from '@/app/_config/types/redirect.type';

export class RedirectsMiddleware {
  constructor(private readonly redirects: readonly Redirect[]) {}

  public middleware: NextMiddleware = request => {
    const redirect = this.redirects.find(
      redirect => redirect.from === request.nextUrl.pathname,
    );

    if (redirect) {
      const url = new URL(redirect.to, request.nextUrl.href);
      return NextResponse.redirect(url, {
        status: redirect.statusCode,
      });
    }

    return undefined;
  };
}
