import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { twitsContext } from "../twitsContext";

const TwitsList = () => {
  const { getTwits, twits } = useContext(twitsContext);

  useEffect(() => {
    getTwits();
  }, []);

  const navigate = useNavigate();

  return (
    <>
      <h2>Twitters</h2>

      {twits.map(item => (
        <div style={{ marginBottom: "30px" }} key={item.id}>
          Author: {item.author}
          <br />
          {item.twit}
          <br />
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => navigate(`/details/${item.id}`)}>
            Details
          </button>
        </div>
      ))}
    </>
  );
};

export default TwitsList;
