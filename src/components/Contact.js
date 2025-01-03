import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';
const ContactContainer = styled.div`
  padding: 4rem 2rem;
  background-color: #fff;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #007b5e;
`;

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

const Button = styled.button`
  padding: 1rem;
  font-size: 1rem;
  background-color: #007b5e;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #005940;
  }
`;

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(
            'service_0i9ov4m', // Replace with your EmailJS Service ID
            'template_ydugj3g', // Replace with your EmailJS Template ID
            e.target,
            'tcIhGsDKIFHRbn4Q3' // Replace with your EmailJS User ID
          )
          .then(
            (result) => {
              console.log('Email sent successfully:', result.text);
              alert('Message sent! We will get back to you soon.');
            },
            (error) => {
              console.error('Error sending email:', error.text);
              alert('Failed to send message. Please try again later.');
            }
          );
    
        e.target.reset(); // Reset the form after submission
        };
   const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
/*
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Message sent! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };
 */
  return (
    <ContactContainer>
      <Heading>Contact Us</Heading>
      <Form onSubmit={sendEmail}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          rows="5"
         
          required
        />
        <Button type="submit">Send Message</Button>
      </Form>
    </ContactContainer>
  );
};

export default Contact;
