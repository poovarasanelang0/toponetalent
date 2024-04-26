import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Dropdown } from 'react-bootstrap';

import "./Header.css"
const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false); 

  
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  return (
    <>
    
    <nav className="navbar bg-body-tertiary fixed-top">
  <div className="container">
    <a className="navbar-brand" href="/"> <span className='fs-2 fw-bold' style={{color:"#006994"}}>T</span><span className='fs-3 fw-bold heding_color'>opone Talents</span>
    <p className='mx-3' style={{color:"blue" ,fontSize:"15px"}}>-Hiring the Top One Percent -</p></a>
   
    <button className="navbar-toggler fw-bold" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation" style={{ border: 'none', backgroundColor: 'transparent' }}>
  <h4 className='heding_color' style={{ display: 'inline', margin: '0' }}>FIND</h4>
  <span className="navbar-toggler-icon fs-5" />
</button>

    <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div className="offcanvas-header d-flex justify-content-end">
        <button type="button" className="btn-close " data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body bg-dark ">
        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 ">
          <li className="nav-item py-2 mx-3">
            <a className="nav-link active text-white fw-bold" aria-current="page" href="/AboutUs">ABOUT US</a>
          </li>
          
          <li className="nav-item py-2 mx-1" >
          <Dropdown>
        <Dropdown.Toggle variant=""  className='text-white border-0 fw-bold' id="dropdown-basic" onClick={toggleDropdown}>
          FIND PEOPLE
        </Dropdown.Toggle>
        <Dropdown.Menu show={showDropdown}>
          <Dropdown.Item href="">Software Developer</Dropdown.Item>
          <Dropdown.Item href="/Frontend">FrontEnd Developer</Dropdown.Item>
          <Dropdown.Item href="/Backend">BackEnd Developer </Dropdown.Item>
          <Dropdown.Item href="/FullStack">FullStack Developer </Dropdown.Item>
          <Dropdown.Item href="/Automation">Automation Testing </Dropdown.Item>
          <Dropdown.Item href="/Manual">Manual Testing </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
          </li>
         
          <li className="nav-item py-2 mx-3">
            <a className="nav-link text-white fw-bold" href="#">RESOURCES</a>
          </li>
          <li className="nav-item py-2 mx-3">
            <a className="nav-link text-white fw-bold" href="/Contact">CONTACT</a>
          </li>
        </ul>
       
      </div>
    </div>
  </div>
</nav>
<br /><br /><br /><br />
    
 


      
    </>
  )
}

export default Header
