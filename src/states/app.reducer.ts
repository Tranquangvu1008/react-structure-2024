import { IActionCreator, IAppState } from "../types/state";

const initialState: IAppState = {
  isLoading: false,
  user: null
}

export const reducer = (state = initialState, { type, payload }: IActionCreator) => {
  switch (type) {
    case 'SET_USER': {
      return {
        ...state,
        user: {
          first_name: '',
          last_name: '',
          email: ''
        }
      }
    }
    case 'SET_LOADING': {
      return {
        ...state,
        isLoading: payload
      }
    }
    case 'SET_OPEN_LOADING': {
      return {
        ...state,
        isLoading: true
      }
    }
    case 'SET_CLOSE_LOADING': {
      return {
        ...state,
        isLoading: false,
      }
    }
    default: 
      return state;
  }
}