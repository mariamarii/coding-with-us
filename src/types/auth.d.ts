export interface LoginData {
  email: string;
  password: string;
}

export type SignupData = {
  name: string;
  phoneNumber: string;
  email: string;
  password: string;
};

export interface LoginResponse {
  accessToken: string;
  expiresIn?: number;
  tokenType?: string;
  sessionState?: string;
}

export interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export interface AuthUser {
  id: string;
  email: string;
  fullName: string;
}

export type LoginSuccessResponse = LoginResponse;

export interface DecodedJWT {
  sub: string;
  name?: string;
  email: string;
  [key: string]: string | undefined;
}

export interface FormHandlers {
  onBack: () => void;
  onSuccess: () => void;
}