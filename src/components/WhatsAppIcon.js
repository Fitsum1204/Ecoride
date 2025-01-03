import React from "react";
import styled from "styled-components";

const WhatsAppIconWrapper = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
  cursor: pointer;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

const WhatsAppIcon = () => {
  return (
    <WhatsAppIconWrapper>
      <a
        href="https://wa.me/1234567890?text=Hi%20there!%20I%20am%20interested%20in%20your%20services."
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
        />
      </a>
    </WhatsAppIconWrapper>
  );
};

export default WhatsAppIcon;
