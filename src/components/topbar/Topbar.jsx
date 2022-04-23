import React from 'react'
import "./topbar.scss"
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';

export default function Topbar({menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}> 
      <div className='wrapper'>
          <div className='left'>
            <a href='#intro' className='logo'>
              DEV Life.
            </a>  
            <div className='itemContainer'>
              <ImportantDevicesIcon className='icon'/>
              <span>JS FULLSTACK</span>
            </div>
            <div className='itemContainer'>
              <MarkEmailReadIcon className='icon'/>
              <span>kevinflamang@gmail.com</span>
            </div>
            </div>
          <div className='right'>
              <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className='line2'></span>
                <span className='line3'></span>
              </div>

          </div>
          </div>
      </div>  
    
  );
  }
            

