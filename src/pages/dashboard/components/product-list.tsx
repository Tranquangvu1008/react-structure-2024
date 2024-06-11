import { connect } from "react-redux"

const mapStateToProps = (state: any) => {
  return {
    products: state.product.dataSource
  }
}

function ProductList({ products }: any) {
  console.log('ProductList: ', products)

  return (
    <div>ProductList</div>
  )
}

export default connect(mapStateToProps)(ProductList)