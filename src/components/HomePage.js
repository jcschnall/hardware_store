import React, {Component} from 'react';
import AdminView from './AdminView'
import ShopView from './ShopView'

class HomePage extends Component {

  constructor() {
    super();

    this.state = {
      itemCurrentlyOnSale: 'A Hammer',
      editSaleItem: true,
      productList: [
        {
          productName: 'Hammer',
          description: 'Itsa hammer',
          price: 12.3,
        },
        {
          productName: 'Nail',
          description: 'Itsa nail',
          price: 0.12,
        }
      ]};
    }

  toggleEditSaleItem = () => {
    const editSaleItem = !this.state.editSaleItem;
    this.setState({editSaleItem});
  };

  handleItemCurrentlyOnSaleChange = (event) => {
  const itemCurrentlyOnSale = event.target.value;
  this.setState({itemCurrentlyOnSale});
};

addNewProductToProductList = (newProduct) => {
    const productList = [...this.state.productList];
    productList.push(newProduct);
    this.setState({productList});
};

delProductFromProductList = (delProduct) => {
    const productList = [...this.state.productList];
    productList.pop(delProduct);
    this.setState({productList});
};

  render() {
    return (
        <div>
          <h1>My Hardware Store</h1>
          <div>
            <span>Currently On Sale: { this.state.itemCurrentlyOnSale }!</span>
            <span>
              <button onClick={this.toggleEditSaleItem}>
                { this.state.editSaleItem ? 'Hide' : 'Edit Sale Item' }
              </button>
            </span>
            {
              this.state.editSaleItem ?
              <div>
              <input
              onChange={this.handleItemCurrentlyOnSaleChange}
              value={this.state.itemCurrentlyOnSale}
              type="text" />
              </div>
                : null
              }
              <AdminView
              productList={this.state.productList}
              addNewProductToProductList={this.addNewProductToProductList}
              delProductFromProductList={this.delProductFromProductList}/>

              <ShopView
              productList={this.state.productList}/>
          </div>
        </div>
    );
  }
}

export default HomePage;
