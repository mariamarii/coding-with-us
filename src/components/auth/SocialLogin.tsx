'use client';

import React from 'react';

type SocialLoginProps = {
  handleProviderClick?: (url: string) => void;
};

const SocialLogin = ({ handleProviderClick }: SocialLoginProps) => {
  const defaultHandleProviderClick = (url: string) => {
    window.location.href = url;
  };

  const handleClick = handleProviderClick || defaultHandleProviderClick;

  const providers = [
    {
      name: 'Google',
      url: 'https://localhost:7061/Api/V1/users/google-login?returnUrl=http://localhost:3000/callback',
      icon: (
        <svg width="20" height="20" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M6.04229 15.09C6.04229 14.133 6.20123 13.2155 6.48491 12.355L1.51954 8.56323C0.551817 10.5281 0.0065918 12.742 0.0065918 15.09C0.0065918 17.4359 0.551146 19.6485 1.51753 21.612L6.48022 17.8129C6.19922 16.9564 6.04229 16.0422 6.04229 15.09Z" fill="#FBBC05"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.7604 6.38407C16.8394 6.38407 18.7171 7.12073 20.1925 8.32615L24.4846 4.04019C21.8691 1.76327 18.5159 0.356934 14.7604 0.356934C8.92991 0.356934 3.91894 3.69128 1.51941 8.56322L6.48478 12.355C7.62888 8.88199 10.8902 6.38407 14.7604 6.38407Z" fill="#EB4335"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M14.7604 23.7957C10.8902 23.7957 7.62888 21.2978 6.48478 17.8248L1.51941 21.6159C3.91894 26.4885 8.92991 29.8229 14.7604 29.8229C18.359 29.8229 21.7947 28.5451 24.3733 26.151L19.66 22.5072C18.3302 23.345 16.6556 23.7957 14.7604 23.7957Z" fill="#34A853"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M28.8442 15.09C28.8442 14.2194 28.71 13.2818 28.5089 12.4113H14.7609V18.1036H22.6743C22.2787 20.0443 21.2016 21.5363 19.6605 22.5074L24.3737 26.1511C27.0824 23.6371 28.8442 19.8923 28.8442 15.09Z" fill="#4285F4"/>
        </svg>
      ),
    },
    {
      name: 'Facebook',
      url: 'https://your-backend/facebook-login?returnUrl=http://localhost:3000/callback',
      icon: (
        <svg width="20" height="20" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M27.825 14.1897C27.825 10.5704 26.3872 7.09939 23.828 4.54018C21.2688 1.98097 17.7978 0.543219 14.1785 0.543219C10.7422 0.540045 7.43122 1.83338 4.90689 4.16488C2.38256 6.49637 0.830746 9.69438 0.561415 13.1201C0.292084 16.5458 1.32507 19.9471 3.45403 22.6444C5.58299 25.3417 8.65119 27.1366 12.0458 27.6705V18.1335H8.58346V14.1897H12.0477V11.1836C12.0477 7.76416 14.0849 5.87315 17.2022 5.87315C18.6955 5.87315 20.257 6.14023 20.257 6.14023V9.49921H18.5356C16.8396 9.49921 16.3132 10.5519 16.3132 11.63V14.1897H20.0972L19.4928 18.1335H16.3113V27.6705C19.5211 27.1622 22.4443 25.5252 24.5549 23.054C26.6655 20.5828 27.8251 17.4396 27.825 14.1897Z" fill="#1877F2"/>
          <path d="M19.4904 18.1336L20.0948 14.1897H16.3108V11.63C16.3108 10.552 16.8372 9.49923 18.5332 9.49923H20.2546V6.1383C20.2546 6.1383 18.6931 5.87122 17.1998 5.87122C14.0806 5.87122 12.0453 7.76223 12.0453 11.1816V14.1897H8.58301V18.1336H12.0473V27.6705C13.4604 27.8929 14.8996 27.8929 16.3128 27.6705V18.1336H19.4904Z" fill="white"/>
        </svg>
      ),
    },
    {
      name: 'Apple',
      url: 'https://your-backend/apple-login?returnUrl=http://localhost:3000/callback',
      icon: (
        <svg
          width="20"
          height="20"
          viewBox="0 0 29 30"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
          className="dark:fill-white fill-black"
        >
          <path d="M12.473 7.32696C12.1522 5.57827 12.979 3.77866 13.9748 2.56588C15.0722 1.22772 16.9555 0.201519 18.565 0.0887451C18.8369 1.92214 18.0886 3.70844 17.1038 4.97196C16.0472 6.32937 14.2307 7.382 12.473 7.32696ZM21.9133 13.6634C22.4113 12.274 23.3979 11.0239 24.9285 10.1804C23.3818 8.25034 21.2102 7.12979 19.1609 7.12979C16.4496 7.12979 15.3032 8.42156 13.42 8.42156C11.48 8.42156 10.0082 7.12979 7.65969 7.12979C5.35672 7.12979 2.90531 8.53345 1.35061 10.9307C0.778974 11.8168 0.391742 12.9177 0.180556 14.1438C-0.405442 17.5835 0.469906 22.0637 3.08106 26.0418C4.35064 27.9721 6.04289 30.1464 8.25363 30.1654C10.223 30.1846 10.7817 28.9062 13.4477 28.8931C16.1176 28.8779 16.6236 30.1786 18.5903 30.1598C20.8017 30.1412 22.5872 27.7349 23.8567 25.8048C24.7608 24.4197 25.1026 23.7201 25.8056 22.1542C22.2312 20.8063 20.7612 16.8677 21.9133 13.6634Z"/>
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col w-full gap-3">
      {providers.map((provider) => (
        <button
          key={provider.name}
          type="button"
          onClick={() => handleClick(provider.url)}
          className="relative flex items-center justify-center text-sm font-bold py-3 px-4 rounded-md cursor-pointer border border-[#ddd] dark:border-gray-600 w-full bg-white dark:bg-[#1e1e1e] text-[var(--black-primary)] dark:text-white hover:bg-[#f0f0f0] dark:hover:bg-[#2a2a2a] transition-colors duration-300"
        >
          <span className="absolute flex items-center justify-center left-4">
            {provider.icon}
          </span>
          Continue with {provider.name}
        </button>
      ))}
    </div>
  );
};

export default SocialLogin;
