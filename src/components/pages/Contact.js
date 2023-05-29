import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

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

  return (
    <div>
      <h1 className="m-3">Contact Page</h1>
      <Form noValidate validated={validated} onClick={handleSubmit}>
        <Row className="m-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name: </Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Form.Control.Feedback type="invalid">
              Name is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="m-3">
          <Form.Group as={Col} md="4" controlId="validationCustomUsername">
            <Form.Label>Email Address: </Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="Email"
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
        <Row className="m-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>Message: </Form.Label>
            <Form.Control type="textarea" placeholder="Your message here" required value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Message is required.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button className="m-4" type="submit" id='register' disabled="disabled">Submit form</Button>
      </Form>
    </div>
  );
}
