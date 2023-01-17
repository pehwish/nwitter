import React, { useState} from 'react';
import Modal from './Modal';
import { Trigger} from '@radix-ui/react-dialog';
import SocialAuth from './SocialAuth';
import { Button, SignModalLine } from 'styles';
import AuthForm from './AuthForm';

const SignUpModal = () => {
  const [isNewAccont, setIsNewAccont] = useState(false);

  const onChangeNewAccount = () => setIsNewAccont(true)

  return (
    <Modal
      title='지금 트위터에 가입하세요'
      button={
        <Trigger asChild>
          <Button color="white">가입하기</Button>
        </Trigger>
      }        
    >
      {isNewAccont ? <AuthForm isNewAccount />:
        <>
          <SocialAuth />      
          <SignModalLine><span>또는</span></SignModalLine>
          <Button color="black" size='xlarge' onClick={onChangeNewAccount}>회원가입하기</Button>
        </>
      }
     
    </Modal>
  )
}

export default SignUpModal;