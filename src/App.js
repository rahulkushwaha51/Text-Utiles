import React, { useState } from "react";
import "./App.css";
import Navbar from "./componant/Navbar";
// import Textform from "./componant/Textform";
import Alert from "./componant/Alert";
import Resume from "./componant/Resume";
// import About from "./componant/About";
function App() {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("light mode has been  enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#312c58";
      showAlert("Dark mode has been  enabled", "success");
    }
  };
  return (
    <>
      <Navbar
        title={"Text-Utiles"}
        about={"about-Text"}
        mode={mode}
        toggleMode={toggleMode}
      />
      <Alert alert={alert} />
      {/* <Textform mode={mode} showAlert={showAlert} /> */}
      {/* <About/> */}
      <Resume/>
    </>
  );
}
export default App;
