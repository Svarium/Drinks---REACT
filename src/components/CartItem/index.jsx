import { Image, ListGroupItem } from "react-bootstrap";
import PropTypes from "prop-types";
import useCart from "../../hooks/useCart";
import { types } from "../../types";

export const CartItem = ({ drink }) => {
  const { strDrink, strDrinkThumb, price, quantity } = drink;

  const {dispatch} = useCart()

  const handleAddItem = () => {
    dispatch({
      type : types.addItemToCart,
      payload : drink
    })
  }

  const handleRemoveItem = () => {
    dispatch({
      type: types.removeItemFromCart,
      payload : drink
    })
  }

  const handleRemoveAllItem = () => {
    dispatch({
      type: types.removeAllItemsFromCart,
      payload: drink
    })
  }

  return (
  <ListGroupItem className="d-flex gap-2">

    <Image src={strDrinkThumb} width={"80px"} /> 
    <div style={{width:"100%"}}>
    <h6>{strDrink}</h6>
    <hr />
  <div className="d-flex justify-content-between">
    <h5>$ {price * quantity}</h5>
    <div className="d-flex gap-2 align-items-center">
    <button className="btn btn-sm btn-danger" onClick={handleRemoveItem}>
    <i className="fas fa-minus"></i>
    </button>
    <input type="text" style={{width:"50px"}} className="form-control"  value={quantity}/>
    <button className="btn btn-sm btn-success" onClick={handleAddItem}>
    <i className="fas fa-plus"></i>
    </button>
    <h4 className="btn btn-sm btn-danger mt-2" style={{cursor:'pointer'}} onClick={handleRemoveAllItem}>
    <i className="fas fa-trash-alt fa-lg"></i>
    </h4>
    </div>
  </div>
    </div>
    

  </ListGroupItem>
  )
};

CartItem.propTypes = {
  drink: PropTypes.shape({
    strDrink: PropTypes.string,
    strDrinkThumb: PropTypes.string,
    price : PropTypes.number,
    quantity: PropTypes.number
  }),
};
