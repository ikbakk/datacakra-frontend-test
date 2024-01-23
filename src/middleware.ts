import { NextRequest, NextResponse } from 'next/server';
import { getToken } from './lib/cookieCheck';
export function middleware(req: NextRequest) {
  const token = getToken();
  const path = req.nextUrl.pathname;

  if (!token) {
    if (path === '/') {
      return NextResponse.redirect(new URL('/login', req.url));
    }
    return NextResponse.redirect(
      new URL(`/login?from=${path.replace('/', '')}`, req.url),
    );
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|login|register).*)'],
};
