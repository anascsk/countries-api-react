import React from 'react';
import { Container, InnerContainer } from '../styles/Header.style';

const Header = () => {
  return <Container>
      <InnerContainer><h3>Countries</h3> </InnerContainer>
      <InnerContainer>
      <ul>
          <li>All</li>
          <li>Asia</li>
          <li>Europe</li>
      </ul>
      
      </InnerContainer>
  </Container>;
};

export default Header;
