"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { Search, Menu, X, ChevronDown, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import ExploreMenu from './explore';
import { HeaderProps } from '@/types/landingProps';

const ActionButton = ({
  children,
  variant = 'secondary',
  fullWidth = false,
  ...props
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
} & React.ComponentProps<typeof Button>) => (
  <Button
    className={`
      ${variant === 'secondary'
        ? 'bg-[#76B729] hover:bg-[#6BA524] text-white'
        : 'bg-transparent border border-[#76B729] text-[#76B729] hover:bg-[#76B729] hover:text-white'
      }
      font-medium text-sm px-4 py-2 rounded-lg transition-all duration-200
      ${fullWidth ? 'w-full' : ''}
    `}
    {...props}
  >
    {children}
  </Button>
);

const LanguageToggle = ({
  selected,
  onLanguageChange,
}: {
  selected: 'en' | 'ar';
  onLanguageChange: (lang: 'en' | 'ar') => void;
}) => (
  <div className="flex bg-transparent border border-[#D9D9D9] w-[75px] h-[39px] rounded-lg overflow-hidden">
    <button
      className={`
        flex-1 text-sm font-normal transition-all duration-200
        ${selected === 'en'
          ? 'bg-[#76B729] text-white'
          : 'bg-transparent text-[#75757E] hover:bg-gray-50'
        }
      `}
      onClick={() => onLanguageChange('en')}
    >
      En
    </button>
    <button
      className={`
        flex-1 text-sm font-normal transition-all duration-200
        ${selected === 'ar'
          ? 'bg-[#76B729] text-white'
          : 'bg-transparent text-[#75757E] hover:bg-gray-50'
        }
      `}
      onClick={() => onLanguageChange('ar')}
    >
      AR
    </button>
  </div>
);

const NavItem = ({
  isActive,
  children,
  onClick,
  onMouseEnter,
  onMouseLeave,
  showChevron = false,
  isOpen = false,
  isDarkMode = false,
}: {
  isActive?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  showChevron?: boolean;
  isOpen?: boolean;
  isDarkMode?: boolean;
}) => (
  <button
    className={`
      flex items-center gap-1 px-0 py-2 text-xl font-normal
      transition-all duration-200 hover:text-[#76B729]
      ${isActive
        ? 'text-[#76B729] border-b-2 border-[#76B729] font-bold'
        : isDarkMode
          ? 'text-[#BCBCBC] border-b-2 border-transparent'
          : 'text-[#282837] border-b-2 border-transparent'
      }
    `}
    style={{
      fontWeight: isActive ? 700 : 400,
      fontSize: '16px',
      lineHeight: '100%',
      letterSpacing: '0%',
      color: isActive ? '#76B729' : isDarkMode ? '#BCBCBC' : '#282837',
    }}
    onClick={onClick}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
  >
    {children}
    {showChevron && (
      <ChevronDown
        className={`w-4 h-4 transition-transform duration-300 ${
          isOpen ? 'rotate-180' : 'rotate-0'
        }`}
      />
    )}
  </button>
);

