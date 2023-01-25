import React from 'react'
import { Root , Portal} from '@radix-ui/react-dialog';
import { LoadingWrap, ModalDimmd } from 'styles'
import { LoadingProps } from 'types';

const Loading = ({isLoading = false}:LoadingProps) => {
  return (
    <Root open={isLoading}>
      <Portal>
        <LoadingWrap>
          <ModalDimmd />
          <div className="lds-facebook"><div></div><div></div><div></div></div>
        </LoadingWrap>
      </Portal>
    </Root>
  )
}

export default Loading