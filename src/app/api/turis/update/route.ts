import { getToken } from '@/lib/cookieCheck';
import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  const token = getToken();
  const { id, ...body } = await req.json();

  await fetch(`${process.env.NEXT_PUBLIC_BASEURL}/api/Tourist/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });

  return NextResponse.json({ message: 'success' });
}
