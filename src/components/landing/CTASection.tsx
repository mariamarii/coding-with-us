import React from 'react';

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  onButtonClick?: () => void;
  backgroundColor?: string;
  textColor?: string;
  buttonColor?: string;
  className?: string;
  svgPath?: string;
}

const CTASection: React.FC<CTASectionProps> = ({
  title = "start online learning",
  subtitle = "ENHANCE YOUR SKILLS WITH BEST ONLINE COURSES",
  buttonText = "Get Started",
  onButtonClick = () => console.log('CTA button clicked'),
  className = "",
  svgPath = "/Group.svg"
}) => {
  return (
    <div className='w-full min-h-[300px] md:min-h-[400px] bg-[#76B729] relative overflow-hidden'>
      {/* SVG Background */}
      <div className="absolute inset-0">
        <img 
          src={svgPath}
          alt="Background decoration"
          className="absolute lg:pr-20 right-0 top-0 w-[50%] sm:w-[45%] md:w-[40%] lg:w-[35%] h-full object-cover object-left"
        />
      </div>

      <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ${className}`}>
        <div className="text-center py-8 sm:py-12 md:py-16 lg:py-20">
          <h2 className={` font-[700] text-[36px] text-[#FFFFFF] mb-2 sm:mb-4 lowercase leading-tight`}>
            {title}
          </h2>
          <p className={`font-thin text-[36px] text-[#FFFFFF] mb-1 sm:mb-2 tracking-wide uppercase leading-tight`}>
            {subtitle}
          </p>
          <p className={`font-thin text-[36px] text-[#FFFFFF] mb-6 sm:mb-8 md:mb-10 leading-tight`}>
            Get Started Now
          </p>
          <button
            onClick={onButtonClick}
            className="px-6 sm:px-8 py-3 sm:py-4 rounded-md transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white focus:ring-opacity-50 
                     w-full max-w-[269px] min-h-[48px] bg-white text-[#76B729] font-bold text-[16px] hover:bg-gray-100 
                     shadow-lg hover:shadow-xl"
          >
            {buttonText}
          </button>
        </div>
      </section>
    </div>
  );
};
export default CTASection;