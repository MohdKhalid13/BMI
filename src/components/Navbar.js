import React from "react";
import { FcCalculator } from "react-icons/fc";


function Navbar(props){
    return(
        <>
         {/* <nav className={`navbar navbar-light bg-light bg-${props.mode} text-${props.mode}`}>
           <div className="container-fluid">
           <li className="nav-item">
          <div className="nav-link" aria-current="page" to="/">Home</div>
           </li>             
        <div className={`form-check form-switch me-5 ms-5 mt-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="form">
           <input className="form-check-input" onClick={props.Data} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
           <label className="form-check-label" id="name" htmlFor="flexSwitchCheckChecked">{`${props.mode === 'dark' ? 'Enable LightMode' : 'Enable DarkMode'}`}</label>
        </div>
        </div>
         </nav> */}


<nav className={`navbar navbar-expand-lg bg-light navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
  <div className="w-90 text-center h2">< FcCalculator className="cap" />BMI Calculator</div>

    {/* <a className="navbar-brand"  href="#/" ><FcCalculator className="cap" /> B.M.I</a> */}
        <div className={`form-check form-switch me-5 ms-5 mt-1 text-${props.mode === 'dark' ? 'light' : 'dark'}`} id="form">
           <input className="form-check-input" onClick={props.Data} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
           <label className="form-check-label" id="name" htmlFor="flexSwitchCheckChecked">{`${props.mode === 'dark' ? 'Enable LightMode' : 'Enable DarkMode'}`}</label>
        </div> 

    </div>
  </nav>

        </>
    )
}

export default Navbar