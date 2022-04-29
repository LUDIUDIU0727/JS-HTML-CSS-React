import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/quotes">

        </Route>
        <Route path="/quotes/:quoteId">

        </Route>
        <Route path="/new-quote">

        </Route>
      </Switch>

    </div>
  );
}

export default App;
