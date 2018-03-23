import React, {Component} from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';



class AdminView extends Component {





  render() {
    return (
        <div>
          <h1>Admin View</h1>
          <h2>Products</h2>
            <ProductList productList={this.props.productList}
            delProductFromProductList={this.props.delProductFromProductList}/>

          <h2>Create a New Product</h2>
           <ProductForm addNewProductToProductList={this.props.addNewProductToProductList}/>
        </div>
    );
  }
}

export default AdminView;
