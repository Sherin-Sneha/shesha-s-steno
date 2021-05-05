import React, { useState, useEffect } from "react";
import firebase from "firebase/app";
import "../../firebase";

import Notes from "./Notes";

export default function GetNotes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    var db = firebase.firestore();
    const _notes = [];
    db.collection("notes")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          const docData = {
            id: doc.id,
            created: doc.data().created,
            note: doc.data().note,
            title: doc.data().title,
            category: doc.data().category,
          };
          _notes.push(docData);
        });
        setNotes(_notes);
      });
  }, [notes]);
  return (
    <div className="container mt-5">
      <Notes notes={notes} />
    </div>
  );
}
