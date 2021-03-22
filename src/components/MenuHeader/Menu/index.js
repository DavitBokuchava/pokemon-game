import React from 'react';
import { Link } from 'react-router-dom';
import st from './style.module.css';
import clss from 'classnames';

const links = [
    {
        path:"/",
        pathName:"HOME"
    },
    {
        path:"/game",
        pathName:"Game"
    },
    {
        path:"/about",
        pathName:"ABOUT"
    },
    {
        path:"/contact",
        pathName:"CONTACT"
    }
]

const Menu = ({isOpen, handleMenu})=>{

    // let clxName = clss.bind(st)
    // let clsn = clxName({
    //     menuContainer : true,
    //     active: isOpen === true,
    //     deactivate: isOpen === false // maybe it's not usefull
    //   });
    return (<>   
        <div className={clss(st.menuContainer, {
            [st.active] : isOpen === true,
            [st.deactive] : isOpen === false
        })}>
        <div className={st.overlay} />
            <div className={st.menuItems}>
                <ul>
                {links.map((a,i)=>(
                <li key = {i} >
                    <Link to={a.path} onClick = {handleMenu&&(()=>handleMenu(val=>!val))}>
                    {a.pathName}
                    </Link>
                </li>))}
                </ul>
            </div>
        </div>
    </>)
}
export default Menu;
/*

{links.map((a,i)=>(<li key = {i} >
                    <a href={links.path}>
                    {links.pathName}
                    </a>
                </li>))}
// */