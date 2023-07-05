import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Alert, Button } from "react-bootstrap";
import * as Yup from 'yup'


export const SearchForm = () => {
  const initialValues = {
    name: "",
    category: "",
  };


  const validationSchema = Yup.object({
    name: Yup.string().required('Debe colocar un nombre')
  })

  const handleSubmit = (values) => {
    console.log(values);
  }

  return (
    <Formik initialValues={initialValues}
    onSubmit={handleSubmit}
    validationSchema={validationSchema}
    >



      {(formik) => (
        <Form onSubmit={formik.handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="name">Nombre de la bebida</Form.Label>
                <Field
                  id="name"
                  type="text"
                  placeholder="Ej. tequila, Vodka"
                  name="name"
                  as={Form.Control}
                ></Field>
                <ErrorMessage
                name='name'
                component={Form.text}
                className="text-danger"
                ></ErrorMessage>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="category">Categoría</Form.Label>
                <Field id="category" name="category" as={Form.Select}>
                  <option value="" selected hidden>
                    Seleccione categoría...
                  </option>
                </Field>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end mt-3">
            <Col md={3}>
              <Button variant="danger" disabled={false} className="w-100" type="submit">
                  Buscar Bebidas
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
