"use client";
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { HeaderProps } from '@/types/landingProps';
import { NavigationPage } from '@/types/navigation';
import { useSession, signOut } from 'next-auth/react';
import { getCurrentUser } from '@/queries/auth';
import { UserProfile } from '@/types/auth';
import Logo from './header/Logo';
import DesktopNavigation from './header/DesktopNavigation';
import DesktopControls from './header/DesktopControls';
import MobileMenu from './header/MobileMenu';
import { useNavigation } from '@/hooks/useNavigation';

const Header: React.FC<HeaderProps> = ({ courses, categories, error }) => {
  const { data: session } = useSession();
  const { navigateToLogin, navigateToSignup } = useNavigation();
  const [currentPage, setCurrentPage] = useState<NavigationPage>('home');
  const [selectedLanguage, setSelectedLanguage] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Fetch user profile when session is available
  useEffect(() => {
    const fetchUserProfile = async () => {
      if (session?.accessToken) {
        try {
          const profile = await getCurrentUser(session.accessToken);
          setUserProfile(profile);
        } catch (error) {
          console.error('Failed to fetch user profile:', error);
          // Fall back to session data if API call fails
          setUserProfile(null);
        }
      } else {
        setUserProfile(null);
      }
    };

    fetchUserProfile();
  }, [session?.accessToken]);

  // Mock universities data - you can replace this with actual data fetching
  const universities = [
    'Cairo University', 'Ain Shams University', 'Alexandria University', 'Mansoura University',
    'Zagazig University', 'Tanta University', 'Helwan University', 'Benha University',
    'Assiut University', 'Suez Canal University', 'Minia University', 'South Valley University'
  ];

  const handleNavClick = (page: NavigationPage) => {
    setCurrentPage(page);
    setMobileMenuOpen(false);
  };

  const handleLanguageChange = (language: 'en' | 'ar') => {
    if (language) {
      setSelectedLanguage(language);
    }
  };

  const handleDarkModeToggle = (value: string) => {
    setIsDarkMode(value === 'dark');
  };

  const handleLoginClick = () => {
    navigateToLogin();
  };

  const handleJoinCommunityClick = () => {
    navigateToSignup();
  };

  const handleSignOut = () => {
    signOut({ callbackUrl: '/' });
  };

  return (
    <div className="relative">
      <div className=" sm:flex bg-[#282837] text-white px-4 py-3 text-xs justify-end gap-4">
        <div className=" flex justify-end gap-4 w-[92%] mx-auto">
       

        <button className="hover:opacity-80 transition-opacity text-sm">FAQs</button>
        <button className="hover:opacity-80 transition-opacity text-sm">Contact Us</button>
        </div>
        
      </div>

      <header className="bg-white border-none">
        <div className=" mx-auto w-[90%]">
          <div className="flex items-center justify-between h-12 lg:h-14 w-full ">
            <div className="flex items-center">
              <Logo />
              </div>
             <div className="ml-auto w-[90%] flex justify-between items-start">

              <div className="">
                <DesktopNavigation
                  currentPage={currentPage}
                  handleNavClick={handleNavClick}
                  courses={courses}
                  categories={categories}
                  universities={universities}
                  error={error}
                />
              </div>
            
            <div className="flex items-end gap-2 flex-shrink-0">
              <DesktopControls
                isDarkMode={isDarkMode}
                selectedLanguage={selectedLanguage}
                handleLanguageChange={handleLanguageChange}
                handleDarkModeToggle={handleDarkModeToggle}
                onLoginClick={handleLoginClick}
                onJoinCommunityClick={handleJoinCommunityClick}
                session={session}
                userProfile={userProfile}
                onSignOut={handleSignOut}
              />
              <MobileMenu
                isDarkMode={isDarkMode}
                selectedLanguage={selectedLanguage}
                handleNavClick={handleNavClick}
                handleLanguageChange={handleLanguageChange}
                handleDarkModeToggle={handleDarkModeToggle}
                mobileMenuOpen={mobileMenuOpen}
                setMobileMenuOpen={setMobileMenuOpen}
                onLoginClick={handleLoginClick}
                onJoinCommunityClick={handleJoinCommunityClick}
                session={session}
                userProfile={userProfile}
                onSignOut={handleSignOut}
                courses={courses}
                categories={categories}
                universities={universities}
                error={error}
              />
              </div>
              </div>

          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;