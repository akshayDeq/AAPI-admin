import React from "react";
import { Admin, Resource, AppBar, Layout, Login } from "react-admin";
import members from "./members";
import admins from "./admins";
import transactions from "./transactions";
import dataProvider from "./dataProvider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import authProvider from "./authProvider";

const useStyles = makeStyles({
  title: {
    flex: 1,
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden",
  },
  bcg: {
    backgroundColor: "#223269",
    borderRadius: "0 0 1rem 0",
  },
  spacer: {
    flex: 1,
  },
});

const MyAppBar = (props) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.bcg} {...props}>
      <Typography
        variant="h6"
        className={classes.title}
        id="react-admin-title"
      />
      <span className={classes.spacer} />
      {localStorage.getItem("Radmin-email")}
    </AppBar>
  );
};

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} />;

const LoginPage = (props) => {
  const classes = useStyles();
  return <Login classes={classes} backgroundImage="" {...props} />;
};

function App() {
  return (
    <Admin
      layout={MyLayout}
      loginPage={LoginPage}
      authProvider={authProvider}
      dataProvider={dataProvider}
    >
      <Resource name="member" {...members} />
      <Resource name="admin" {...admins} />
      <Resource name="transaction" {...transactions} />
    </Admin>
  );
}

export default App;
