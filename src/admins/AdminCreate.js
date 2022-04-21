import React from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  required,
  SelectInput,
} from "react-admin";

const AdminCreate = (props) => {
  return (
    <Create {...props} title={"Create New Admin"} component="div">
      <SimpleForm>
        <TextInput validate={required()} label="Email" source="email" />
        <TextInput validate={required()} label="Password" source="password" />
        <TextInput
          validate={required()}
          label="Confirm Password"
          source="confirmPassword"
        />
        <SelectInput
          label="Status"
          source="status"
          choices={[{ name: "Active" }, { name: "Inactive" }]}
          optionValue="name"
        />
      </SimpleForm>
    </Create>
  );
};

export default AdminCreate;
