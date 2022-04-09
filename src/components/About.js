import React,{useState} from 'react';

const About=({mode})=>{
    return(
        <div style={{backgroundColor:`${mode==="light"?"white":"#213549"}`,color:`${mode==="light"?"black":"white"}`}}>
            This is a mini project namely textmanipulator used to edit text. You can capitalize, convert to Uppercase, Lowercase, copy text, clear text with the help of this utility.
        </div>
    )
}

export default About;