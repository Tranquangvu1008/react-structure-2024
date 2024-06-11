import { IActionCreator, IProductState } from "../types/state";

const initialState: IProductState = {
  dataSource: [
    { id: 1, title: 'laptop' },
    { id: 2, title: 'samsung' }
  ],
  laptops: [ 
    { id: 1, title: 'laptop' },
  ],
  error: ''
}

export const reducer = (state = initialState, { type, payload }: IActionCreator) => {
  switch (type) {
    case 'FETCH_PRODUCT_SUCCESS': {
      return {
        ...state,
        dataSource: payload
      }
    }
    case 'SET_ERROR': {
      return {
        ...state,
        error: payload
      }
    }
    case 'ADD_PRODUCT': {
      return {
        ...state,
        dataSource: payload
      }
    }
    case 'FETCH_LAPTOP_SUCCESS': {
      return {
        ...state,
        laptops: payload
      }
    }
    default: 
      return state;
  }
}