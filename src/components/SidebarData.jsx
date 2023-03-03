import React, {useState} from 'react'
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import * as IoIcons from "react-icons/io"
import * as GrIcons from "react-icons/gr"
import * as GiIcons from "react-icons/gi"
import * as MdIcons from "react-icons/md"
import { Link } from 'react-router-dom'


export const SidebarData = [
    {
        title: 'Home',
        path: "#my-bio",
        icon: <AiIcons.AiOutlineHome/>,
        className: 'nav-text'
    },
    {
        title: 'Me',
        path: "#about-me",
        icon: <MdIcons.MdPersonOutline/>,
        className: 'nav-text'
    },
    {
        title: 'Skills',
        path: "#my-skills",
        icon: <GiIcons.GiSkills/>,
        className: 'nav-text'
    },
    {
        title: 'Projects',
        path: "#my-projects",
        icon: <AiIcons.AiOutlineLaptop/>,
        className: 'nav-text'
    },
    {
        title: 'Contact',
        path: "#contact-form",
        icon: <MdIcons.MdOutlineContactSupport/>,
        className: 'nav-text'
    }
]