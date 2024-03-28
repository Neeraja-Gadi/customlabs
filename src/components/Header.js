import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const headerStyle = {
    "display": "flex",
    "padding": "10px" ,
    "border" : "5px",
    "background-color": "#008080",
    "color" : "white",
    "font-size": "12px",
    "font-weight": 600,
     "alignItems": "center",
    
   
    
}

const Header = (props) => {
  return (

    <div className= "header" style={headerStyle}>

         <MdKeyboardArrowLeft size={38}/>            

        {<h1> {props.textDisplay}</h1>}

    </div>
  )
}

export default Header