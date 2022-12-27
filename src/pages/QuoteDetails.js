import React from "react";
import { useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import { Route } from "react-router-dom";

const QuoteDetails = () => {
  //this will give :part with custom url
  const prams = useParams();
  console.log(prams);
  return (
    <>
      <div>QuoteDetails</div>
      <Route to={`/quotes/${prams.quoteId}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetails;
