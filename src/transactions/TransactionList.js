import { List, Datagrid, TextField, TextInput, ShowButton } from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const TransactionFilter = [
  <TextInput label="transaction Id" source="transactionId" />,
  <TextInput label="First Name" source="name" />,
  <TextInput label="Amount" source="amount" />,
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
        rowClick="show"
        source
        classes={{
          headerCell: classes.headerCell,
        }}
      >
        <TextField label="Transaction ID" source="transactionId" />
        <TextField label="Transaction Date" source="transactionDate" />
        <TextField label="First Name" source="member.first_name" />
        <TextField label="Last Name" source="member.last_name" />
        <TextField label="Member Type" source="member.member_type" />
        <TextField label="Member Subtype" source="member.member_sub_type" />
        <TextField label="Amount" source="amount" />
        <ShowButton
          label=""
          className={classes.button}
          basePath="/transaction"
        />
      </Datagrid>
    </List>
  );
};
export default TransactionList;
