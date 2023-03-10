import { makeStyles } from "@mui/styles";
export default makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      padding: "2px 0px",
    },
  },
  paper: {
    //padding: theme.spacing(2),
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  fileInput: {
    width: "97%",
    margin: "10px 0",
  },
  buttonSubmit: {
    marginBottom: "10px !important",
  },
}));
