import React from "react";
import { Create, SimpleForm, TextInput, email } from "react-admin";

const validateAdminCreate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.firstName = "Required";
  }
  if (!values.password) {
    errors.password = "Required";
  }
  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  }

  if (values.password !== values.confirmPassword) {
    errors.confirmPassword = "Passwords must match";
  }
  return errors;
};

const AdminCreate = (props) => {
  return (
    <Create {...props} title={"Create New Admin"} component="div">
      <SimpleForm validate={validateAdminCreate}>
        <TextInput validate={email()} label="Email" source="email" />
        <TextInput type="password" label="Password" source="password" />
        <TextInput
          type="password"
          label="Confirm Password"
          source="confirmPassword"
        />
      </SimpleForm>
    </Create>
  );
};

export default AdminCreate;
