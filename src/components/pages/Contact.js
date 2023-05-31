import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

export default function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isEmailValid, setIsEmailValid] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (setValidated === true) {
      document.getElementById("register").removeAttribute("disabled")
    }

    setValidated(true);
  };

  useEffect(() => {
    const isFormValid = Object.values(formData).every((value) => value !== '');
    document.getElementById('register').disabled = !(isFormValid && isEmailValid);
  }, [formData, isEmailValid]);

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setFormData({ ...formData, email });
    setIsEmailValid(event.target.checkValidity());
  };
//! align center
  return (
  <section className='container'>
    <h5 className='mb-0 mt-3 text-center'>Get in Touch</h5>
      <h1 className='text-center'>Contact Me</h1>
    <div> 
      <Form noValidate validated={validated} onClick={handleSubmit}>
        <Row>
          <Form.Group as={Col} md="5" controlId="validationCustom01">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Your name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className='mt-3'>
          <Form.Group as={Col} md="5" controlId="validationCustomUsername">
            <Form.Label>Email Address: </Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Your email"
                aria-describedby="janedoe@email.com"
                required
                value={formData.email}
                onChange={handleEmailChange}
              />
              <Form.Control.Feedback type="invalid">
                Email is required. Please enter a valid email.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className='mt-3'>
          <Form.Group as={Col} md="5" controlId="validationCustom03">
            <Form.Label>Message: </Form.Label>
            <Form.Control as="textarea" style={{ height: '100px' }} placeholder="Your message" required value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Message is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <span className="btn" type="submit" id='register' disabled="disabled">Send Message</span>
      </Form>
    </div>
    <div className="d-flex flex-column align-items-end mt-3 ms-auto">
        <Button type='email' href='mailto: ashleygiraldo5@hotmail.com' variant="primary" size="lg">
          EMAIL
          <hr />
          Ashleygiraldo5@hotmail.com
        </Button>{' '}
        <Button type='link' href='https://github.com/Ashleyg5' variant="secondary" size="lg">
          GITHUB
          <hr />
          Ashleyg5
        </Button>{' '}
        <Button type='link' href='https://www.linkedin.com/in/ashley-giraldo' variant="secondary" size="lg">
          LINKEDIN
          <hr />
          Ashley Giraldo
        </Button>
      </div>
  </section>
  );
}
