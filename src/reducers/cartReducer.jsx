import {types} from "../types/index";


export const cartReducer = (state = [], action) => { 
switch (action.type) {
  case types.addItem:
    return [...state, action.payload]
   case types.removeItem:
    return state.filter(item => item.idDrink !== action.payload)

  default:
  return state
}
};
