import TransactionList from "./TransactionList";
import TransactionShow from "./TransactionShow";
import PaidIcon from "@mui/icons-material/Paid";

const Icon = () => <PaidIcon style={{ color: "white" }} />;

export default {
  list: TransactionList,
  show: TransactionShow,
  icon: Icon,
};
