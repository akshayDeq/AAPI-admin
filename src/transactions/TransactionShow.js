import * as React from "react";
import { ShowView, useShowController, SimpleShowLayout } from "react-admin";
import { CustomTextField } from "../customFields/CustomTextField";

const TransactionShow = (props) => {
  const controllerProps = useShowController(props);
  return (
    <ShowView {...controllerProps}>
      <SimpleShowLayout>
        <CustomTextField label="Transaction ID" source="transactionId" />
        <CustomTextField label="Transaction Date" source="transactionDate" />
        <CustomTextField label="First Name" source="first_name" />
        <CustomTextField label="Last Name" source="last_name" />
        <CustomTextField label="Member Type" source="member_type" />
        <CustomTextField label="Member Subtype" source="member_sub_type" />
        <CustomTextField label="Amount($)" source="amount" />
      </SimpleShowLayout>
    </ShowView>
  );
};

export default TransactionShow;
