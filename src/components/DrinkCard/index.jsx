import React from 'react'
import { Button, Card, Col } from 'react-bootstrap'
import PropTypes from "prop-types";
import useDrinks from '../../hooks/useDrinks';
import styles from "./index.module.css";

export const DrinkCard = ({drink}) => {

  const {handleDrinkIdClick, } = useDrinks()


  return (
   <Col md={6} lg={3}>
   <Card className='mb-4'>
    <Card.Img
    variant='top'
    src={drink.strDrinkThumb}
    alt={`Imagen de ${drink.strDrink}`}
    />
    <Card.Body>
        <Card.Title className={styles.strDrink}>
            {drink.strDrink}
        </Card.Title>
    <Button
    variant={"warning"}
    className='w-100 text-uppercase mt-2'
    onClick={() => 
      {handleDrinkIdClick(drink.idDrink)
     }
    }
    >
        Ver receta
    </Button>
    <Button
    variant={"danger"}
    className='w-100 text-uppercase mt-2'
    >
        Comprar
    </Button>
    </Card.Body>
   </Card>
   </Col>
  )
}

DrinkCard.propTypes = {
    drink : PropTypes.object.isRequired,
  /*   strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired, */
}
