import React, {Component} from 'react';
import ProductList from './ProductListNoDel';



class ShopView extends Component {



  render() {
    return (
        <div>
          <h1>Shop View</h1>
          <h2>Products</h2>
            <ProductList productList={this.props.productList}/>
        </div>
    );
  }
}

export default ShopView;
