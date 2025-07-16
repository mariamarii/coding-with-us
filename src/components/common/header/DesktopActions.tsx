import React from 'react';
import { Button } from '@/components/ui/button';
import { Sun, Moon, ShoppingCart } from 'lucide-react';
import LanguageToggle from './LanguageToggle';
import ActionButton from './ActionButton';

const DesktopActions = ({
  selectedLanguage,
  handleLanguageChange,
  isDarkMode,
  toggleDarkMode,
}: {
  selectedLanguage: 'en' | 'ar';
  handleLanguageChange: (language: 'en' | 'ar') => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => (
  <div className="hidden xl:flex items-center gap-4">
    <Button
      variant="ghost"
      size="icon"
      className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full"
    >
      <ShoppingCart className="w-5 h-5" />
    </Button>
    <LanguageToggle selected={selectedLanguage} onLanguageChange={handleLanguageChange} />
    <Button
      variant="ghost"
      size="icon"
      className="w-11 h-11 bg-gray-200 hover:bg-gray-300 rounded-full"
      onClick={toggleDarkMode}
    >
      {isDarkMode ? (
        <Sun className="w-5 h-5 text-gray-600" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600" />
      )}
    </Button>
    <ActionButton variant="secondary">Log in</ActionButton>
    <ActionButton variant="secondary">Join our community</ActionButton>
  </div>
);

export default DesktopActions;