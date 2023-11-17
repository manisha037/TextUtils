import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick= () =>{
       // console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText) 
        props.showAlert("coverted to uppercase", "success");


    }
    const handleLoClick= () =>{
        
         let newText = text.toLowerCase();
         setText(newText) 
         props.showAlert("coverted to lowercase", "success");
    }         
    const handleClearText= () =>{
        
        let newText = '';
        setText(newText) 
        props.showAlert("cleared", "success");
    }
    const handleCopy =()=> {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("copied", "success");

    }
    const handleExtraSpaces= () => {
        let newText= text.split(/[ ]+/);
        setText (newText.join(""))
        props.showAlert("reoved extra spaces", "success");



    }
    const handleOnChange=(event) =>{
       // console.log("On change");
        setText(event.target.value);
    }
const[text, setText] = useState("enter text here 2")
 return(
    <>
    <div className= "container" style={{ color : props.mode=== 'dark' ?'white' : '#42743'}}>
    <h1 >{props.heading}</h1>
    <div className= "mb -3">
        <textarea className= "form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode=== 'dark' ? 'grey' : 'white',color : props.mode=== 'dark' ?'white' : '#42743'}}id= "myBox" rows= "8" ></textarea>
    </div>
    <button className = "btn btn-primary mx-1" onClick= {handleUpClick}> convert to Uppercase </button>
    <button className = "btn btn-primary mx-1" onClick= {handleLoClick}> convert to Lowercase </button>
    <button className = "btn btn-primary mx-1" onClick= {handleClearText}> Clear Text </button>
    <button className = "btn btn-primary mx-1" onClick= {handleCopy}> Copy Text </button>
    <button className = "btn btn-primary mx-1" onClick= {handleExtraSpaces}> Remove Extra Space </button>
    </div>
    <div className= " container my-2 "style={{color : props.mode=== 'dark' ?'white' : '#1e365a'}} >
    <h1 > your writing details</h1>
        <p> {text.split(" ").length} words and {text.length}characters</p>
        <p> { 0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p> {text}</p>
    </div>
    </>
 )
}
      
