import React, { ReactNode, ReactElement} from 'react';
import { Root , Portal, Overlay, Content, Title, Close} from '@radix-ui/react-dialog';
import { Cross2Icon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { styled } from '../stitches.config';


const ModalDimmd = styled(Overlay, {
  bc: '$blackA9',
  position: 'fixed',
  inset: 0,  
});


const ModalContent = styled(Content, {
  bc: 'white',
  borderRadius: '6px',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  textAlign:'center'
});

const ModalTitle = styled(Title, {
  m: '0 0 25px',
  color: '$mauve12',
  fontSize: '$8',
  fontWeight: 700,
  svg: {
    display: 'block',
    m: '0 auto 10px',
    color: '$blue',
    height: 30,
    width: 30,
  }
});

const ModalBtnClose = styled(Close, {
  position: 'absolute',
  right: 5,
  top: 5,
  p: 10,
  br: '$round',
  '&:hover': {
    bc: 'rgba(15, 20, 25, 0.1)',
    borderColor:'#d2e3fc'
  },
})


interface ModalProps { 
  children: ReactNode | ReactElement;
  title?: string;
  button:ReactNode | ReactElement;
}

const Modal = ({ title, children, button}:ModalProps) => (
  <Root>
    { button }
    <Portal>
      <ModalDimmd />
      <ModalContent>
        {title && <ModalTitle><TwitterLogoIcon />{title}</ModalTitle>}
        
        { children}
        <ModalBtnClose asChild>
          <button aria-label="Close">
            <Cross2Icon />
          </button>
        </ModalBtnClose>
      </ModalContent>
    </Portal>
  </Root>
);

export default Modal;