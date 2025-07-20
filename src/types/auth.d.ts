export interface LoginData {
  email: string;
  password: string;
}

export type SignupData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: 'student' | 'teacher';
  phoneNumber?: string;
  diploma?: File;
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

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  emailConfirmed: boolean;
  phoneNumber: string;
  profileImage: string | null;
  isLockoutEnabled: boolean;
  lockoutEnd: string | null;
  registrationDate: string;
  lastLoginAt: string;
  roles: string[];
}

export interface FormHandlers {
  onBack: () => void;
  onSuccess: () => void;
}