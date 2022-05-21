import * as React from "react";
import { Edit, SimpleForm, SelectInput } from "react-admin";
import { CustomTextField } from "../customFields/CustomTextField";
import CustomEditToolbar from "../customFields/CustomEditToolbar";

const AdminEdit = (props) => {
  return (
    <Edit {...props} component="div" style={{ padding: "0rem 8rem 1rem" }}>
      <SimpleForm toolbar={<CustomEditToolbar />}>
        <CustomTextField label="Toggle The Admin Status" margin="0px" />
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
