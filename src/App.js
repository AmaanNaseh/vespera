import "./App.css";
import image from "./image/full.png"
import Header from "./components/header.jsx";
import Event from "./components/event.jsx";
function App() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "750vh"
    
  };
  return <div style={myStyle}>
    <Event />
  </div>
}

export default App;
