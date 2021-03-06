import MemberEdit from "./MemberEdit";
import MemberList from "./MemberList";
import MemberShow from "./MemberShow";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

const Icon = () => <PeopleAltIcon style={{ color: "white" }} />;

export default {
  list: MemberList,
  edit: MemberEdit,
  show: MemberShow,
  icon: Icon,
};
