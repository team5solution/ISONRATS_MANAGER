import React, { Component } from "react";
import { connect } from "react-redux";
import socketIOClient from "socket.io-client";
import Products from "./products/index";
//import SERVER_URL from "../settings.js";
import { addNewProduct } from "../actions/products";
const m = ({ products }) => ({ products });

@connect(
  m,
  { addNewProduct }
)
class Home extends Component {
  constructor(props) {
    super(props);
    console.log("props: ", props);
  }
  componentDidMount() {
    const that = this;
    const socket = socketIOClient("http://localhost:3000");

    socket.on("new product", data =>
      that.props.addNewProduct(data.createdProduct)
    );
  }
  render() {
    return <Products />;
  }
}

export default Home;
