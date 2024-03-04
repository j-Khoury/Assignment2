import React from 'react'

export default function Menu() {
  return (
     <nav class="navbar">
     {/* <!-- LOGO --> */}
     <div class="logo">
     <a href="index.html" style={{color: 'white', fontSize: '20px'}}>Soft Landing</a>
     </div>
 
     {/* <!-- NAVIGATION MENU --> */}
     <ul class="nav-links">
 
       {/* <!-- USING CHECKBOX HACK --> */}
       <input type="checkbox" id="checkbox_toggle" />
       <label for="checkbox_toggle" class="hamburger">&#9776;</label>
 
       {/* <!-- NAVIGATION MENUS --> */}
       <div className="menu">
 
         <li><a href="/">Home</a></li>
         <li><a href="/">Features</a></li>
 
         <li class="services">
           <a href="/">About us</a>
         </li>
 
         <li><a href="/">Pricing</a></li>
         <li><a href="/">Contact</a></li>
       </div>
     </ul>

     <div className='email'>
          <a href="#" style={{color: 'white'}}>
          Say hello - info@soft.co
          </a>
     </div>
   </nav>
  )
}
