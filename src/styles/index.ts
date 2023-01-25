import { Overlay, Content, Title, Close } from '@radix-ui/react-dialog';
import { keyframes, styled } from '../stitches.config';

export const Box = styled('div', {
  // Reset
  boxSizing: 'border-box',
});

export const Wrapper = styled('div', {
  display: 'flex',
  width: '100%',
  minHeight: '100vh',
  m: '0 auto',
  '@bp3': {
    width: 990,
  },
});

export const BottomBarBox = styled(Box, {
  bc: '$blue',
  bottom: 0,
  color: '#fff',
  fontSize: '$4',
  position: 'fixed',
  left: 0,
  right: 0,
  h2: {
    fontSize: '$7',
    lh: 1.5,
  },
  '.bottom-bar__aligner': {
    ai: 'center',
    display: 'flex',
    fd: 'row',
    jc: 'space-between',
    m: '0 auto',
    pl: 88,
    py: 12,
    width: '100%',
    '@bp3': {
      pl: 275,
      width: 990,
    },
  },
  '.bottom-bar__buttons': {
    button: {
      ml: 12,
      fontWeight:'bold'
    }
  }
});

export const Button = styled('button', {
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
        border: '1px solid #fff',
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
      xlarge: {
        width: '300px',
        maxWidth: '400px',
        height: '40px',
      },
    },
  },
  defaultVariants: {
    color: 'white',
  },
});

export const IconButton = styled(Button, {
  ai: 'center',
  display: 'inline-flex',
  height: 30,
  jc: 'center',
  minWidth: 30,
  br: 30,
  '&:hover': {
    bc: '#E8F5FD',
    borderColor: '#d2e3fc',
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
        border: '1px solid #fff',
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
        height: '40px',
      },
    },
  },
  defaultVariants: {
    color: 'white',
  },
});

export const FileButtonWrap = styled('div', {
  'input[type="file"]': {
    width: '0.1px',
    height: '0.1px',
    opacity: 0,
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1,
  },
  label: {
    ai: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    height: 30,
    jc: 'center',
    width: 30,
    br: 30,
    '&:hover': {
      bc: '#E8F5FD',
    },
  },
  svg: {
    color: '$blue',
    height: 17,
    width: 17,
  },
});

export const ImgBox = styled(Box, {
  br: '$4',
  overflow: 'hidden',
  position: 'relative',
  mt: 12,
  '.nweet-attachment': {
    width: '100%',
  },
  '.nweet-attachment__btn-clear': {
    bc: '$hiContrast',
    br: '$pill',
    height: 32,
    left: 4,
    position: 'absolute',
    top: 4,
    width: 32,
    svg: {
      color: '$loContrast',
    },
  },
});

export const ModalDimmd = styled(Overlay, {
  bc: '$blackA9',
  position: 'fixed',
  inset: 0,
});

export const ModalContent = styled(Content, {
  bc: 'white',
  borderRadius: '6px',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: '25px',
  textAlign: 'center',
});

export const ModalTitle = styled(Title, {
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
  },
});

export const ModalBtnClose = styled(Close, {
  position: 'absolute',
  right: 5,
  top: 5,
  p: 10,
  br: '$round',
  '&:hover': {
    bc: 'rgba(15, 20, 25, 0.1)',
    borderColor: '#d2e3fc',
  },
});

export const Nav = styled('nav', {
  width: 88,
  '@bp3': {
    width: 275,
  },
  h1: {
    ai: 'center',
    display: 'flex',
    height: 53,
    svg: {
      color: '$blue',
      height: 30,
      width: 30,
    },
  },
  ul: {
    listStyle: 'none',
    p: 0,
    m: 0,
  },
  '.nav-link': {
    ai: 'center',
    color: '$blackA12',
    display: 'inline-flex',
    fontSize: '$6',
    fontStyle: 'normal',
    textDecoration: 'none',
    p: 12,
    span: {
      ml: 20,
    },
    '&:hover': {
      bc: '$blackA5',
      br: '$pill',
    },
  },
});

