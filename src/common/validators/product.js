import validator from "validator";
import isEmpty from "../isEmpty";

export default function validateInput(data) {
  let errors = {};

  if (validator.isEmpty(data.name)) {
    errors.email = "This field is required";
  }

  if (validator.isEmpty(data.type)) {
    errors.type = "This field is required";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "This field is required";
    console.log("description empty");
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
