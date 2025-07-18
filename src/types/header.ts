import { Session } from 'next-auth';
import { UserProfile } from './auth';
import { NavigationPage } from './navigation';

// Base props for header controls
export interface BaseHeaderControlsProps {
  isDarkMode: boolean;
  selectedLanguage: 'en' | 'ar';
  handleLanguageChange: (language: 'en' | 'ar') => void;
  handleDarkModeToggle: (value: string) => void;
  onLoginClick: () => void;
  onJoinCommunityClick: () => void;
  session: Session | null;
  userProfile: UserProfile | null;
  onSignOut: () => void;
}

// Mobile menu specific props
export interface MobileMenuProps extends BaseHeaderControlsProps {
  handleNavClick: (page: NavigationPage) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
  courses: string[] | undefined;
  categories: string[] | undefined;
  universities: string[] | undefined;
  error: string | null;
}

// Desktop controls props (same as base)
export interface DesktopControlsProps extends BaseHeaderControlsProps {}

// Language toggle props
export interface LanguageToggleProps {
  selectedLanguage: 'en' | 'ar';
  handleLanguageChange: (language: 'en' | 'ar') => void;
}

// Theme toggle props
export interface ThemeToggleProps {
  isDarkMode: boolean;
  handleDarkModeToggle: (value: string) => void;
}

// User profile props
export interface UserProfileSectionProps {
  session: Session | null;
  userProfile: UserProfile | null;
  onSignOut: () => void;
}

// Auth buttons props
export interface AuthButtonsProps {
  onLoginClick: () => void;
  onJoinCommunityClick: () => void;
}

// Cart button props
export interface CartButtonProps {
  className?: string;
}

// Mobile menu sections
export interface MobileMenuHeaderProps {
  isDarkMode: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export interface MobileMenuNavigationProps {
  isDarkMode: boolean;
  handleNavClick: (page: NavigationPage) => void;
  expandedCourses: boolean;
  setExpandedCourses: (expanded: boolean) => void;
  expandedUniversities: boolean;
  setExpandedUniversities: (expanded: boolean) => void;
  courses: string[] | undefined;
  categories: string[] | undefined;
  universities: string[] | undefined;
  error: string | null;
}

export interface MobileMenuSettingsProps {
  isDarkMode: boolean;
  selectedLanguage: 'en' | 'ar';
  handleLanguageChange: (language: 'en' | 'ar') => void;
  handleDarkModeToggle: (value: string) => void;
}

export interface MobileMenuFooterProps {
  session: Session | null;
  userProfile: UserProfile | null;
  onSignOut: () => void;
  onLoginClick: () => void;
  onJoinCommunityClick: () => void;
  setMobileMenuOpen: (open: boolean) => void;
} 