import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import PropTypes from "prop-types";
import useDrinks from "../../hooks/useDrinks";
import styles from "./index.module.css";
import useCart from "../../hooks/useCart";
import { types } from "../../types";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

export const DrinkCard = ({ drink }) => {
  const {strDrinkThumb, strDrink, idDrink} = drink
  const { handleDrinkIdClick } = useDrinks();

  const {handleToggleFavorites, favorites, user} =  useAuth()

  const { dispatch } = useCart();

  const handleAddCart = () => {
    dispatch({
      type: types.addItemToCart,
      payload: drink,
    });

    Swal.fire({
      title: 'Producto agregado al carrito!',
      width: 500,
      padding: '4em',
      color: '#716add',
      background: '#fff url()',
      backdrop: `
        rgba(0,0,123,0.4)
        url("/public/picmix.com_2376991.gif")
        left top
        no-repeat
      `
    })
  };
  
  const handleFavorite = () => {
    user ?
    handleToggleFavorites(idDrink)
    :
    Swal.fire({
      icon:"error",
      title:"Debes estar logueado",
    })
  }

  return (
    <Col md={6} lg={3}>
      <Card className="mb-4 shadow">
        <Card.Img
          variant="top"
          src={strDrinkThumb}
          alt={`Imagen de ${strDrink}`}
        />
        <Card.Body>
          <Card.Title className={styles.strDrink}>{strDrink}</Card.Title>
          <a style={{cursor:"pointer"}} className="text-danger" onClick={handleFavorite}>
            {
              favorites.includes(idDrink) ? 
              <i className="fas fa-heart fa-lg"></i>
              :
              <i className="far fa-heart fa-lg"></i>
            }          
          </a>
          <Button
            variant={"success"}
            className="w-100 text-uppercase mt-2"
            onClick={() => {
              handleDrinkIdClick(idDrink);
            }}
          >
            Ver receta
          </Button>
          <Button
            variant={"primary"}
            className="w-100  text-uppercase mt-2"
            onClick={handleAddCart}
          >
            Comprar
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

DrinkCard.propTypes = {
  drink: PropTypes.object.isRequired,
  /*   strDrinkThumb: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired, */
};
