import { ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap"
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { CartItem } from "../CartItem";


export const CartCanvas = ({showCart, handleCloseCart}) => {

const {cart} = useCart()

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mi carrito</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <ListGroup>
            {
              cart.length 
              ?
              (
                cart.map(drink => <CartItem key={drink.idDrink} drink={drink}></CartItem>)
              ) 
              :
              <p>El carrito esta vacío</p>
            }
         </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
  )
}


CartCanvas.propTypes ={

    showCart: PropTypes.bool,
    handleCloseCart: PropTypes.func

}