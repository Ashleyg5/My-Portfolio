import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { GrMail } from 'react-icons/gr';
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_0d5yhgb', 'template_41dmddv', form.current, '8IH0GFYC1RLYM_mxJ')

    e.target.reset()

    alert('Message sent successfully!')
  };

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
  return (
    <section className='container contact' id='contact'>
      <h5 className='mb-0 mt-5 text-center'>Get in Touch</h5>
      <h1 className='mb-5 text-center'>Contact Me</h1>
      <div className='row'>
        <div className='col d-flex justify-content-center flex-wrap'>
          <Form ref={form} className='mt-3' noValidate validated={validated} onClick={handleSubmit} onSubmit={sendEmail} >
            <Row>
              <Form.Group md="5" controlId="validationCustom01">
                <Form.Label>Name: </Form.Label>
                <Form.Control
                  required
                  name='name'
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
              <Form.Group md="5" controlId="validationCustomUsername">
                <Form.Label>Email Address: </Form.Label>
                <InputGroup hasValidation>
                  <Form.Control
                    type="email"
                    name='email'
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
            <Row className='mt-3 d-flex justify-content-center'>
              <Form.Group md="5" controlId="validationCustom03">
                <Form.Label>Message: </Form.Label>
                <Form.Control as="textarea" style={{ height: '100px' }} name='message' placeholder="Your message" required value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
                <Form.Control.Feedback type="invalid">
                  Message is required.
                </Form.Control.Feedback>
              </Form.Group>
              <Button className="btn mt-4" type="submit" id='register' disabled="disabled">Send Message</Button>
            </Row>

          </Form>
        </div>
        <div className="col text-center ms-auto">
          <Button href='mailto: ashleygiraldo5@hotmail.com' size="lg">
            <GrMail size={30} className='m-3 email' />
            <br />
            Email
            <hr />
            <p className='contactbtns'> Ashleygiraldo5@hotmail.com</p>
          </Button>{' '}
          <br />
          <Button type='link' href='https://github.com/Ashleyg5' className='me-3' size="lg">
            <BsGithub size={30} className='m-3 email' />
            <br />
            Github
            <hr />
            <p className='contactbtns'>Ashleyg5</p>
          </Button>{' '}
          <Button type='link' href='https://www.linkedin.com/in/ashley-giraldo' size="lg">
            <BsLinkedin size={30} className='m-3 email' />
            <br />
            LinkedIn
            <hr />
            <p className='contactbtns'>Ashley Giraldo</p>
          </Button>
        </div>
      </div>
    </section>
  );
}
