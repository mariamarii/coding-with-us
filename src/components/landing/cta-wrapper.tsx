'use client';

import { useNavigation } from '@/hooks/useNavigation';
import CTASection from './CTASection';

interface CTAWrapperProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  redirectPath?: string;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  className?: string;
}

const CTAWrapper: React.FC<CTAWrapperProps> = ({
  title = "start online learning",
  subtitle = "ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES",
  buttonText = "Get Started",
  redirectPath = "/courses",
  backgroundColor = "bg-gradient-to-r from-green-400 to-green-500",
  textColor = "text-white",
  buttonColor = "bg-white text-green-600 hover:bg-gray-100",
  className = ""
}) => {
  const { navigateTo } = useNavigation();

  const handleCTAClick = () => {
    // Add any analytics or tracking here
    console.log('Starting online learning journey...');
    
    // You can add analytics tracking here
    // Example: gtag('event', 'click', { event_category: 'CTA', event_label: 'Landing Page CTA' });
    
    // Navigate to the specified path
    navigateTo(redirectPath);
  };

  return (
    <CTASection
      title={title}
      subtitle={subtitle}
      buttonText={buttonText}
      onButtonClick={handleCTAClick}
      backgroundColor={backgroundColor}
      textColor={textColor}
      buttonColor={buttonColor}
      className={className}
    />
  );
};

export default CTAWrapper;