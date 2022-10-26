import React, { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { twitsContext } from "../twitsContext";

const Details = () => {
  const { getOneTwit, oneTwit, deleteTwit, twits } = useContext(twitsContext);

  const params = useParams();

  useEffect(() => {
    getOneTwit(params.id);
  }, []);

  return oneTwit ? (
    <div>
      {twits.map(item => (
        <div key={item.id}>
          Author: {item.author}
          <br />
          {item.twit}
          <br />
          <button onClick={() => deleteTwit(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  ) : (
    <h2>Loading ...</h2>
  );
};

export default Details;
