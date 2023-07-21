import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Alert, Button } from "react-bootstrap";
import * as Yup from 'yup';
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";




export const Login = () => {

const {login, alert} = useAuth()

  const initialValues = {
    email: "",
    password:"",
  };


  const validationSchema = Yup.object({
    email: Yup.string().required('Debe ingresar un email'),
    password:Yup.string().required('La contraseña es obligatoria'),
  })


  const handleSubmit = (values) => {
    login(values)
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido!',
      showConfirmButton: false,
      timer: 1500
    })
   /* console.log(values); */
  }

  return (
    <Formik initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >



      {(formik) => (
        <Form onSubmit={formik.handleSubmit} className="col-6 mx-auto m-5">   
        {alert && <Alert variant="danger">{alert}</Alert>}        
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
                className="text-danger ms-2 btn btn-sm btn-danger text-white"
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
                className="text-danger ms-2 btn btn-sm btn-danger text-white"
                ></ErrorMessage>
              </Form.Group>
            
          <Row className="justify-content-end mt-3">
            <Col md={3}>
              <Button variant="primary" 
              disabled={false} 
              className="w-100 mb-3" 
              type="submit">
               Ingresá
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
