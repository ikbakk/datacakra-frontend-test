import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export function GET(req: Request) {
  const cookieJar = cookies();

  cookieJar.delete('access_token');

  return NextResponse.json({ message: 'logged out' });
}
