import React, { MouseEvent } from 'react';
import { authService, firebaseInstance } from 'fbase';
import AuthForm from 'components/AuthForm';
import { Button } from 'components/Buttons';

const Auth = () => {
  const onSocialClick = async (event: MouseEvent<HTMLButtonElement>) => {
    const target = event.target as HTMLButtonElement;

    let provider;
    if (target.name === 'google') {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (target.name === 'github') {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }
    if (provider) {
      const data = await authService.signInWithPopup(provider);
      console.log(data);
    }
  };

  return (
    <div>
      <AuthForm />
      <div>
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
      </div>
    </div>
  );
};
export default Auth;
