import { Modal, Row, Col, Image, Button } from "react-bootstrap";
import useDrinks from "../../hooks/useDrinks";
import useCart from '../../hooks/useCart';
import { types } from '../../types';
import { getDrinkById } from '../../helpers';
import Swal from "sweetalert2";

export const DrinkModalDetail = () => {
  const { showModal, handleShowModalClick, recipe, drinks } = useDrinks();

  const { strDrink, strDrinkThumb, strInstructions, idDrink } = recipe;

  const showIngredients = () => {
    const ingredients = [];

    for (let i = 1; i <= 15; i++) {
      if (recipe[`strIngredient${i}`]) {
        ingredients.push(
          <li key={recipe[`strIngredient${i}`]}>
            {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
          </li>
        );
      }
    }

    return ingredients;
  };

/*   const {handleDrinkIdClick, } = useDrinks() */


  const {dispatch} = useCart();

  const handleAddCart = () => {

  const drink =  getDrinkById(drinks, idDrink);

    dispatch({
      type:types.addItemToCart,
      payload: drink
    })

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
  } 

  return (
    <Modal show={showModal} onHide={handleShowModalClick} size="xl">
      <Row>
        <Col>
          <Image
            src={strDrinkThumb}
            alt={`Imagen de ${strDrinkThumb}`}
            fluid
            className="rounded-start"
          />
        </Col>
        <Col>
          <Modal.Header closeButton>
            <Modal.Title>{strDrink}</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex flex-column justify-content-between">
            <div >
            <h4>Instructions:</h4>
            <p>{strInstructions}</p>
            <h4>Ingredients & measures</h4>
            <ul>{showIngredients()}</ul>
            <Button
    variant={"danger"}
    className='w-100 text-uppercase mt-2'
    onClick={handleAddCart}
    >
        Comprar
    </Button>
            </div>
   
          </Modal.Body>
        </Col>
      </Row>
    </Modal>
  );
};
