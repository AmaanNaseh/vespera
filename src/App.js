import "./App.css";
import image from "./image/full.png"
import Header from "./components/header.jsx";
function App() {
  const myStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "450vh"
    
  };
  return <div style={myStyle}>
    <Header/>
  </div>
}

export default App;
