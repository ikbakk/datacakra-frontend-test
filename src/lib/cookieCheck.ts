import { cookies } from 'next/headers';

export const getToken = () => {
  const cookieJar = cookies();
  const token = cookieJar.get('access_token')?.value;

  return token;
};
