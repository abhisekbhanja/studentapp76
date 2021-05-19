import Header from "./components/Header";
import Searchpage from "./components/Searchpage";
import Register from "./components/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Searchpage />
          </Route>
          <Route path="/addmarks" component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
