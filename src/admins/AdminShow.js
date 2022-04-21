import * as React from "react";
import { ShowView, useShowController, SimpleShowLayout } from "react-admin";
import { CustomTextField } from "../customFields/CustomTextField";

const AdminShow = (props) => {
  const controllerProps = useShowController(props);
  return (
    <ShowView {...controllerProps}>
      <SimpleShowLayout>
        <CustomTextField label="Email" source="email" />
        <CustomTextField label="Username" source="username" />
        <CustomTextField label="Created On" source="createdAt" />
        <CustomTextField label="Status" source="status" />
      </SimpleShowLayout>
    </ShowView>
  );
};

export default AdminShow;
