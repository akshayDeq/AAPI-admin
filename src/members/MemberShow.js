import * as React from "react";
import {
  ArrayField,
  Datagrid,
  ShowView,
  BooleanField,
  TextField,
  useShowController,
  TabbedShowLayout,
  Tab,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";
import { CustomTextField } from "../customFields/CustomTextField";

const MemberShow = (props) => {
  const classes = globalStyles();

  const controllerProps = useShowController(props);
  return (
    <ShowView {...controllerProps}>
      <TabbedShowLayout>
        <Tab label="Personal Information">
          <CustomTextField label="ID" source="id" />
          <CustomTextField label="Username" source="username" />
          <CustomTextField label="Email" source="primary_email_address" />
          <CustomTextField label="Member Type" source="member_type" />
          <CustomTextField label="Member Subtype" source="member_sub_type" />
          <CustomTextField label="Primary Degree" source="primary_degree" />
          <CustomTextField
            label="Primary Specialty"
            source="primary_specialty"
          />
        </Tab>

        <Tab label="Address Details">
          <ArrayField label="" fullwidth source="address">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="address_type" />
              <TextField source="city" />
              <TextField source="state" />
              <TextField source="zip_code" />
              <TextField source="country" />
              <BooleanField source="is_primary_address" />
            </Datagrid>
          </ArrayField>
        </Tab>

        <Tab label="Phone Details">
          <ArrayField label="" fullwidth source="phone">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="phone_type" />
              <TextField source="phone_number" />
              <TextField source="extension" />
            </Datagrid>
          </ArrayField>
        </Tab>

        <Tab label="Education Details">
          <ArrayField label="" fullwidth source="education">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="degree" />
              <TextField source="medical_school_name" />
              <TextField source="medical_school_start_year" />
              <TextField source="medical_school_end_year" />
            </Datagrid>
          </ArrayField>
        </Tab>
      </TabbedShowLayout>
    </ShowView>
  );
};

export default MemberShow;
