import {
  List,
  Datagrid,
  TextField,
  TextInput,
  ShowButton,
  SelectInput,
  DateField,
} from "react-admin";
import { globalStyles } from "../Style/globalStyles";
import MemberEdit from "./MemberEdit";

const MemberFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput autoComplete="off" label="ID" source="id" />,
  <TextInput autoComplete="off" label="Email" source="email" />,
  <TextInput label="Username" source="userName" />,
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
      bulkActionButtons={true}
      filters={MemberFilter}
    >
      <Datagrid
        expand={<MemberEdit />}
        classes={{
          headerCell: classes.headerCell,
        }}
      >
        <TextField label="ID" source="id" />
        <TextField label="Email" source="primary_email_address" />
        <TextField label="Username" source="username" />
        <DateField showTime label="Created On" source="createdAt" />
        <TextField label="Status" source="status" />
        <ShowButton label="" className={classes.button} basePath="/member" />
      </Datagrid>
    </List>
  );
};
export default MemberList;
