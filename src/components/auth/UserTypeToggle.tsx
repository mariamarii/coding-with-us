'use client';

import { UseFormReturn } from 'react-hook-form';
import { SignupFormValues } from '@/types/auth-forms';

interface UserTypeToggleProps {
  userType: 'student' | 'teacher';
  setUserType: (type: 'student' | 'teacher') => void;
  form: UseFormReturn<SignupFormValues>;
  error?: string;
}

const UserTypeToggle = ({ userType, setUserType, form, error }: UserTypeToggleProps) => {
  return (
    <div>
      {/* User Type Toggle */}
      <div className="flex gap-1 p-1 bg-gray-100 rounded-lg">
        <button
          type="button"
          onClick={() => {
            setUserType('student');
            form.setValue('userType', 'student');
          }}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'student'
              ? 'bg-[#76B729] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => {
            setUserType('teacher');
            form.setValue('userType', 'teacher');
          }}
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            userType === 'teacher'
              ? 'bg-[#76B729] text-white shadow-sm'
              : 'text-gray-600 hover:text-gray-900'
          }`}
        >
          Teacher
        </button>
      </div>
      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default UserTypeToggle;
