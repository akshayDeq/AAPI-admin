import { List, Datagrid, TextField, TextInput, DateField } from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const TransactionFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="Transaction ID" source="transactionId" />,
  <TextInput label="Username" source="userName" />,
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
        <TextField label="Username" source="member.username" />
        <TextField label="Member Type" source="member.member_type" />
        <TextField label="Member Subtype" source="member.member_sub_type" />
        <TextField label="Amount" source="amount" />
      </Datagrid>
    </List>
  );
};
export default TransactionList;
