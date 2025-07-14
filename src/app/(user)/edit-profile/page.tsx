

import EditProfileForm from '@/components/user/EditProfileForm';

export default function EditProfilePage() {

  const mockUser = {
    fullName: 'mariam muhammad',
    email: 'mariam@gmail.com',
    phoneCode: '+20',
    mobileNumber: '1095369795',
    country: 'Egypt',
    city: 'Cairo',
    image: '/test.jpg', 
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-8">
      <EditProfileForm userData={mockUser} />
    </div>
  );
}
