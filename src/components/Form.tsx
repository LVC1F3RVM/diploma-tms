import React from "react";
import { withFormik, FormikProps } from "formik";
import { Input, InputAdornment, TextField, Button } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface FormProps {
  name: string;
  email: string;
  url: string;
  password?: string;
  message?: string;
}

const Form = ({
  values,
  touched,
  errors,
  handleChange,
  handleSubmit,
  handleBlur,
}: FormikProps<FormProps>) => {
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
      <TextField
        id="input-with-icon-textfield"
        onBlur={handleBlur}
        name="message"
        onChange={handleChange}
        value={values.message}
        aria-label="minimum height"
        minRows={7}
        placeholder="message... "
        InputProps={{
          //TODO: check what's wrong
          startAdornment: (
            <InputAdornment position="start">
              <CreateIcon />
            </InputAdornment>
          ),
        }}
      />
      <Button
        onClick={(v) =>
          handleSubmit(
            (v as unknown) as React.FormEvent<HTMLFormElement> | undefined
          )
        }
        disabled={isErrors && touched.email}
      >
        {" "}
        Send message{" "}
      </Button>
    </form>
  );
};

const MyEnhancedForm = withFormik({
  mapPropsToValues: ({ email }: FormProps) => {
    return {
      name: "",
      email: email,
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
  validate: ({ email }: FormProps) => {
    const errors: Record<string, string> = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  mapPropsToErrors: ({ email }: FormProps) => {
    const errors: Record<string, string> = {};
    if (!email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  },
  displayName: "BasicForm",
})(Form);

export default MyEnhancedForm;