export const NweetForm = styled('form', {
  display: 'flex',
  fd: 'row',
  mx: 16,
  py: 4,
  '.nweet-from__aligner': {
    display: 'flex',
    flex: 1,
    fd: 'column',
    ml: 16,
  },
  '.nweet-from__align': {
    borderTop: '1px solid rgb(239, 243, 244)',
    display: 'flex',
    flex: 1,
    fd: 'row',
    jc: 'space-between',
    py: 12,
    mt: 12,
  },
});

export const NweetInput = styled('input', {
  border: 0,
  display: 'flex',
  fontSize: '$7',
});

export const NweetItemBox = styled('div', {
  borderTop: '1px solid rgb(239, 243, 244)',
  px: 16,
  py: 12,
  display: 'flex',
  fd: 'row',
  '&:hover': {
    bc: '$mauve3',
  },
  '.nweetitem__content': {
    ml: 12,
    flex: 1,
  },
  '.nweetitem__header': {
    ai: 'center',
    display: 'flex',
    fd: 'row',
    fontSize: '$3',
    lh: '20px',
  },
  '.nweetitem__date': {
    color: '$gray9',

    '&::before': {
      content: ' · ',
    },
  },
  '.nweetitem__menu': {
    ml: 'auto',
    position: 'relative',
    button: {
      border: 0,
    },
  },
  '.nweetitem__nweet': {
    fontSize: '$4',
    fontWeight: '400',
    mb: 12,
  },  
});

export const DropdownMenu = styled('div', { 
  position: 'absolute',
  bc: '#fff',
  zIndex: 1,
  right: 0,
  width: 200,
  br: '$2',
  display: 'flex',
  fd: 'column',
  bs: 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px',  
  '.dropdown-menu__item': {
    display: 'flex',
    fd: 'row',
    ai: 'center',
    px: 16,
    py: 12,
    fontWeight: 'bold',
    svg: {
      mr: 6,
    },
    '&--red': {
      color: '$tomatoA10',
    },
    '&:hover': {
      bc: '$mauve3',
    },
  },
})

export const SocialBox = styled('div', {
  my:20,
  button: {
    m: '7px 0',
  },
});

export const SignUpBox = styled('div', {
  m:'20px auto',
  width: 300,
  form: {
    display: 'flex',
    fd: 'column',
    input: {
      mb: 8,
      border: '1px solid rgb(218, 220, 224)',
      br: '$pill',
      height: 40,
      px:10
    }
  },
  button: {
    m: '7px 0',
    py:0
  },
});


export const Main = styled('main', {
  flex: 1,
  borderLeft: '1px solid rgb(239, 243, 244)',
  borderRight: '1px solid rgb(239, 243, 244)',
  maxWidth: 600,
  '.main-header': {
    px: 16,
  },
  '.main-header__text': {
    fontSize: '$6',
    py: 16,
  },
});

export const AuthWrap = styled('div', {
  flex: 1,
  borderLeft: '1px solid rgb(239, 243, 244)',
  borderRight: '1px solid rgb(239, 243, 244)',
  '.auth-nwitter': {
    mt: 20,
    bt: '1px solid #000',
  },
});

export const HeaderWrap = styled('header', {
  '.header__align': {
    ai: 'center',
    borderBottom: '1px solid rgb(239, 243, 244)',
    display: 'flex',
    height: 53,
    px: 16,
  },
  '.header__display-name': {
    fontSize: '$6',
    display: 'flex',
    fd: 'column',
  },
  '.header__nwitter': {
    fontSize: '$2',
    color: '$gray9',
    fontWeight: 'normal',
    lh: 1.5,
  },
  '.header__inner': {
    px: 16,
    display: 'flex',
    fd: 'column',
    pt: 12,
    position: 'relative',
  },
  '.header__cover': {
    bc: '$gray5',
    height: 200,
    backgroundPosition: 'center',
    backgroundSize:'cover'
  },
  '.header__avatar': {
    position: 'absolute',
    top: '-50%',
  },
  '.header__link': {
    display: 'inline-flex',
    as: 'end',
    mb: 60,
  },
  '.header__displayName': {
    lh: 1.5,
    fontSize: '$6',
  },
  '.header__createDate': {
    fontSize: '$4',
    color: '$gray11',
    display: 'flex',
    ai: 'center',
    svg: {
      mr: 4,
    },
  },
});

