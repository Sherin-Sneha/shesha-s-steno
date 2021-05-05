import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { Select, MenuItem } from "@material-ui/core";
import firebase from "firebase/app";
import "../../firebase";

export default function CreateNote() {
  function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }

  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  // const [state, setState] = useState({
  //     note: "",
  //   });

  //   const handleChange = (e) => {
  //     const { id, value } = e.target;
  //     setState((prevState) => ({
  //       ...prevState,
  //       [id]: value,
  //     }));
  //   };

  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const [category, setCategory] = useState("Tech");

  const handleSubmitClick = (e) => {
    e.preventDefault();
    var db = firebase.firestore();
    if (title !== "") {
      db.collection("notes")
        .add({
          title: title,
          note: note,
          category: category,
          created: firebase.firestore.FieldValue.serverTimestamp(),
        })
        .then((docRef) => {
          console.log("Document written with ID: ", docRef.id);
          setOpen(true);
          // setState((prevState) => ({
          //   ...prevState,
          //   note: "",
          // }));
        })
        .catch((error) => {
          console.error("Error adding document: ", error);
        });
    }
  };

  return (
    <>
      <div className="container col-md-8 col-xl-6 mt-4">
        <form action="#">
          <TextField
            id="note"
            label="Create a new note.."
            variant="filled"
            rows={4}
            className="shadow-sm"
            fullWidth
            multiline
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          
          <Select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <MenuItem value={"Draft"}>Draft</MenuItem>
            <MenuItem value={"College"}>College Notes</MenuItem>
            <MenuItem value={"Msg"}>Saved Msgs</MenuItem>
            <MenuItem value={"Quote"}>Quotes</MenuItem>
            <MenuItem value={"Tech"}>Tech Insight</MenuItem>
          </Select>
          <Button
          variant="contained"
          color="primary"
          className="d-flex ml-auto mt-3 text-capitalize font-weight-bold"
          onClick={handleSubmitClick}
        >
          Create
        </Button>
        </form>
        
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Note created successfully!
        </Alert>
      </Snackbar>
    </>
  );
}
