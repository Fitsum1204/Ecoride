import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 20px;
  background: #222;
  color: #fff;

  p {
    margin: 0;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>© 2024 Your Company Name. All Rights Reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
