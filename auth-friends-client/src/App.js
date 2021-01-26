import { axiosWithAuth } from './utils/axiosWithAuth';


//want to test the server, see if I can store the token correctly....




function App() {
 axiosWithAuth().get("http://localhost:5000/api/friends")
  .then((res)=>{
    console.log(res)
  })
  .catch((err)=>{
    console.log(err)
  })
  return (
    <div >
      <h1>Hello world</h1>
    </div>
  );
}

export default App;
