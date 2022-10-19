import React, {useState} from "react";

export default function Textform(props) {
  const handleUpclick=()=>{ 
    let newtext = text.toUpperCase();
    setText(newtext);
    console.log("uppercase")
    props.showAlert("Successfully changed to uppercase","success");
  }
  const handleLoclick=()=>{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showAlert("Successfully changed to lowercase","success");
  }
const handleOnCopy=()=>{
  let text = document.getElementById('myBox')
  text.select();
 

  props.showAlert("Successfully copied","success");
}
const handleOnchange=(event)=>{
  console.log("on change")
  setText(event.target.value);
}
const textCount=(count)=>{
    if(count===1){
      return 0;
    }
    else {
      return count-1;
    }
  }

  const [text, setText] = useState("Enter text here");
  return (
    <>
      <div className="container" style ={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>;
        <div className="mb-3 ">
          <textarea
            className="form-control"
            style={{
              backgroundColor: props.mode === "dark" ? "#312c58" : "white",
              color: props.mode === "dark" ? "white" : "black"
            }}
            value={text}
            onChange={handleOnchange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpclick}>
          clicktoUppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoclick}>
          clicktoLowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleOnCopy}>Click to copy</button>
      </div>
      <div  className="container" style ={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>this is a summory</h1>
        <p>
          {textCount(text.split(" ").length)} word and {text.length} character
        </p>
        <p>{0.008 * text.length}minuts to read</p>
        <p>{text}</p>
      </div>
      </>
     );
    
  }


