import { List, Datagrid, TextField, TextInput, ShowButton } from "react-admin";
import { globalStyles } from "../Style/globalStyles";

const TransactionFilter = [
  <TextInput label="Search" source="q" alwaysOn />,
  <TextInput label="transaction Id" source="transactionId" />,
  <TextInput label="Member Name" source="memberName" />,
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
        <TextField label="Member Name" source="memberName" />
        <TextField label="Member Type" source="memberType" />
        <TextField label="Member Subtype" source="memberSubType" />
        <TextField label="Amount($)" source="amount" />
        <ShowButton
          label=""
          className={classes.button}
          basePath="/transactions"
        />
      </Datagrid>
    </List>
  );
};
export default TransactionList;
