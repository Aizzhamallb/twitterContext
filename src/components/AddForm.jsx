import React, { useContext, useState } from "react";
import { twitsContext } from "../twitsContext";

const AddForm = () => {
  const { addTwit } = useContext(twitsContext);

  const [author, setAuthor] = useState("");
  const [twit, setTwit] = useState("");

  function createTwit() {
    if (!author || !twit) {
      alert("Some inputs are empy");
      return;
    }
    let newTwit = {
      author,
      twit,
    };
    addTwit(newTwit);

    setAuthor("");
    setTwit("");
  }

  return (
    <div>
      <h2>Add Twit</h2>

      <input
        type="text"
        placeholder="Enter Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Twit"
        value={twit}
        onChange={e => setTwit(e.target.value)}
      />

      <button onClick={createTwit}>Add</button>
    </div>
  );
};

export default AddForm;
