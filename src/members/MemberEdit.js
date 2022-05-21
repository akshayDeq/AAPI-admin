import * as React from "react";
import { SelectInput, Edit, SimpleForm } from "react-admin";
import { CustomTextField } from "../customFields/CustomTextField";
import CustomEditToolbar from "../customFields/CustomEditToolbar";

const MemberEdit = (props) => {
  return (
    <Edit {...props} style={{ padding: "0rem 8rem 1rem" }} component="div">
      <SimpleForm toolbar={<CustomEditToolbar />}>
        <CustomTextField label="Toggle The Member Status" margin="0px" />
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
