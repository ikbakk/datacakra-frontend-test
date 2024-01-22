import { NextResponse } from 'next/server';
import { LoginResponse } from '@/lib/types/auth';

export async function POST(req: Request) {
  const body = await req.json();
  const data = await fetch(`${process.env.BASEURL}/api/authaccount/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const dataJson: LoginResponse = await data.json();
  const response = NextResponse.json(dataJson);
  response.cookies.set('access_token', dataJson.data.Token);

  return response;
}
