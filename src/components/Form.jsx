import React from "react";
import { withFormik } from "formik";
import {
  Input,
  InputAdornment,
  TextareaAutosize,
  Button,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = props;

  console.log(touched);

  const isErrors = !!Object.keys(errors).length;

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column" }}
    >
      <Input
        type="name"
        onChange={handleChange}
        value={values.name}
        name="name"
        onBlur={handleBlur}
        placeholder="name... "
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["far", "user"]} />
          </InputAdornment>
        }
      />
      <Input
        type="email"
        onChange={handleChange}
        value={values.email}
        name="email"
        onBlur={handleBlur}
        placeholder="email... "
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["fas", "envelope"]} />
          </InputAdornment>
        }
      />
      {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      <Input
        type="url"
        onChange={handleChange}
        value={values.url}
        onBlur={handleBlur}
        name="url"
        placeholder="website... "
        startAdornment={
          <InputAdornment position="start">
            <FontAwesomeIcon icon={["fas", "globe"]} />
          </InputAdornment>
        }
      />
      <TextareaAutosize
        id="input-with-icon-textfield"
        onBlur={handleBlur}
        name="message"
        onChange={handleChange}
        value={values.message}
        aria-label="minimum height"
        rowsMin={7}
        placeholder="message... "
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button onClick={handleSubmit} disabled={isErrors && touched.email}>
        {" "}
        Send message{" "}
      </Button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: (props) => {
    return {
      name: "",
      email: props.email,
      url: "",
      message: "",
    };
  },
  handleSubmit: (values, { setSubmitting }) => {
    console.log(values);
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  validate: (values, props) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  mapPropsToErrors: (props) => {
    const errors = {};
    if (!props.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(props.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  displayName: "BasicForm",
})(Form);

export default MyEnhancedForm;
