import { authService } from 'fbase';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AuthFormData, StoreType, AuthFormProps } from 'types';
import useStore from 'store';
import { Button, SignUpBox } from 'styles';
import { createAt } from 'utills/date';

const AuthForm = ({ isNewAccount = false}:AuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { isDirty, isValid, errors },
  } = useForm<AuthFormData>();
  const { createUser }:StoreType = useStore();
  const [error, setError] = useState('');

  const onSubmit = async (data: AuthFormData) => {    
    const {email, password, displayName } = data;
    try {      
      if (isNewAccount) {
        const response =  await authService.createUserWithEmailAndPassword(email, password);        
        
        if (response?.user?.uid) { 
          await createUser({ displayName: displayName || '', uid : response?.user?.uid, createdAt: createAt(), photoURL:'', email })
        }
      } else {
        await authService.signInWithEmailAndPassword(email, password);
      }           
    } catch (e: any) {
      //TODO 타입 수정
      setError(e.message);
    }
  };


  return (
    <SignUpBox>
      <form onSubmit={handleSubmit(onSubmit)}>
       {isNewAccount &&
          <input
          {...register('displayName', { required: true })}
          placeholder="닉네임"
          aria-invalid={errors.displayName ? 'true' : 'false'}
          />
        }

        <input
          {...register('email', { required: true })}
          placeholder="Email"
          aria-invalid={errors.email ? 'true' : 'false'}
        />
        {errors.email?.type === 'required' && <p role="alert">email name is required</p>}

        <input
          {...register('password', { required: true })}
          type="password"
          placeholder="password"
          aria-invalid={errors.password ? 'true' : 'false'}
        />
        {errors.password && <p role="alert">{errors.password?.message}</p>}

       

        <Button
          type="submit"
          disabled={!isDirty && !isValid}        
          size='large'
          color='black'
        >
          {isNewAccount ? '회원가입' : '로그인'}
        </Button>
        {error}        
      </form>
    </SignUpBox>
  );
};

export default AuthForm;
