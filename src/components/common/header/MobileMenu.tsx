"use client";
import React from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Menu, Sun, Moon } from 'lucide-react';
import Image from 'next/image';

const MobileMenu: React.FC<{
  isDarkMode: boolean;
  selectedLanguage: 'en' | 'ar';
  handleNavClick: (page: 'home' | 'about' | 'explore') => void;
  handleLanguageChange: (language: 'en' | 'ar') => void;
  handleDarkModeToggle: (value: string) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}> = ({ isDarkMode, selectedLanguage, handleNavClick, handleLanguageChange, handleDarkModeToggle, mobileMenuOpen, setMobileMenuOpen }) => (
  <div className="flex xl:hidden items-center gap-2">
    <Button
      variant="ghost"
      size="icon"
      className="w-8 h-8 bg-gray-100 w-[44px] h-[44px] hover:bg-gray-200 rounded-full"
    >
      <Image
        src="/cart.svg"
        alt="Cart"
        width={24}
        height={24}
        className="w-5 h-5"
      />
    </Button>

    <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={isDarkMode ? 'text-gray-400' : 'text-gray-800'}
        >
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className={isDarkMode ? 'w-[280px] p-0 bg-black' : 'w-[280px] p-0 bg-white'}
      >
        <div className="flex flex-col h-full">
          <div className="border-t">
            <nav className="p-4 space-y-2">
              <Button
                variant="ghost"
                className={`w-full text-left text-base font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}
                onClick={() => handleNavClick('home')}
              >
                Home
              </Button>
              <Button
                variant="ghost"
                className={`w-full text-left text-base font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}
                onClick={() => handleNavClick('about')}
              >
                About us
              </Button>
              <Button
                variant="ghost"
                className={`w-full text-left text-base font-medium ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-700'
                }`}
                onClick={() => handleNavClick('explore')}
              >
                Explore
              </Button>
            </nav>
          </div>
          <div className="border-t p-4 space-y-4">
            <div className="flex items-center justify-between">
              <span
                className={
                  isDarkMode ? 'text-sm font-medium text-gray-400' : 'text-sm font-medium text-gray-700'
                }
              >
                Language
              </span>
              <ToggleGroup
                type="single"
                value={selectedLanguage}
                onValueChange={handleLanguageChange}
                className="border border-[#D9D9D9] rounded-lg w-[75px] h-[39px] flex overflow-hidden"
              >
                <ToggleGroupItem
                  value="en"
                  aria-label="English"
                  className="w-1/2 h-full data-[state=on]:bg-[#76B729] data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
                >
                  En
                </ToggleGroupItem>
                <ToggleGroupItem
                  value="ar"
                  aria-label="Arabic"
                  className="w-1/2 h-full data-[state=on]:bg-[#76B729] data-[state=on]:text-white text-sm font-medium flex items-center justify-center"
                >
                  AR
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            <div className="flex items-center justify-between">
              <span
                className={
                  isDarkMode ? 'text-sm font-medium text-gray-400' : 'text-sm font-medium text-gray-700'
                }
              >
                Theme
              </span>
              <div className="flex items-center w-[44px] h-[44px] bg-gray-100 rounded-full justify-center">
                <ToggleGroup
                  type="single"
                  value={isDarkMode ? 'dark' : 'light'}
                  onValueChange={handleDarkModeToggle}
                  className="border border-[#D9D9D9] rounded-full overflow-hidden w-[24px] h-[24px] flex items-center justify-center"
                >
                  <ToggleGroupItem
                    value="light"
                    aria-label="Light mode"
                    className="data-[state=on]:bg-[#76B729] data-[state=on]:text-white p-2"
                  >
                  </ToggleGroupItem>
                  <ToggleGroupItem
                    value="dark"
                    aria-label="Dark mode"
                    className="data-[state=on]:bg-[#76B729] data-[state=on]:text-white p-2"
                  >
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
            </div>
          </div>
          <div className="border-t mt-auto p-4 space-y-3">
            <Button
              className="w-full bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm"
            >
              Log in
            </Button>
            <Button
              className="w-full bg-[#76B729] hover:bg-[#6BA524] text-white font-medium text-sm"
            >
              Join our community
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

export default MobileMenu;