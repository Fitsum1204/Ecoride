import React from 'react';
import styled from 'styled-components';

const GalleryContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  .gallery {
    display: flex;
    gap: 10px;
    overflow-x: scroll;
    scroll-behavior: smooth;

    img {
      width: 200px;
      border-radius: 8px;
    }
  }
`;

const PhotoGallery = () => {
  return (
    <GalleryContainer>
      <h2>Photo Gallery</h2>
      <div className="gallery">
        <img src="/src/assets/image1.jpg" alt="Gallery Image 1" />
        <img src="/src/assets/image2.jpg" alt="Gallery Image 2" />
        <img src="/src/assets/image3.jpg" alt="Gallery Image 3" />
      </div>
    </GalleryContainer>
  );
};

export default PhotoGallery;
