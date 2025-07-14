'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Listbox } from '@headlessui/react';
import { Check, ChevronDown } from 'lucide-react';

type UserData = {
  fullName: string;
  email: string;
  phoneCode: string;
  mobileNumber: string;
  country: string;
  city: string;
  image?: string;
};

type Props = {
  userData: UserData;
};

const phoneCodes = ['+20', '+1', '+44'];
const countries = ['Egypt', 'USA', 'UK'];
const cities = ['Cairo', 'Alexandria', 'Giza'];

export default function EditProfileForm({ userData }: Props) {
  const router = useRouter();

  const [fullName, setFullName] = useState(userData.fullName);
  const [phoneCode, setPhoneCode] = useState(userData.phoneCode);
  const [mobileNumber, setMobileNumber] = useState(userData.mobileNumber);
  const [country, setCountry] = useState(userData.country);
  const [city, setCity] = useState(userData.city);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Updated:', {
      fullName,
      phoneCode,
      mobileNumber,
      country,
      city,
    });
  };

  const renderDropdown = (
    label: string,
    value: string,
    setValue: (v: string) => void,
    options: string[]
  ) => (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <Listbox value={value} onChange={setValue}>
        <div className="relative">
          <Listbox.Button className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white flex justify-between items-center text-left focus:ring-2 focus:ring-[#76B729] focus:outline-none">
            {value}
            <ChevronDown className="w-5 h-5 text-gray-500" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-auto focus:outline-none">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active }) =>
                  `cursor-pointer select-none px-4 py-2 ${
                    active ? 'bg-[#76B729] text-white' : 'text-gray-900'
                  }`
                }
              >
                {({ selected }) => (
                  <span className="flex items-center justify-between">
                    {option}
                    {selected && <Check className="w-4 h-4" />}
                  </span>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-3xl mx-auto px-4 py-10"
    >
      <div className="flex flex-col md:flex-row md:gap-6 lg:gap-2">
       
        <div className="w-full md:w-[30%] flex flex-col items-start gap-4 md:gap-6">
          <h2 className="text-2xl font-bold text-gray-800">Edit your profile</h2>

          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-gray-300">
            <Image
              src={userData.image || '/default-user.png'}
              alt="Profile"
              width={112}
              height={112}
              className="object-cover w-full h-full"
            />
          </div>

          <button
            type="button"
            className="bg-[#76B729] text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-[#5e991e] transition"
          >
            Upload Image
          </button>
        </div>

        <div className="w-full md:w-[70%] space-y-6 mt-6 md:mt-0">

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#76B729] focus:outline-none bg-white"
              required
            />
          </div>

          {/* Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderDropdown('Phone Code', phoneCode, setPhoneCode, phoneCodes)}
            <div>
              <label className="block text-sm font-medium mb-1">
                Mobile Number
              </label>
              <input
                type="tel"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-[#76B729] focus:outline-none bg-white"
              />
            </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {renderDropdown('Country', country, setCountry, countries)}
            {renderDropdown('City', city, setCity, cities)}
          </div>

       
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <input
                type="email"
                value={userData.email}
                disabled
                className="flex-1 bg-gray-100 text-gray-500 border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              <button
                type="button"
                onClick={() => router.push('/change-email')}
                className="text-sm text-white bg-[#76B729] px-3 py-2 rounded-md hover:bg-[#5e991e] transition"
              >
                Change Email
              </button>
            </div>
          </div>

   
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <div className="flex flex-col sm:flex-row gap-2 items-start sm:items-center">
              <input
                type="password"
                value="********"
                disabled
                className="flex-1 bg-gray-100 text-gray-500 border border-gray-300 rounded-md px-4 py-2 w-full"
              />
              <button
                type="button"
                onClick={() => router.push('/change-password')}
                className="text-sm text-white bg-[#76B729] px-3 py-2 rounded-md hover:bg-[#5e991e] transition"
              >
                Change Password
              </button>
            </div>
          </div>

      
          <div>
            <button
              type="submit"
              className="w-1/2 bg-[#76B729] hover:bg-[#5e991e] text-white font-semibold py-3 rounded-md transition"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
