// import React from 'react'
// import './navbar.css'
// import MenuIcon from '../../assets/menu.png'
// import Logo from '../../assets/logo.png'
// import search_icon from '../../assets/search.png'
// import upload_icon from '../../assets/upload.png'
// import more_icon from '../../assets/more.png'
// import notification_icon from '../../assets/notification.png'
// import profile_icon from '../../assets/jack.png'

// const Navbar = ({setSidebar}) => {
//   return (
//     <nav className = "flex-div">
//         <div className="nav-left flex-div">
//             <img className = "menu-icon" onClick = {()=>setSidebar(prev=>prev===false ? true : false)} src={MenuIcon} alt="" />
//             <img className = "logo" src = {Logo} alt = " "/>
//         </div>

//         <div className="nav-middle flex-div">
//             <div className="search-box flex-div">
//                 <input type="text" placeholder='Search'/>
//                 <img src = {search_icon} alt=""/>
//             </div>
//         </div>

//         <div className="nav-right flex-div">
//             <img src = {upload_icon} alt="" />
//             <img src = {more_icon} alt="" />
//             <img src = {notification_icon} alt="" />
//             <img src = {profile_icon} className='user-icon' alt="" />
//         </div>
//     </nav>
//   )
// }

// export default Navbar

import React from 'react';
import './navbar.css';
import MenuIcon from '../../assets/menu.png';
import Logo from '../../assets/logo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/jack.png';

const Navbar = ({ setSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => !prev)}
          src={MenuIcon}
          alt="Menu"
        />
        <img className="logo" src={Logo} alt="Logo" />
      </div>

      <div className="nav-middle flex-div">
        <div className="search-box flex-div">
          <input type="text" placeholder='Search' />
          <img src={search_icon} alt="Search" />
        </div>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More" />
        <img src={notification_icon} alt="Notifications" />
        <img src={profile_icon} className='user-icon' alt="Profile" />
      </div>
    </nav>
  );
}

export default Navbar;
