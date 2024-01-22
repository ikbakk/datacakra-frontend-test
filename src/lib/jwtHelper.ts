import { decode } from 'jsonwebtoken';
import { CustomJwtPayload } from './types/auth';

export const isJwtExpired = (token: string) => {
  const jwtPayload = decode(token) as CustomJwtPayload;

  if (jwtPayload && jwtPayload.exp! < Date.now() / 1000) {
    return true;
  }
  return false;
};

export const getJwtPayload = (token: string) => {
  if (!token) {
    return null;
  }
  return decode(token) as CustomJwtPayload;
};
