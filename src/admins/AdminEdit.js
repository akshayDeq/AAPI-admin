import * as React from "react";
import { Edit, SimpleForm, SelectInput } from "react-admin";

const AdminEdit = (props) => {
  return (
    <Edit {...props} component="div">
      <SimpleForm>
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