const Header: React.FC<HeaderProps> = ({ courses, categories, error }) => {
  const [exploreOpen, setExploreOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'explore'>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleExploreToggle = () => {
    setExploreOpen((prev) => !prev);
  };

  const handleExploreHover = () => {
    setExploreOpen(true);
    setCurrentPage('explore');
  };

  const handleExploreLeave = () => {
    setExploreOpen(false);
  };

  const handleExploreItemClick = (item: string, type: 'category' | 'course') => {
    if (item === '' && type === 'category') {
      setExploreOpen(false);
      return;
    }
    console.log(`Clicked ${type}: ${item}`);
    setCurrentPage('explore');
    setExploreOpen(false);
  };

  const handleNavClick = (page: 'home' | 'about' | 'explore') => {
    setCurrentPage(page);
    if (page !== 'explore') {
      setExploreOpen(false);
    }
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (language: 'en' | 'ar') => {
    setSelectedLanguage(language);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="relative">
      <div className="hidden sm:flex bg-[#2d2d2d] text-white px-4 py-1 text-xs justify-end gap-4">
        <button className="hover:opacity-80 transition-opacity">FAQs</button>
        <button className="hover:opacity-80 transition-opacity">Contact Us</button>
      </div>

      <header className={isDarkMode ? 'bg-[#000000] border-none' : 'bg-white border-none'}>
        <div className="px-4 lg:px-6">
          <div className="flex items-center justify-between h-16 lg:h-20 w-full">
            <div className="flex items-center cursor-pointer flex-shrink-0">
              <div className="w-auto h-8 flex items-center justify-center">
                <Image
                  src={isDarkMode ? '/logoDark.svg' : '/logo-scroll.svg'}
                  alt="Logo"
                  width={60}
                  height={32}
                  className="lg:w-24 lg:h-12"
                />
              </div>
            </div>

            <nav className="hidden xl:flex items-center gap-6">
              <NavItem
                isActive={currentPage === 'home'}
                onClick={() => handleNavClick('home')}
                isDarkMode={isDarkMode}
              >
                Home
              </NavItem>
              <NavItem
                isActive={currentPage === 'about'}
                onClick={() => handleNavClick('about')}
                isDarkMode={isDarkMode}
              >
                About us
              </NavItem>
              <NavItem
                isActive={currentPage === 'explore' || exploreOpen}
                onClick={handleExploreToggle}
                onMouseEnter={handleExploreHover}
                onMouseLeave={handleExploreLeave}
                showChevron={true}
                isOpen={exploreOpen}
                isDarkMode={isDarkMode}
              >
                Explore
              </NavItem>
            </nav>

            <div className="flex-1 mx-4 md:mx-6 lg:mx-5 xl:max-w-md">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="What do you want to learn?"
                  className="w-full h-8 md:h-9 bg-gray-50 border border-transparent rounded-lg pl-3 md:pl-4 pr-8 md:pr-10 text-sm focus:border-[#76B729] focus:ring-[#76B729]"
                />
                <Search className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 w-3 md:w-4 h-3 md:h-4 text-gray-400" />
              </div>
            </div>

            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="hidden xl:flex items-center gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-11 h-11 bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                  <Image
                    src="/cart.svg"
                    alt="Cart"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Button>

                <LanguageToggle
                  selected={selectedLanguage}
                  onLanguageChange={handleLanguageChange}
                />

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

              <div className="flex xl:hidden items-center gap-2 hover:bg-gray-200">
                <Button
                  variant="ghost"
                  size="icon"
                  className="w-8 h-8 bg-gray-100 hover:bg-gray-200 rounded-full"
                >
                  <Image
                    src="/cart.svg"
                    alt="Cart"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </Button>

                <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
                  <SheetTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      className={isDarkMode ? 'text-[#BCBCBC]' : 'text-[#282837]'}
                    >
                      <Menu className="w-5 h-5" />
                    </Button>
                  </SheetTrigger>
                  <SheetContent
                    side="right"
                    className={isDarkMode ? 'w-[280px] p-0 bg-[#000000]' : 'w-[280px] p-0 bg-white'}
                  >
                    <div className="flex flex-col h-full">
                      <div className="border-t">
                        <nav className="p-4 space-y-2">
                          <button
                            className={
                              isDarkMode
                                ? 'w-full text-left p-2 rounded text-md font-medium text-[#BCBCBC]'
                                : 'w-full text-left p-2 rounded text-md font-medium text-gray-700'
                            }
                            onClick={() => handleNavClick('home')}
                          >
                            Home
                          </button>
                          <button
                            className={
                              isDarkMode
                                ? 'w-full text-left p-2 rounded text-md font-medium text-[#BCBCBC]'
                                : 'w-full text-left p-2 rounded text-md font-medium text-gray-700'
                            }
                            onClick={() => handleNavClick('about')}
                          >
                            About us
                          </button>
                          <button
                            className={
                              isDarkMode
                                ? 'w-full text-left p-2 rounded text-md font-medium text-[#BCBCBC]'
                                : 'w-full text-left p-2 rounded text-md font-medium text-gray-700'
                            }
                            onClick={handleExploreToggle}
                          >
                            Explore
                          </button>
                        </nav>
                      </div>
                      <div className="border-t p-4 space-y-4">
                        <div className="flex items-center justify-between">
                          <span
                            className={
                              isDarkMode ? 'text-sm font-medium text-[#BCBCBC]' : 'text-sm font-medium text-gray-700'
                            }
                          >
                            Language
                          </span>
                          <LanguageToggle
                            selected={selectedLanguage}
                            onLanguageChange={handleLanguageChange}
                          />
                        </div>
                        <div className="flex items-center justify-between">
                          <span
                            className={
                              isDarkMode ? 'text-sm font-medium text-[#BCBCBC]' : 'text-sm font-medium text-gray-700'
                            }
                          >
                            Dark Mode
                          </span>
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
                        </div>
                      </div>
                      <div className="border-t mt-auto p-4 space-y-3">
                        <ActionButton variant="secondary" fullWidth>
                          Log in
                        </ActionButton>
                        <ActionButton variant="secondary" fullWidth>
                          Join our community
                        </ActionButton>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div onMouseEnter={handleExploreHover} onMouseLeave={handleExploreLeave}>
        <ExploreMenu open={exploreOpen} onItemClick={handleExploreItemClick} courses={courses} categories={categories} error={error} />
      </div>
    </div>
  );
};

export default Header;