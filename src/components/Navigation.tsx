import { HomeIcon, PersonIcon, TwitterLogoIcon } from '@radix-ui/react-icons';
import React from 'react';
import { Link } from 'react-router-dom';
import { StoreType } from 'types';
import useStore from 'store';
import { Nav } from 'styles';


const Navigation = () => {
  const { userObj }: StoreType = useStore();

  return (
    <Nav>
      <h1>
        <Link to="/">
          <TwitterLogoIcon />
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/" className='nav-link'>
            <HomeIcon />
            <span>Home</span>
          </Link>
        </li>
        {userObj && (
          <li>
            <Link to="/myPage" className='nav-link'>
              <PersonIcon />
              <span>프로필</span>
            </Link>
          </li>
        )}
      </ul>
    </Nav>
  )
};
export default Navigation;
