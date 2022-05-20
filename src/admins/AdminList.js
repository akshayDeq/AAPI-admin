import {
  List,
  Datagrid,
  TextField,
  EditButton,
  TextInput,
  ShowButton,
  DateField,
  SelectInput,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";
import { useState, useEffect } from "react";

const AdminFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput autoComplete="off" label="ID" source="id" />,
  <TextInput autoComplete="off" label="Email" source="email" />,
  <SelectInput
    label="Status"
    source="status"
    choices={[{ name: "Active" }, { name: "Inactive" }]}
    optionValue="name"
  />,
];

const AdminList = (props) => {
  const classes = globalStyles();
  const [userRole] = useState(localStorage.getItem("role"));
  const [takeBulkActions, setTakeBulkActions] = useState(false);

  useEffect(() => {
    if (userRole === "super-admin") {
      setTakeBulkActions(true);
    } else {
      setTakeBulkActions(false);
    }
  }, [userRole]);

  return (
    <List
      className={classes.tableMargin}
      {...props}
      filters={AdminFilter}
      bulkActionButtons={takeBulkActions}
    >
      <Datagrid
        classes={{
          headerCell: classes.headerCell,
        }}
      >
        <TextField label="ID" source="id" />
        <TextField label="Email" source="email" />
        <TextField label="Current Sign In" source="current_signin" />
        {/* <TextField label="Sign In Count" source="signin_count" /> */}
        <DateField label="Created On" format="dd/MM/yyyy" source="createdAt" />
        <TextField label="Status" source="status" />
        {userRole === "super-admin" ? (
          <EditButton
            width="10%"
            label=""
            className={classes.button}
            basePath="/admin"
          />
        ) : (
          <></>
        )}
        {userRole === "super-admin" ? (
          <ShowButton
            width="5%"
            label=""
            className={classes.button}
            basePath="/admin"
          />
        ) : (
          <></>
        )}
      </Datagrid>
    </List>
  );
};
export default AdminList;
