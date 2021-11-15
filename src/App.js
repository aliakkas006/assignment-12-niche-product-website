import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider";
import CycleDetails from "./Pages/CycleDetails/CycleDetails";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import LogIn from "./Pages/Shared/LogIn/LogIn";
import Register from "./Pages/Shared/LogIn/Register";
function App() {
  return (
    <>
      <AuthProvider>
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

            <Route path="/register">
              <Register />
            </Route>

            <Route path="*">
              <LogIn />
            </Route>

          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
