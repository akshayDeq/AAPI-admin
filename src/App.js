import React from "react";
import { Admin, Resource, AppBar, Layout, Sidebar, Login } from "react-admin";
import members from "./members";
import admins from "./admins";
import transactions from "./transactions";
import dataProvider from "./dataProvider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { green } from "@mui/material/colors";
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

const useSidebarStyles = makeStyles((theme) => ({
  drawerPaper: {
    root: {
      color: "white",
    },
    backgroundColor: "#223269",
    position: "fixed",
    top: "5%",
    height: "95%",
    zIndex: "100",
    borderRadius: "0 1rem 1rem 0",
  },
}));

const MySidebar = (props) => {
  const classes = useSidebarStyles();
  return <Sidebar classes={classes} {...props} />;
};

const MyLayout = (props) => (
  <Layout {...props} appBar={MyAppBar} sidebar={MySidebar} />
);

const theme = {
  overrides: {
    RaCreate: {
      root: {
        margin: "50px",
      },
    },
    RaList: {
      root: {
        margin: "50px",
      },
    },
    RaEdit: {
      root: {
        margin: "50px",
      },
    },
    RaShow: {
      root: {
        margin: "50px",
      },
    },
    sidebar: {
      width: 300, // The default value is 240
      closedWidth: 70, // The default value is 55
    },
    RaMenuItemLink: {
      root: {
        color: "rgba(255, 255, 255, 1)",
        borderRadius: "0 0.3rem 0 ",
        marginTop: "4px",
        "&:hover": {
          backgroundColor: green[400],
          color: "rgba(255, 255, 255, 1)",
        },
      },
      active: {
        backgroundColor: green[500],
        color: "rgba(255, 255, 255, 1)",
      },
    },
  },
};

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
      theme={theme}
      dataProvider={dataProvider}
    >
      <Resource name="member" {...members} />
      <Resource name="admin" {...admins} />
      <Resource name="transaction" {...transactions} />
    </Admin>
  );
}

export default App;
