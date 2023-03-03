import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css'
import { IconContext } from 'react-icons'
import Navbar from 'react-bootstrap/Navbar';


function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: 'blue'}}>
    
       <Navbar  sticky="top" to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
        </Navbar> 

    </IconContext.Provider>
    <IconContext.Provider value={{color:'white'}}>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'  >
                <Link className='menu-bars'>
                <AiIcons.AiOutlineClose onClick={showSidebar} />
                </Link>
            </li>
            {SidebarData.map((item, index)=> {
                return(
                 <li key={index}  className={item.className}>
                    <a href={item.path}>
                        {item.icon}
                        <span className='item-span'>{item.title}</span>
                    </a>
                 </li>  
                )
            })}
        </ul>
    </nav>
    </IconContext.Provider>
    </>
  )
}

export default Sidebar