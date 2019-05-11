import React from 'react';

import styled from 'styled-components';

const LogoWrapper = styled.div`
  padding: 0rem 1rem;
  height: 100%;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: var(--color-whiteColor);
  font-size: 1rem;
`;

const Logo = (props) => {
 return (
    <LogoWrapper>
      Productivity
    </LogoWrapper>
  );
}

export default Logo;