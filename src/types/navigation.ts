export type NavigationPage = 'home' | 'about' | 'courses' | 'universities';

export interface NavigationProps {
  currentPage: NavigationPage;
  handleNavClick: (page: NavigationPage) => void;
  isDarkMode: boolean;
} 