import React from 'react';
import styled from 'styled-components';

const TestimonialContainer = styled.div`
  width: 100%;
  margin: 20px 0;

  .slider {
    display: flex;
    overflow-x: scroll;
    gap: 10px;

    .testimonial {
      min-width: 300px;
      padding: 10px;
      background: #f4f4f4;
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  }
`;

const Testimonials = () => {
  return (
    <TestimonialContainer>
      <h2>Testimonials</h2>
      <div className="slider">
        <div className="testimonial">"Amazing tours!"</div>
        <div className="testimonial">"A great experience."</div>
        <div className="testimonial">"Highly recommend!"</div>
      </div>
    </TestimonialContainer>
  );
};

export default Testimonials;
