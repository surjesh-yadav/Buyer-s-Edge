import * as actionTypes from "../constants/productConstant";


//6. Ye yaha action type check krega aur ussi hisab se data return kr diya isne, aur store me chali gya sara data
const getAllProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_ALL_PRODUCTS_SUCCESS:
      return { products: action.payload };
    case actionTypes.GET_ALL_PRODUCTS_FAIL:
      return { error: action.payload };
    default:
      return state;
  } 
};

export default getAllProductsReducer;
