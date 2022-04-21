import {
  List,
  Datagrid,
  TextField,
  EditButton,
  TextInput,
  ShowButton,
  DateField,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const AdminFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Id" source="id" />,
  <TextInput label="Email" source="email" />,
  <TextInput label="Status" source="status" defaultValue="active" />,
];

const AdminList = (props) => {
  const classes = globalStyles();

  return (
    <List className={classes.tableMargin} {...props} filters={AdminFilter}>
      <Datagrid
        classes={{
          headerCell: classes.headerCell,
        }}
        rowClick="show"
      >
        <TextField label="Id" source="id" />
        <TextField label="Email" source="email" />
        <TextField label="Current Sign In" source="currentSignIn" />
        <TextField label="Sign In Count" source="signInCount" />
        <DateField label="Created On" format="dd/MM/yyyy" source="createdAt" />
        <TextField label="Status" source="status" />
        <EditButton label="" className={classes.button} basePath="/admins" />
        <ShowButton label="" className={classes.button} basePath="/admins" />
      </Datagrid>
    </List>
  );
};
export default AdminList;
