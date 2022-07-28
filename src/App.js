import "./App.css";
import NavBar from "./components/NavBar";
import {Routes} from "react-router-dom"
import routing from "./router/routing";

function App() {
  const routes = routing();

  return (
    <>
      <NavBar />
      <div className="container mt-5">
      <Routes>
        {routes}
      </Routes>
      </div>
    </>
  );
}

export default App;
