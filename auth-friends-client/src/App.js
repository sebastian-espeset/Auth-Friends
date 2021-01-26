import Login from './components/Login';
import { axiosWithAuth } from './utils/axiosWithAuth';


//want to test the server, see if I can store the token correctly....Test passed, server working correctly




function App() {
  return (
    <div >
      <h1>Friends with Authorization app</h1>
      <Login/>
    </div>
  );
}

export default App;
