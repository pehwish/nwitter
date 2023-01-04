import React from 'react';
import AuthForm from './AuthForm';
import Modal from './Modal';
import { Trigger} from '@radix-ui/react-dialog';
import SocialAuth from './SocialAuth';
import { Button } from 'styles';

const SignUpModal = () => {
  return (
      <Modal
        title='지금 트위터에 가입하세요'
        button={
          <Trigger asChild>
            <Button color="white">가입하기</Button>
          </Trigger>
        }        
    >
      <SocialAuth />
      또는..
      <AuthForm isNewAccount />
      </Modal>
  )
}

export default SignUpModal;