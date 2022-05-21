import { SaveButton, Toolbar } from "react-admin";

const UserEditToolbar = (props) => (
  <Toolbar {...props} style={{ backgroundColor: props.bcg || "#FFFFFF" }}>
    <SaveButton />
  </Toolbar>
);

export default UserEditToolbar;
