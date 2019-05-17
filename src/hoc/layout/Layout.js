import React from 'react';

import styled from 'styled-components';

import NavBar from '../../components/Navigation/NavBar/NavBar';    

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

const MainWrapper = styled.div`
  width:100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = (props) => {
 return (
    <>
      <SideDrawer />
      <NavBar />
      <MainWrapper>
        {props.children}
      </MainWrapper>
    </>
  );
}

export default Layout;