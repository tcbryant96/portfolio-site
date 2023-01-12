import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css'
import { IconContext } from 'react-icons'

function Sidebar() {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: 'blue'}}>
    
       <Link to='#' className='menu-bars'>
        <FaIcons.FaBars onClick={showSidebar}/>
        </Link> 

    </IconContext.Provider>
    <IconContext.Provider value={{color:'white'}}>
    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='/' className='menu-bars'>
                <AiIcons.AiOutlineClose/>
                </Link>
            </li>
            {SidebarData.map((item, index)=> {
                return(
                 <li key={index}  className={item.className}>
                    <Link to={item.path}>
                        {item.icon}
                        <span className='item-span'>{item.title}</span>
                    </Link>
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