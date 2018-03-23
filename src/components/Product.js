import React, {Component} from 'react';

class Product extends Component {


  constructor () {
    super();

    this.state = {
      delProduct: {}
    }
  }


  delProduct = (event) => {
 event.preventDefault();
 this.props.delProductFromProductList(this.props.productName);
};


  render() {
    const productName = this.props.productName;
    const description = this.props.description;
    const price = this.props.price;

    return (
        <div>
          <h3>{productName}</h3>
          <div>{description}</div>
          <div>{price}</div>
          <span>
            <button onClick={this.delProduct}>
              remove item
            </button>
          </span>
        </div>
    );
  }
}

export default Product;
