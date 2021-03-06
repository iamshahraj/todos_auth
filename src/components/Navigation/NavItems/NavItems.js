import React from 'react';

import NavItem from './NavItem/NavItem';

import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
`;

const Ul = styled.ul`
  display: flex;
  flex-direction: ${props => props.mobile ? 'column' : 'row'}
  align-items: center;
  height: 100%;
`;

const NavItems = ({ mobile, clicked, loggedIn }) => {
  let links;

  if (loggedIn) {
    links = (
      <Ul mobile={mobile}>
        <NavItem clicked={clicked} mobile={mobile} link="/">home</NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/todos">Todos</NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/logout">Logout</NavItem>
      </Ul>
    )
  } else {
    links = (
      <Ul mobile={mobile}>
      <NavItem clicked={clicked} mobile={mobile} link="/">home</NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/login">Login</NavItem>
        <NavItem clicked={clicked} mobile={mobile} link="/signup">Sing up</NavItem>
      </Ul>
    )
  }
  return (
    <Nav>
      {links}
    </Nav>
  );
}

export default NavItems;