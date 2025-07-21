'use client';

import { UseFormReturn, FieldErrors } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import UserTypeToggle from '@/components/auth/UserTypeToggle';
import PasswordInput from '@/components/auth/PasswordInput';
import FileUpload from '@/components/auth/FileUpload';
import { SignupFormValues } from '@/types/auth-forms';

interface FormFieldsProps {
  form: UseFormReturn<SignupFormValues>;
  errors: FieldErrors<SignupFormValues>;
  customError: string | null;
  userType: 'student' | 'teacher';
  setUserType: (type: 'student' | 'teacher') => void;
}

const FormFields = ({ form, errors, customError, userType, setUserType }: FormFieldsProps) => {
  const { register } = form;

  return (
    <>
      {/* User Type Toggle */}
      <UserTypeToggle 
        userType={userType}
        setUserType={setUserType}
        form={form}
        error={errors.userType?.message}
      />

      {/* First Name and Last Name Row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="block mb-1 text-sm font-medium text-gray-700">
            First name
          </Label>
          <Input
            id="firstName"
            type="text"
            placeholder="e.g Ahmad"
            {...register('firstName')}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B729] focus:border-[#76B729]"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">{errors.firstName.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="lastName" className="block mb-1 text-sm font-medium text-gray-700">
            Last name
          </Label>
          <Input
            id="lastName"
            type="text"
            placeholder="e.g Mahmud"
            {...register('lastName')}
            className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B729] focus:border-[#76B729]"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">{errors.lastName.message}</p>
          )}
        </div>
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="block mb-1 text-sm font-medium text-gray-700">
          Email
        </Label>
        <Input
          id="email"
          type="email"
          placeholder="e.g ahmad@gmail.com"
          {...register('email')}
          className="w-full px-3 py-2 border bg-white border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#76B729] focus:border-[#76B729]"
        />
        {customError && (
          <p className="mt-1 text-sm text-red-500">Email already exists</p>
        )}
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password and Confirm Password Row */}
      <div className="grid grid-cols-2 gap-4">
        <PasswordInput
          id="password"
          label="Password"
          placeholder="Enter your password"
          error={errors.password?.message}
          {...register('password')}
        />
        
        <PasswordInput
          id="confirmPassword"
          label="Confirm password"
          placeholder="Confirm your password"
          error={errors.confirmPassword?.message}
          {...register('confirmPassword')}
        />
      </div>

      {/* Diploma File Upload (Optional) */}
      <FileUpload
        id="diploma"
        label="Diploma file (Optional)"
        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
        description="PDF, DOC, JPG, PNG up to 10MB"
        {...register('diploma')}
      />
    </>
  );
};

export default FormFields;
