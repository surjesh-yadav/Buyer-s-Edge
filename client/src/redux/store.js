import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import getAllProductsReducer from "./reducers/prductReducer";

//7. ye function yaha call ho raha isliye yahi aagya data
const reducer = combineReducers({
  //8. GetAllProducts ke ande rjo value hain vo Redux devtools me State me dekh sakte ho
  getAllProducts: getAllProductsReducer,
});

const middleware = [thunk];
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
