export type LoginData = {
  email: string;
  password: string;
};

export type SignupData = {
  name: string;
  email: string;
  password: string;
};
// types/auth.ts
export interface LoginResponse {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
  sessionState?: string;
}


export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}
export interface LoginSuccessResponse {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
  sessionState?: string;
}

export interface DecodedJWT {
  sub: string;
  name?: string;
  email: string;
  [key: string]: any;
}