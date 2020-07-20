import React, { Component } from 'react';
import './Style.css';
import Cart from './Components/Cart.js';
import HomePage from './Components/HomePage.js';
import cartIMG from './images/cart.jpg';
import homeIMG from './images/home.jpg';

// Shopping Website Project

export default class App extends Component {

  state = {
    flag: false, // if false - Home page appears
    list: []
  }

  isCartShow = () => {
    if (this.state.flag == true) { // show Cart component.
      return (
        <div>
          <Cart list={this.state.list} del={this.deleteProduct} buyAll={this.buyAllProducts} />
        </div>
      )
    }
    else { // show Hompage component.
      return (
        <div>
          <HomePage list={this.state.list} pData={this.addProduct} />
        </div>
      )
    }
  }

  // func send to HomePage component, set products list with one more product.
  addProduct = (n, p) => {
    if (n.length > 0 && (p > 0 && p.length <= 8)) {
      this.setState({ list: [...this.state.list, { name: n, price: p }] })
    }
    else alert('name at least one char and price between 1 to 99999999')
  }

  // func sends to Product component, set list without chosen product
  deleteProduct = (i) => {
    let tempList = this.state.list.filter((element, index) => (index != i))
    this.setState({ list: tempList })
  }

  // func sends to Cart component, set list to empty list. 
  buyAllProducts = () => {
    if (this.state.list.length == 0)
      alert('No products to purchase');
    else {
      alert('you bought all products !!');
      this.setState({ list: [] })
    }
  }

  render() {
    return (
      <div>
        <br />
        <div id='navBar'>
          <img className='navItem' src={homeIMG} id='homeIMG' onClick={() => { this.setState({ flag: false }) }} />
          <h1 className='navItem'>SV Shopping</h1>
          <img className='navItem' src={cartIMG} id='cartIMG' onClick={() => { this.setState({ flag: true }) }} />
          <p className='navItem' id='productsNum'>{this.state.list.length}</p>
        </div>
        <br /><br />
        {/* always show this funcion (according to the flag) */}
        {this.isCartShow()}
      </div>
    )
  }
}
