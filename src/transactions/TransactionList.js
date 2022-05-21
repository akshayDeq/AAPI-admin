import { List, Datagrid, TextField, TextInput, DateField } from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const TransactionFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Transaction ID" source="transactionId" />,
  <TextInput label="First Name" source="name" />,
  <TextInput type={"number"} label="Amount" source="amount" />,
];

const TransactionList = (props) => {
  const classes = globalStyles();
  return (
    <List
      className={classes.tableMargin}
      {...props}
      bulkActionButtons={false}
      filters={TransactionFilter}
    >
      <Datagrid
        source
        classes={{
          headerCell: classes.headerCell,
        }}
      >
        <TextField label="Transaction ID" source="transactionId" />
        <DateField showTime label="Transaction Date" source="transactionDate" />
        <TextField label="First Name" source="member.first_name" />
        <TextField label="Last Name" source="member.last_name" />
        <TextField label="Member Type" source="member.member_type" />
        <TextField label="Member Subtype" source="member.member_sub_type" />
        <TextField label="Amount" source="amount" />
      </Datagrid>
    </List>
  );
};
export default TransactionList;
