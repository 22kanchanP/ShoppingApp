// import FrontPage from "./FrontPage";

import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";


function App() {
  return (
    <div className="App">

      {/* <FrontPage></FrontPage> */}
      <BrowserRouter>
      <Navbar></Navbar>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
