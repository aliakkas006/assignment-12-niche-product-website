import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CycleDetails from "./Pages/CycleDetails/CycleDetails";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";
import Header from "./Pages/Shared/Header/Header";
import LogIn from "./Pages/Shared/LogIn/LogIn";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/home">
            <Home />
          </Route>

          <Route path="/explore">
            <Explore />
          </Route>

          <Route path="/details/:id">
            <CycleDetails />
          </Route>

          <Route path="/login">
            <LogIn />
          </Route>

        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
