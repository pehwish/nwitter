import React from 'react';
import AuthForm from './AuthForm';
import Modal from './Modal';
import { Trigger} from '@radix-ui/react-dialog';
import SocialAuth from './SocialAuth';
import { Button, SignModalLine } from 'styles';

const SignInModal = () => {
  return (
     <Modal
        title='트위터에 로그인하기'
        button={
          <Trigger asChild>
            <Button color='clear'>로그인</Button>
          </Trigger>
        }        
      >
      <SocialAuth />
      <SignModalLine><span>또는</span></SignModalLine>
      <AuthForm />
     </Modal>
  )
}

export default SignInModal;