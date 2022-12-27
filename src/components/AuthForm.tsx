import { authService } from 'fbase';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormData, StoreType } from 'types';
import useStore from 'store';
interface AuthFormProps { 
  isNewAccount?: boolean;
}


const AuthForm = ({ isNewAccount = false}:AuthFormProps) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<AuthFormData>();
  const { toggleIsLogin }:StoreType = useStore();


  const [error, setError] = useState('');

  const onSubmit = async (data: AuthFormData) => {
    console.log(data);
    const {email, password } = data;
    try {
      let data;
      if (isNewAccount) {
        data = await authService.createUserWithEmailAndPassword(email, password);
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
      toggleIsLogin(true);
    } catch (e: any) {
      //TODO 타입 수정
      setError(e.message);
    }
  };


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', { required: true })}
        placeholder="Email"
        aria-invalid={errors.email ? 'true' : 'false'}
      />
      {errors.email?.type === 'required' && <p role="alert">email name is required</p>}

      <input
        {...register('password', { required: true })}
        type="password"
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}

      <input
        type="submit"
        disabled={!isDirty && !isValid}
        value={isNewAccount ? '회원가입' : '로그인'}
      />
      {error}
      
    </form>
  );
};

export default AuthForm;
