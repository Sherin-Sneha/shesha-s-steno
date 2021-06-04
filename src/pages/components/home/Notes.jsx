import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Select, MenuItem } from "@material-ui/core";
export default function Notes(props) {
  const { notes } = props;
  const [filter, setFilter] = useState("All");
  if (!notes || notes.length === 0) {
    return <p className="mt-5">You haven't created any notes yet</p>;
  } else {
    return (
      <>
        <h4 className="container">Your Notes</h4>
        <div className="filter">
          <h6 className="container">Filters : </h6>
          <Select
            id="filters"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <MenuItem value={"All"}>All</MenuItem>
            <MenuItem value={"Draft"}>Drafts</MenuItem>
            <MenuItem value={"College"}>College Notes</MenuItem>
            <MenuItem value={"Msg"}>Saved Msgs</MenuItem>
            <MenuItem value={"Quote"}>Quotes</MenuItem>
            <MenuItem value={"Tech"}>Tech Insights</MenuItem>
          </Select>
        </div>
        <div className="container mt-4">
          <div className="card-columns">
            {notes.map((note) => {
              if (filter === "All") {
                return (
                  <Card key={note.id} className="card p-3">
                    <h6 className="m-0">{note.title}</h6>
                  </Card>
                );
              } else if (note.category === filter) {
                return (
                  <Card key={note.id} className="card p-3">
                    <h6 className="m-0">{note.title}</h6>
                  </Card>
                );
              }
            })}
          </div>
        </div>
      </>
    );
  }
}
