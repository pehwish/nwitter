import { styled } from '../stitches.config';

const Button = styled('button', {
  br: '$pill',
  fontSize: '$3',
  p: '10px 15px',
  border: '1px solid #000',
  variants: {
    color: {
      black: {
        color: '#fff',
        bc: 'rgb(15, 20, 25)',
      },
      white: {
        color: '#fff',
        bc: 'rgb(15, 20, 25)',
      },
      blue: {
        bc: '$blue',
        border: 0,
        color: '#fff',
        fontSize: '$4',
        '&:disabled': {
          bc: '$disableBlue',
        },
      },
    },
    size: {
      small: {
        fontSize: '$2',
        height: '25px',
        pr: '10px',
        pl: '10px',
      },
      large: {
        fontSize: '$4',
        fontWeight: 'bold',
        height: '35px',
        pl: '15px',
        pr: '15px',
      },
    },
  },
  defaultVariants: {
    color: 'white',
  },
});

const IconButton = styled('button', {
  ai: 'center',
  display: 'inline-flex',
  height: 30,
  jc: 'center',
  width: 30,
  br: 30,
  '&:hover': {
    bc: '#E8F5FD',
  },
  svg: {
    color: '$blue',
    height: 17,
    width: 17,
  },
});

export { Button, IconButton };
