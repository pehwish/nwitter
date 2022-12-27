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
        color: '#000',
        bc: '#fff',
        border: '1px solid #dadce0',
      },
      clear: {
        color: '#fff',
        bc: 'transparent',
        border:'1px solid #fff'
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

const IconButton = styled(Button, {
  ai: 'center',
  display: 'inline-flex',
  height: 30,
  jc: 'center',
  minWidth: 30,
  br: 30,
  '&:hover': {
    bc: '#E8F5FD',
    borderColor:'#d2e3fc'
  },
  svg: {
    height: 17,
    width: 17,
    '& + span': {
      marginLeft: '4px',
    },
  },  
  variants: {
    color: {
      black: {
        color: '#fff',
        bc: 'rgb(15, 20, 25)',
      },
      white: {
        color: '#000',
        bc: '#fff',
        border: '1px solid #dadce0',
      },
      clear: {
        color: '#fff',
        bc: 'transparent',
        border:'1px solid #fff'
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
        width: '300px',
        maxWidth: '400px',
        height:'40px'
      },
    },
  },
  defaultVariants: {
    color: 'white',
  },
});

export { Button, IconButton };
