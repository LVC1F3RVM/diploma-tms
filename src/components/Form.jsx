import React from "react";
import { withFormik } from "formik";

const MyForm = (props) => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <form onSubmit={handleSubmit}>
      <input
        type={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
        name="name"
      />
      {errors.email && touched.email && <div id="feedback">{errors.email}</div>}
      <button type="submit">Submit</button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: ({ count }) => ({ [count]: count }),

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  validate: (values, props) => {
    const errors = {};

    if (!values.email) {
      // errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  },
  isInitialValid: false,
  displayName: "BasicForm",
})(MyForm);

export default MyEnhancedForm;
