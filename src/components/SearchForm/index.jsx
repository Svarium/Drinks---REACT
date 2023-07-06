import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { Form, Row, Col, Alert, Button } from "react-bootstrap";
import * as Yup from 'yup';
import useCategories from "../../hooks/useCategories";


export const SearchForm = () => {

 const {categories} = useCategories();
 console.log(categories);
 

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
                component={Form.Text}
                className="text-danger ms-2"
                ></ErrorMessage>
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group>
                <Form.Label htmlFor="category">Categoría</Form.Label>
                <Field id="category" name="category" as={Form.Select}>
                  <option value="" defaultValue="" hidden>
                    Seleccione categoría...
                  </option>
                  {categories.map((category) => (
                    <option value={category.strCategory} key={category.strCategory}>
                      {category.strCategory}
                    </option>
                  ))}
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
