import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';

import { thunkFetchLaptops } from '../../../states/product.action';

// const mapStateToProps = (state: any, ownProps: any) => {
//   const products = state.product.dataSource;
//   const laptops = state.product.laptops;
//   const { productId } = ownProps;
//   const productItem = products.find((product: any) => product.id === productId);

//   return {
//     productItem,
//     laptops
//   }
// }

const Laptop =() => {
  const dispatch = useDispatch();
  return (
    <>
      Test redux thunk
      <Button
          onClick={() => {
            dispatch(thunkFetchLaptops() as any);
          }}
      >fetch more laptops</Button>
    </>
  );
}

export default Laptop;