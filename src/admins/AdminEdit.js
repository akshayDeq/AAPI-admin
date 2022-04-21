import * as React from "react";
import {
  TextInput,
  Edit,
  SimpleForm,
  SelectInput,
  required,
} from "react-admin";

const AdminEdit = (props) => {
  return (
    <Edit {...props} component="div">
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
    </Edit>
  );
};

export default AdminEdit;
