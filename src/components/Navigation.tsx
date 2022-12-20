import { TwitterLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { userObjType } from 'types';
import { styled } from '../stitches.config';

const Nav = styled('nav', {
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
});

interface NavigationProps {
  userObj: userObjType | null;
}

const Navigation = ({ userObj }: NavigationProps) => (
  <Nav>
    <h1>
      <Link to="/">
        <TwitterLogoIcon />
      </Link>
    </h1>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      {userObj && (
        <li>
          <Link to="/profile">{userObj.displayName}의 Profile</Link>
        </li>
      )}
    </ul>
  </Nav>
);
export default Navigation;
