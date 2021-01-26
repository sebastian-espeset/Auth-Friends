import FriendsDisplay from "./components/FriendsDisplay";
import Login from "./components/Login";
import { axiosWithAuth } from "./utils/axiosWithAuth";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import PrivateRoute from './components/PrivateRoute';
//want to test the server, see if I can store the token correctly....Test passed, server working correctly

function App() {
  const handleSignOut=(e)=>{
    localStorage.clear();
  }
  return (
    <Router>
      <div>
        <h1>Friends with Authorization app</h1>
        <Link to="/login">Login</Link>
        <Link to="/login" onClick={handleSignOut}>Sign Out</Link>
        <Switch>
        <PrivateRoute exact path='/protected' component={FriendsDisplay}/>
        <Route path='/login' component={Login}/>
        <Route component={Login}/>
        <Link onClick={handleSignOut}>Logout</Link>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
