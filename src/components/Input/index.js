import React from 'react';
import { Form } from 'react-bootstrap';

export default function Input({ label, type, input, meta: { touched, error } }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} {...input} isInvalid={touched && !!error} />
      <Form.Control.Feedback type="invalid">
        {error}
      </Form.Control.Feedback>
    </Form.Group>
  )
}
