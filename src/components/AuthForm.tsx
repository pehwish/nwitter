import { authService } from 'fbase';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

type onSubmitData = {
  email: string;
  password: string;
};

const AuthForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty, isValid, errors },
  } = useForm<onSubmitData>();

  const [newAccount, setNewAccount] = useState(true);

  const [error, setError] = useState('');

  const onSubmit = async (data: onSubmitData) => {
    console.log(data);
    // try {
    //   let data;
    //   if (newAccount) {
    //     data = await authService.createUserWithEmailAndPassword(email, password);
    //   } else {
    //     data = await authService.signInWithEmailAndPassword(email, password);
    //   }
    //   console.log(data);
    // } catch (e) {
    //   setError(e.message);
    // }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

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
        aria-invalid={errors.password ? 'true' : 'false'}
      />
      {errors.password && <p role="alert">{errors.password?.message}</p>}

      <input
        type="submit"
        disabled={!isDirty && !isValid}
        value={newAccount ? 'Create Account' : 'Sign In'}
      />
      {error}
      <span onClick={toggleAccount}>{newAccount ? 'Sign In' : 'Create Account'}</span>
    </form>
  );
};

export default AuthForm;
