import { IProduct } from "../types/state"

export const fetchProduct = (payload: IProduct[]) => {
  return {
    type: 'FETCH_PRODUCT_SUCCESS',
    payload
  }
}

export const setError = (payload: string) => {
  // call api?
  return {
    type: 'SET_ERROR',
    payload
  }
}

export const addProduct = (payload: IProduct) => {
  return {
    type: 'ADD_PRODUCT',
    payload
  }
}

export const fetchLaptops = (payload: any[]) => {
  return {
    type: 'FETCH_LAPTOP_SUCCESS',
    payload
  }
}

export const thunkFetchLaptops = () => async (dispatch: any, getState: any) => {
  const laptops = getState().product.laptops;
  const res = await fetch(`https://dummyjson.com/products/category/laptops?limit=5`)
  const data = await res.json();
  const newItems = [...laptops, ...data.products];
  dispatch(fetchLaptops(newItems))
}