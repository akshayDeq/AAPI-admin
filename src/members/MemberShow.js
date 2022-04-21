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
          <CustomTextField label="Email" source="email" />
          <CustomTextField label="Member Type" source="memberType" />
          <CustomTextField label="Member Subtype" source="memberSubType" />
          <CustomTextField label="Primary Degree" source="primaryDegree" />
          <CustomTextField label="Primary Specialty" source="primarySpecilty" />
        </Tab>

        <Tab label="Address Details">
          <ArrayField label="" fullWidth source="addressDetails">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="addressType" />
              <TextField source="city" />
              <TextField source="state" />
              <TextField source="zipCode" />
              <TextField source="country" />
              <BooleanField source="isPrimary" />
            </Datagrid>
          </ArrayField>
        </Tab>

        <Tab label="Phone Details">
          <ArrayField label="" fullWidth source="phoneDetails">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="phoneType" />
              <TextField source="phoneNumber" />
              <TextField source="extension" />
            </Datagrid>
          </ArrayField>
        </Tab>

        <Tab label="Education Details">
          <ArrayField label="" fullWidth source="educationDetails">
            <Datagrid classes={{ headerCell: classes.headerCell }}>
              <TextField source="degree" />
              <TextField source="medicalSchoolName" />
              <TextField source="startYear" />
              <TextField source="endYear" />
            </Datagrid>
          </ArrayField>
        </Tab>
      </TabbedShowLayout>
    </ShowView>
  );
};

export default MemberShow;
