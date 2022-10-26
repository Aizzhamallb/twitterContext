import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { twitsContext } from "../twitsContext";

const EditForm = () => {
  const { getOneTwit, oneTwit, updateTwit } = useContext(twitsContext);
  const { id } = useParams();
  const navigate = useNavigate();

  const [author, setAuthor] = useState("");
  const [twit, setTwit] = useState("");

  useEffect(() => {
    getOneTwit(id);
  }, []);

  useEffect(() => {
    if (oneTwit) {
      setAuthor(oneTwit.author);
      setTwit(oneTwit.twit);
    }
  }, [oneTwit]);

  function saveChanges() {
    if (!author || !twit) {
      alert("Some inputs are empty");
      return;
    }
    let editedTwit = {
      author,
      twit,
    };

    updateTwit(id, editedTwit);
    navigate("/twits");
  }

  return oneTwit ? (
    <div>
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Twit"
        value={twit}
        onChange={e => setTwit(e.target.value)}
      />

      <button onClick={saveChanges}>Save Changes</button>
    </div>
  ) : (
    <h2>Loading...</h2>
  );
};

export default EditForm;
