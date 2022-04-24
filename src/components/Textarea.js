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
                <button disabled={text.length===0} onClick={onChangeLower} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1 my-1`}>Lowercase</button>
                <button disabled={text.length===0} onClick={onChangeUpper} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1 my-1`}>Uppercase</button>
                <button disabled={text.length===0} onClick={onClear} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1 my-1`}>Clear Text</button>
                <button disabled={text.length===0} onClick={onCopy} type="button" className={`btn btn-outline-${mode==="light"?"dark":"light"} mx-1 my-1`}>Copy Text</button>
            </div>
            <div className='container'>
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            </div>
        </>
    )
}

export default Textarea;