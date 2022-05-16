import {
  List,
  Datagrid,
  TextField,
  TextInput,
  ShowButton,
  EditButton,
  SelectInput,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const MemberFilter = [
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
      >
        <TextField label="ID" source="id" />
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
