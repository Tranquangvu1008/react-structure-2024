import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { reducer as appReducer } from '../states/app.reducer';
import { reducer as productReducer } from '../states/product.reducer';

export const rootReducers = combineReducers({
  app: appReducer,
  product: productReducer
})
declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));
export const store = createStore(rootReducers, enhancer)

/* store
{
  app: {
    isLoading: false,
    user: null
  },
  product: {
    dataSource: [],
    error: ''
  }
}
*/