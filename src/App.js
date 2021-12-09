import "./router.css";
import Home from "./home";
import About from "./about"
import Contact from "./contact";
import Login from "./login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
    return (
      <>
      <Router>
          <Switch>
              <Route  exact path="/">
                  <Home/>
              </Route>

              <Route  exact path="/About">
                  <About/>
              </Route>

              <Route exact path="/Contact">
                  <Contact/>
              </Route>

               

              <Route exact path="/Login">
                  <Login/>
              </Route>
          </Switch>
      </Router>
      </>  
      );
}
export default App;