export const ProfileWrap = styled('div', {
  flex: 1,
  '.profile__inner': {
    position: 'relative',
    px: 16,
    pt: 60,
    display: 'flex',
    fd:'column'
  },
  '.profile__imgbox': {
    position: 'relative',
    overflow: 'hidden',
    '.file_btn': {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%,-50%) ',
      zIndex: 3,
    },    
    '.img_box': {
      m: 0,
      height: '100%',
      img: {
        height: '100%',
        objectFit: 'cover',
      },
      '&::before': {
        content: '',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        zIndex: 2,
        bc: '$blackA11',
      },
    },
    '.nweet-attachment__btn-clear': {
      zIndex: 3,
      width: 28,
      height: 28
    }
  },
  '.profile__cover': {
    bc: '$gray5',
    height: 200,
    borderRadius:'$4'
  },
  '.profile__avatar': {
    position: 'absolute',
    top: -50,
    width: 100,
    height: 100,
    br: '$round',
    zIndex: 2,
  },
  '.profile__input': {
    br: '$pill',
    border: '1px solid #dadce0',
    height: 40,
    mb: 8,
    px:12
  }
});


export const SignModalLine = styled('div', {
  m: '10px auto 25px',
  position:'relative', 
  width:300,
  '&::before': {
    position: 'absolute',
    bc: '$gray6',
    left: 0,
    right: 0,
    height: 1,
    content: '',
    top:'50%'
  },
  span: {
    bc:'white',
    px: 12,
    position:'relative', 
  }
});


export const MyInfoWrap = styled('div', {
  mb:12,
  mx:12,
  py: 20,
  px: 12,
  position: 'fixed',
  bottom: 0,
  width:250,
  borderRadius: '$pill',
  '&:hover': {
    bc: '$mauve3',
  },
  '.myinfo__aligner': {
    display: 'flex',
    fd: 'row',
    position:'relative',
    '.myinfo__align': {
      display: 'flex',
      fd: 'column',
      mx: 12,
      em: {
        fontStyle: 'normal',
        fontWeight: 'bold',
        display: 'block',
        mb:4
      },
      span: {
        fontSize: 12,
        color: '$gray11',
        display: 'block',
        maxWidth: 125,
        overflow: 'hidden',
        textOverflow:"ellipsis"
        
      }
    },    
    '.myinfo__menu': {
      border: 0,
      ml:'auto'
    }
  },
  '.dropdown-menu': {
    top:-50
  }
  
});

const ldsFacebook = keyframes({
	'0%': { top: 8,
    height: 64},
	'50%, 100%': {  top: 24,
    height: 32 },
});



export const LoadingWrap = styled('div', {
   '.lds-facebook' : {
    position: 'fixed',
    zIndex: 1,
    left: '50%',
    top: '50%',
    transform:'translate(-50%,-50%)',
    width: 80,
    height: 80,
    div: {
      display: 'inline-block',
      position: 'absolute',
      left: 8,
      width: 16,
      background: '#fff',
      animation: `${ldsFacebook} 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite`,    
      '&:nth-child(1)':{
        left: 8,
        animationDelay: '-0.24s'
      },
      '&:nth-child(2)': {
        left: 32,
        animationDelay: '-0.12s'
      },
      '&:nth-child(3)': {
        left: 56,
        animationDelay: 0
      }
    }
  },
  
});


export const Footer = styled('footer', {
  m: '10px 0 0 20px',
  fontSize:14

})