import { Button, ListGroup, ListGroupItem, Offcanvas } from "react-bootstrap";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { CartItem } from "../CartItem";
import { types } from "../../types";
import Swal from "sweetalert2";

export const CartCanvas = ({ showCart, handleCloseCart }) => {
  const { cart, dispatch } = useCart();

  const cleanCart = () => {
    dispatch( {
      type: types.cleanCart,
      payload: {}
    })
  }

  const confirmPurchase = () => {
    dispatch( {
      type: types.cleanCart,
      payload: {}
    })

    let timerInterval
    Swal.fire({
      title: 'Compra realizada con exito!',
      icon: 'success',
      html: 'Procesando tu pedido <b></b>',
      timer: 3000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log('I was closed by the timer')
      }
    })
  }

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mi carrito</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body >
        {cart.length ? (
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <ListGroup>
                {cart.map((drink) => (
                  <CartItem key={drink.idDrink} drink={drink}></CartItem>
                ))}
              </ListGroup>
            </div>
            <div className="d-flex justofy-content-center gap-2 mt-4">
              <Button onClick={cleanCart} variant="secondary">Vaciar Carrito</Button>
              <Button onClick={confirmPurchase} variant="danger">Confirmar compra</Button>
            </div>
          </div>
        ) : (
          <p>El carrito esta vacío</p>
        )}
      </Offcanvas.Body>
    </Offcanvas>
  );
};

CartCanvas.propTypes = {
  showCart: PropTypes.bool,
  handleCloseCart: PropTypes.func,
};
