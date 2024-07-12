import React, { useState, useEffect } from 'react';
import { Container, Tabs, Tab, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: ''
  });

  const [errors, setErrors] = useState({});
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    // Load form data from local storage if exists
    const savedFormData = JSON.parse(localStorage.getItem('formData'));
    if (savedFormData) {
      setFormData(savedFormData);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission, e.g., send data to API (not implemented here)
    console.log('Submitted:', formData);
    alert('Form submitted!'); // Show alert after submission
    localStorage.removeItem('formData'); // Clear saved form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      address1: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    });
    setCurrentStep(0); // Reset current step to start
  };

  const validateForm = () => {
    let errors = {};
    let formIsValid = true;

    if (currentStep === 0) {
      if (!formData.name) {
        formIsValid = false;
        errors['name'] = 'Please enter your name';
      }
      if (!formData.email) {
        formIsValid = false;
        errors['email'] = 'Please enter your email';
      } else {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!pattern.test(formData.email)) {
          formIsValid = false;
          errors['email'] = 'Please enter a valid email address';
        }
      }
      if (!formData.phone) {
        formIsValid = false;
        errors['phone'] = 'Please enter your phone number';
      } else {
        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(formData.phone)) {
          formIsValid = false;
          errors['phone'] = 'Please enter a valid 10-digit phone number';
        }
      }
    } else if (currentStep === 1) {
      if (!formData.address1) {
        formIsValid = false;
        errors['address1'] = 'Please enter Address Line 1';
      }
      if (!formData.city) {
        formIsValid = false;
        errors['city'] = 'Please enter your city';
      }
      if (!formData.state) {
        formIsValid = false;
        errors['state'] = 'Please enter your state';
      }
      if (!formData.zip) {
        formIsValid = false;
        errors['zip'] = 'Please enter your zip code';
      }
    }

    setErrors(errors);
    return formIsValid;
  };

  const nextStep = () => {
    if (validateForm()) {
      setCurrentStep(currentStep + 1);
      localStorage.setItem('formData', JSON.stringify(formData));
    }
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <Container className="mt-4">
      <Tabs activeKey={currentStep} onSelect={() => {}} className="mb-3">
        <Tab eventKey={0} title="Personal Information">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                isInvalid={errors['name']}
              />
              <Form.Control.Feedback type="invalid">{errors['name']}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                isInvalid={errors['email']}
              />
              <Form.Control.Feedback type="invalid">{errors['email']}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="phone">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter phone (10 digits)"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                isInvalid={errors['phone']}
              />
              <Form.Control.Feedback type="invalid">{errors['phone']}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        </Tab>

        <Tab eventKey={1} title="Address Information">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="address1">
              <Form.Label>Address Line 1</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                isInvalid={errors['address1']}
              />
              <Form.Control.Feedback type="invalid">{errors['address1']}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="address2">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter address (optional)"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                isInvalid={errors['city']}
              />
              <Form.Control.Feedback type="invalid">{errors['city']}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="state">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter state"
                name="state"
                value={formData.state}
                onChange={handleChange}
                isInvalid={errors['state']}
              />
              <Form.Control.Feedback type="invalid">{errors['state']}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="zip">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter zip code"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                isInvalid={errors['zip']}
              />
              <Form.Control.Feedback type="invalid">{errors['zip']}</Form.Control.Feedback>
            </Form.Group>

            <Button variant="secondary" onClick={prevStep}>Previous</Button>{' '}
            <Button variant="primary" onClick={nextStep}>Next</Button>
          </Form>
        </Tab>

        <Tab eventKey={2} title="Confirmation">
          <h4>Review your information:</h4>
          <p>Name: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>Phone: {formData.phone}</p>
          <p>Address Line 1: {formData.address1}</p>
          <p>Address Line 2: {formData.address2}</p>
          <p>City: {formData.city}</p>
          <p>State: {formData.state}</p>
          <p>Zip Code: {formData.zip}</p>

          <Button variant="secondary" onClick={prevStep}>Previous</Button>{' '}
          <Button variant="primary" onClick={handleSubmit}>Submit</Button>
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;
