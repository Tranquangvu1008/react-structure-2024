export type IActionCreator = {
  type: string;
  payload: any
}

export type IUser = {
  first_name: string;
  last_name: string;
  email: string;
}

export type IAppState = {
  isLoading: boolean;
  user: IUser | null
}

type IProduct = {
  title: string;
  id: number;
}

export type IProductState = {
  dataSource: IProduct[];
  laptops?: any;
  smartphones?: any;
  error: string
}