import React, {Component} from 'react';

import Product from './ProductNoDel';

class ProductListNoDel extends Component {
  render() {
    const productList = this.props.productList;

    console.log(productList);

    const productComponents = productList.map((product, index) => {
      return <Product
          productName={product.productName}
          description={product.description}
          price={product.price}
          key={index}/>;
    });

    return (
        <div>
          { productComponents }
        </div>
    );

  }
}

export default ProductListNoDel;
