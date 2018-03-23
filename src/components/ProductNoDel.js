import React, {Component} from 'react';

class ProductNoDel extends Component {


  constructor () {
    super();

    this.state = {
      delProduct: {}
    }
  }


  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
        <div>
          <h3>{productName}</h3>
          <div>{description}</div>
          <div>{price}</div>
        </div>
    );
  }
}

export default ProductNoDel;
