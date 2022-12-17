import React from 'react';
import { Link } from 'react-router-dom';
import { styled } from '../stitches.config.ts';

const Nav = styled('nav', {
  width: 88
})


const Navigation = ({ userObj }) => (
  <Nav>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/profile'>{userObj.displayName}의 Profile</Link>
      </li>
    </ul>
  </Nav>
);
export default Navigation;
