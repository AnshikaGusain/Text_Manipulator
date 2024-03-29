import React from 'react';
// import {Link} from 'react-router-dom';
const Navbar=({changeMode,mode})=>{
    return(
        <>
            <nav className={`navbar navbar-expand-lg navbar-${mode==="light"?"light":"dark"} bg-${mode==="light"?"light":"dark"}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/"><strong>WORDWISE</strong></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input onChange={changeMode} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className={`form-check-label text-${mode==="light"?"dark":"light"}`} htmlFor="flexSwitchCheckDefault">{`Enable Dark mode`}</label>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;