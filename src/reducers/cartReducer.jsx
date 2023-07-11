import {types} from "../types/index";


export const cartReducer = (state = [], action) => {

  const {idDrink} = action.payload
  
  const item = state.find(item => item.idDrink === idDrink)
  
switch (action.type) {
  case types.addItemToCart:
    return item
    ?
    state.map((item )=> 
    item.idDrink === idDrink 
    ? {
      ...item,
      quantity: item.quantity + 1
    }
    :
    item
    )
    :[
      ...state, 
      {
        ...action.payload,
        quantity: 1
      }
     ];

  case types.removeItemFromCart:
    return action.payload.quantity > 1 
    ?
    state.map((item )=> 
    item.idDrink === idDrink 
    ? {
      ...item,
      quantity: item.quantity - 1
    }
    :
    item
    )
    :
    state.filter(item => item.idDrink !== idDrink)
    ;

  case types.removeAllItemsFromCart:
    return state.filter(item => item.idDrink !== idDrink)

  default:
  return state
}
};
