import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  flex-wrap: wrap;

  img {
    max-width: 400px;
    width: 100%;
    margin: 10px;
    border-radius: 8px;
  }

  .text {
    max-width: 400px;
    margin: 10px;
  }
`;

const ImageTextSection = () => {
  return (
    <SectionContainer>
      <img src="/src/assets/image1.jpg" alt="Side Image" />
      <div className="text">
        <h2>Welcome to Ecotourism</h2>
        <p>Discover the beauty of Costa Rica with customized tours designed for you.</p>
      </div>
    </SectionContainer>
  );
};

export default ImageTextSection;
