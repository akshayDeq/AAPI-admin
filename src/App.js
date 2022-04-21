import React from "react";
import { Admin, Resource, AppBar, Layout, Sidebar } from "react-admin";
import members from "./members";
import admins from "./admins";
import transactions from "./transactions";
import dataProvider from "./dataProvider";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { green } from "@mui/material/colors";

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
    </AppBar>
  );
};

const useSidebarStyles = makeStyles((theme) => ({
  drawerPaper: {
    root: {
      color: "white",
    },
    backgroundColor: "#223269",
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
    RaMenuItemLink: {
      root: {
        color: "rgba(255, 255, 255, 1)",
        borderRadius: "0 0.3rem 0 ",
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

function App() {
  return (
    <Admin layout={MyLayout} theme={theme} dataProvider={dataProvider}>
      <Resource name="members" {...members} />
      <Resource name="admins" {...admins} />
      <Resource name="transactions" {...transactions} />
    </Admin>
  );
}

export default App;
