import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Alert, Button } from "react-bootstrap";
import * as Yup from 'yup';



export const Register = () => {



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

  const handleSubmit = (values) => {
   console.log();
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
                <Form.Label className="bg-primary rounded p-2 text-white shadow" htmlFor="ingredient">Ingrediente de la bebida</Form.Label>
                <Field
                  id="ingredient"
                  type="text"
                  placeholder="Ej. tequila, Vodka"
                  name="ingredient"
                  as={Form.Control}
                  className="shadow"
                ></Field>
                <ErrorMessage
                name='ingredient'
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label className="bg-primary rounded p-2 text-white shadow" htmlFor="category">Categoría de la bebida</Form.Label>
                <Field className="shadow" id="category" name="category" as={Form.Select}>
                  <option value="" defaultValue="" hidden>
                    Seleccione categoría...
                  </option>
                  {categories.map((category) => (
                    <option value={category.strCategory} key={category.strCategory}>
                      {category.strCategory}
                    </option>
                  ))}
                </Field>
                <ErrorMessage
                name='category'
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-end mt-3">
            <Col md={3}>
              <Button variant="primary" 
              disabled={loading} 
              className="w-100 mb-3" 
              type="submit">
                 {loading ? "Buscando..." : " Buscar Bebidas"}
              </Button>
            </Col>
          </Row>
        </Form>
      )}
    </Formik>
  );
};
