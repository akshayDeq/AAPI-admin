import AdminEdit from "./AdminEdit";
import AdminList from "./AdminList";
import AdminCreate from "./AdminCreate";
import AdminShow from "./AdminShow.js";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

const Icon = () => <AdminPanelSettingsIcon style={{ color: "white" }} />;

export default {
  list: AdminList,
  create: AdminCreate,
  edit: AdminEdit,
  show: AdminShow,
  icon: Icon,
};
