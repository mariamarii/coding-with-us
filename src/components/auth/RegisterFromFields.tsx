import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { SignupData } from '@/types/auth';

type Props = {
  register: UseFormRegister<SignupData>;
  errors: FieldErrors<SignupData>;
};

const RegisterFormFields = ({ register, errors }: Props) => (
  <>
    <input
      {...register('fullName')}
      placeholder="Full Name"
      className="form-input"
    />
    {errors.fullName && <p className="error-text">{errors.fullName.message}</p>}

    <input
      {...register('email')}
      placeholder="Email"
      className="form-input"
    />
    {errors.email && <p className="error-text">{errors.email.message}</p>}

    <input
      {...register('password')}
      placeholder="Password"
      type="password"
      className="form-input"
    />
    {errors.password && <p className="error-text">{errors.password.message}</p>}
  </>
);

export default RegisterFormFields;
