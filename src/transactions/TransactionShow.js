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
        <CustomTextField label="Member Name" source="memberName" />
        <CustomTextField label="Member Type" source="memberType" />
        <CustomTextField label="Member Subtype" source="memberSubType" />
        <CustomTextField label="Amount" source="amount" />
      </SimpleShowLayout>
    </ShowView>
  );
};

export default TransactionShow;
