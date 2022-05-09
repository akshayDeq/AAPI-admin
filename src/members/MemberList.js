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
        <TextField label="Email" source="primary_email_address" />
        <TextField label="Created On" source="createdAt" />
        <TextField label="Status" source="status" />
        <EditButton label="" className={classes.button} basePath="/member" />
        <ShowButton label="" className={classes.button} basePath="/member" />
      </Datagrid>
    </List>
  );
};
export default MemberList;
