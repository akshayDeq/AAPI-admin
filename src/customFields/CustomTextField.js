import { useRecordContext } from "react-admin";

export const CustomTextField = (props) => {
  const record = useRecordContext(props);
  return (
    <div
      style={{
        fontSize: "15px",
        margin: "20px",
      }}
    >
      <label style={{ color: "#223269", fontWeight: "bold" }}>
        {props.label}
      </label>
      <div style={{ paddingTop: "10px" }}>{record && record[props.source]}</div>
    </div>
  );
};
