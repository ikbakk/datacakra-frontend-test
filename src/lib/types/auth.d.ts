import { JwtPayload } from 'jsonwebtoken';

export type LoginResponse = {
  $id: string;
  code: number;
  mesage: string;
  data: {
    $id: string;
    Id: string;
    Name: string;
    Email: string;
    Token: string;
  };
};

export type CustomJwtPayload = JwtPayload & {
  name: string;
  email: string;
  id: string;
};
