import {
  List,
  Datagrid,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const MemberFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Id" source="id" />,
  <TextInput label="Email" source="email" />,
  <TextInput label="Status" source="status" defaultValue="active" />,
];

const MemberList = (props) => {
  const classes = globalStyles();

  return (
    <List
      className={classes.tableMargin}
      {...props}
      bulkActionButtons={false}
      filters={MemberFilter}
    >
      <Datagrid
        classes={{
          headerCell: classes.headerCell,
        }}
        rowClick="show"
      >
        <TextField label="Id" source="id" />
        <TextField label="Email" source="email" />
        <TextField label="Username" source="username" />
        <TextField label="Current Sign In" source="currentSignIn" />
        <TextField label="Sign In Count" source="signInCount" />
        <TextField label="Created On" source="createdAt" />
        <TextField label="Status" source="status" />
        <EditButton label="" className={classes.button} basePath="/members" />
        <ShowButton label="" className={classes.button} basePath="/members" />
      </Datagrid>
    </List>
  );
};
export default MemberList;
