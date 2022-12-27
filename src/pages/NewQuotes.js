import React from "react";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom";

const NewQuotes = () => {
  return (
    <>
      <div>NewQuotes</div>
      <Route to="/quotes/:quoteID/comments">
        <Comments />
      </Route>
    </>
  );
};

export default NewQuotes;
