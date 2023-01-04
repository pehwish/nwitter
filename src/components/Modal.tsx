import React from 'react';
import { Root , Portal} from '@radix-ui/react-dialog';
import { Cross2Icon, TwitterLogoIcon } from '@radix-ui/react-icons';
import { ModalBtnClose, ModalContent, ModalDimmd, ModalTitle } from 'styles';
import { ModalProps } from 'types';


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