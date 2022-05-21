import {
  List,
  Datagrid,
  TextField,
  TextInput,
  DateField,
  SelectInput,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";
import { useState, useEffect } from "react";
import AdminEdit from "./AdminEdit";
import authProvider from "../authProvider";

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
  const [userRole] = useState(authProvider.getIdentity());
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
        expand={takeBulkActions ? <AdminEdit /> : ""}
        classes={{
          headerCell: classes.headerCell,
        }}
      >
        <TextField label="ID" source="id" />
        <TextField label="Email" source="email" />
        <DateField showTime label="Current Sign In" source="current_signin" />
        <DateField showTime label="Created On" source="createdAt" />
        <TextField label="Status" source="status" />
      </Datagrid>
    </List>
  );
};
export default AdminList;
