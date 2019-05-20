import React from 'react';

import styled from 'styled-components';

import NavBar from '../../components/Navigation/NavBar/NavBar';    

import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer'

import { connect } from 'react-redux'


const MainWrapper = styled.div`
  width:100%;
  min-height: calc(100vh - 6rem);
  margin-top: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Layout = ({ children, loggedIn}) => {
 return (
    <>
      <SideDrawer loggedIn={loggedIn} />
      <NavBar loggedIn={loggedIn} />
      <MainWrapper>
        {children}
      </MainWrapper>
    </>
  );
}

const mapStateToProps = ({ firebase }) => ({
  loggedIn: firebase.auth.uid ? true : null,
})

export default connect(mapStateToProps)(Layout);