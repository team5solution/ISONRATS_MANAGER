import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions/products";
import { Loading } from "../common";
import ProductsItem from "./productItems";
import ProductForm from "./productForm.js";
const m = ({ products }) => ({ products });

@connect(
  m,
  { fetchProducts }
)
export default class Products extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  render() {
    const {
      products: { isFetching, productItems }
    } = this.props;

    if (isFetching) {
      return <Loading />;
    }

    return (
      <div className="container">
        <div className="products-container">
          {productItems.map((item, i) => (
            <ProductsItem key={i} {...item} />
          ))}
        </div>
        <ProductForm />
      </div>
    );
  }
}
