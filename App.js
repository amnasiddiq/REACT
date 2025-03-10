import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
// import About from "./components/About";
// import{
// BrowserRouter as Router,
// Route,
// Routes
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(()=>{
    setAlert(null);
    },1500);
  };

  const togglemode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "grey";
      showAlert('dark mode has been enable','success')
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('light mode has been enable','success')

    }
  };
  return (
    <>
    {/* <Router> */}
      <Navbar
        title="textutils"
        aboutText="About textutils"
        mode={mode}
        togglemode={togglemode}
      />
      <Alert alert={alert} />
      {/* <div className="container"><Routes> */}
  {/* <Route exact path="/about" element={<About />} /> */}
  {/* <Route exact path="/" element=*/<Textform showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} 
{/* </Routes> */}
        {/* <About/> */}
      {/* </div> */}
      {/* </Router> */}
    </>
  );
}

export default App;
