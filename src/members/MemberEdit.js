import * as React from "react";
import { SelectInput, Edit, SimpleForm } from "react-admin";

const MemberEdit = (props) => {
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

export default MemberEdit;
