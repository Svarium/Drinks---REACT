import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Alert, Button } from "react-bootstrap";
import * as Yup from 'yup';
import { registerAuthService } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";



export const Register = () => {

  const navigate = useNavigate()

  const initialValues = {
    name: "",
    email: "",
    password:"",
  };


  const validationSchema = Yup.object({
    name: Yup.string().required('Debe colocar un nombre'),
    email: Yup.string().required('Debe ingresar un email'),
    password:Yup.string().required('La contraseña es obligatoria'),
  })

  const handleSubmit = async (values) => {
  const response = await registerAuthService(values)

  console.log(response);

  navigate('/login')
  }

  return (
    <Formik initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >



      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="col-6 mx-auto">
         
              <Form.Group className="mb-3">
                <Form.Label className="bg-primary rounded p-2 text-white shadow" htmlFor="name">Nombre</Form.Label>
                <Field
                  id="name"
                  type="text"
                  placeholder="Coloca tu nombre"
                  name="name"
                  as={Form.Control}
                  className="shadow"
                ></Field>
                <ErrorMessage
                name='name'
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
           
              <Form.Group className="mb-3">
                <Form.Label className="bg-primary rounded p-2 text-white shadow" htmlFor="email">Email</Form.Label>
                <Field
                  id="email"
                  type="text"
                  placeholder="Ingresa tu email"
                  name="email"
                  as={Form.Control}
                  className="shadow"
                ></Field>
                <ErrorMessage
                name='email'
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>

              <Form.Group>
                <Form.Label className="bg-primary rounded p-2 text-white shadow" htmlFor="password">Contraseña</Form.Label>
                <Field
                  id="password"
                  type="password"
                  name="password"
                  as={Form.Control}
                  className="shadow"
                ></Field>
                <ErrorMessage
                name='password'
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
            
          <Row className="justify-content-end mt-3">
            <Col md={3}>
              <Button variant="primary" 
              disabled={false} 
              className="w-100 mb-3" 
              type="submit">
                Registrate
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
