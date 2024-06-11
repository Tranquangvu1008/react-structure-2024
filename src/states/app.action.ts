import { IUser } from "../types/state"

export const setLoading = (isLoading: boolean) => {
  return {
    type: 'SET_LOADING',
    payload: isLoading
  }
}

export const setOpenLoading = () => {
  return {
    type: 'SET_OPEN_LOADING',
  }
}

export const setCloseLoading = () => {
  return {
    type: 'SET_CLOSE_LOADING',
  }
}

export const setUser = (user: IUser) => {
  return {
    type: 'SET_USER',
    payload: user
  }
}
