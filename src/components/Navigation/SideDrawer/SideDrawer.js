import React, { useState } from 'react';

import styled from 'styled-components';

import Logo from '../../Logo/Logo';

import NavItems from '../NavItems/NavItems';

import HamBurger from './HamBurger/HamBurger';

const FixedWrapper = styled.div`
  position: fixed;
  background-color: var(--color-main);
  padding: 0rem 2rem;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 6rem;
  display: none;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Menu = styled.div`
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 6rem;
  top: 0;
  left: 0;
  background-color: var(--color-mainDark);
  height: 100vh;
  visibility: ${props => props.open ? 'visible' : 'hidden'};
  transform: translateY(${props => props.open ? '0%': '-100%'});
  transition: all 0.1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  display: none;

  @media ${props => props.theme.mediaQueries.smallest} {
    display: flex;
  }
`;

const SideDrawer = ({ loggedIn }) => {
  const [ isOpenState, setOpenStateHandler ] = useState(false);

  const toggleDrawerHandler = () => {
    const currentOpenState = isOpenState;
    const newOpenState = !currentOpenState;
    setOpenStateHandler(newOpenState);
  }

  return (
    <>
      <FixedWrapper>
        <Wrapper>
          <Logo />
          <HamBurger clicked={toggleDrawerHandler} open={isOpenState} />
        </Wrapper>
      </FixedWrapper>
      <Menu open={isOpenState}>
        <NavItems loggedIn={loggedIn} clicked={() => { setOpenStateHandler(false) }} mobile={true} />
      </Menu>
    </>
  );
}

export default SideDrawer;