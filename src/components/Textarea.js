import React,{useState} from 'react';

const Textarea=({mode})=>{
    const [text,setText]=useState("");
    const onChange=(event)=>{
        setText(event.target.value);
    }

    const onChangeLower=()=>{
        let newText= text.toLowerCase();
        setText(newText);
    }
    const onChangeUpper=()=>{
        let newText= text.toUpperCase();
        setText(newText);
    }
    const onClear=()=>{
        setText("");
    }
    const onCopy=()=>{
        let textarea=document.getElementById("textarea");
        navigator.clipboard.writeText(textarea.value);
    }
    return(
        <>
            <div className='container my-3'>        
                <h3><label htmlFor="textarea">Enter Text Here</label></h3>
                <textarea onChange={onChange} style={{backgroundColor:`${mode==="light"?"white":"#213549"}`,color:`${mode==="light"?"black":"white"}`}} value={text} className="form-control" id="textarea" rows="15"></textarea>
            </div>
            <div className='container'>
                <button onClick={onChangeLower} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1`}>Lowercase</button>
                <button onClick={onChangeUpper} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1`}>Uppercase</button>
                <button onClick={onClear} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1`}>Clear Text</button>
                <button onClick={onCopy} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1`}>Copy Text</button>
            </div>
        </>
    )
}

export default Textarea;