import { styled } from '../stitches.config.ts';

const Button = styled('button', {
  backgroundColor: '#fff',
  borderRadius: '9999px',
  fontSize: '14px',
  padding: '10px 15px',
  border: '1px solid #000',
  variants: {
    color: {
        black: {
            color: '#fff',
              backgroundColor: 'rgb(15, 20, 25)'
          },
          white: {
              color: '#fff',
              backgroundColor: 'rgb(15, 20, 25)'
          }
      
    },
    size: {
      small: {
        fontSize: '13px',
        height: '25px',
        paddingRight: '10px',
        paddingLeft: '10px',
      },
      large: {
        fontSize: '15px',
        height: '35px',
        paddingLeft: '15px',
        paddingRight: '15px',
      },
    },
    },
  defaultVariants: {
    color: 'white'
  }
});

export { Button };