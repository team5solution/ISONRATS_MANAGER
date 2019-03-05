import React, { Component } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import TextFieldGroup from "../../common/TextField";
import validateInput from "../../common/validators/product";
import { ROOT } from "../../actions/types";

class ProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "",
      description: "",
      images: [],
      errors: {},
      isLoading: false,
      imageUploading: false
    };
    this.url = `${ROOT}product`;
    console.log(this.url);
  }

  isValid = () => {
    const { errors, isValid } = validateInput(this.state);

    if (!isValid) {
      this.setState({ errors });
    }

    return isValid;
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true });
      let bodyFormData = new FormData();
      bodyFormData.set("name", this.state.name);
      bodyFormData.set("type", this.state.type);
      bodyFormData.set("description", this.state.description);
      this.state.images.forEach(file => {
        bodyFormData.append("images", file);
      });
      axios
        .post(this.url, bodyFormData)
        .then(response => {
          console.log(response);
          this.setState({
            isLoading: false
          });
        })
        .catch(error =>
          this.setState({
            error: error,
            isLoading: false
          })
        );
    }
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  imgOnChange = e => {
    const files = Array.from(e.target.files);
    this.setState({
      images: files
    });
  };

  render() {
    const {
      name,
      type,
      description,
      images,
      errors,
      isLoading,
      imageUploading
    } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <div className="text-center">
          <h4>Add Product</h4>
        </div>

        {errors.form && <div className="alert alert-danger">{errors.form}</div>}

        <TextFieldGroup
          field="name"
          label="Product Name"
          value={name}
          error={errors.name}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <br />
        <TextFieldGroup
          field="type"
          label="Product Type"
          value={type}
          error={errors.type}
          onChange={e => {
            this.onChange(e);
          }}
        />
        <br />
        <div className="form-group h-100 justify-content-center align-items-center">
          <label className="control-label" style={{ paddingRight: "50px" }}>
            Product Description
          </label>
          <div>
            <textarea
              name="description"
              rows="5"
              style={{ minWidth: "100%", resize: "none" }}
              onChange={e => this.onChange(e)}
            />
          </div>
        </div>
        <br />
        <div className="form-group">
          <label className="control-label" style={{ paddingRight: "50px" }}>
            Product Images
          </label>
          <input type="file" id="imgs" onChange={this.imgOnChange} multiple />
        </div>
        <br />
        <div className="form-group">
          <button className="btn btn-primary btn-lg" disabled={isLoading}>
            Save Product
          </button>
        </div>
      </form>
    );
  }
}

export default ProductForm;
