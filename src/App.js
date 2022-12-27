import { Route, Switch, Redirect } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuotes from "./pages/NewQuotes";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    //switch for load one page at a time
    <Switch>
      {/* this is for a direct is user visits / then he is redirected to /quotes page */}
      <Route path="/" exact>
        <Redirect to="/quotes" />
      </Route>
      {/* route is for route a component for a particular url */}
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteID" exact>
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuotes />
      </Route>
    </Switch>
  );
}

export default App;
