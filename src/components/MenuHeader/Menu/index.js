import React from 'react';
import st from './style.module.css';
import clss from 'classnames/bind';

const Menu = ({menu,setMenu})=>{
    let clxName = clss.bind(st)
    let clsn = clxName({
        menuContainer : true,
        active:menu,
        deactivate: !menu // maybe it's not usefull
      });
    return (<>   
        <div className={clsn}>
        <div className={st.overlay} />
            <div className={st.menuItems}>
                <ul>
                <li>
                    <a href="#welcome">
                    HOME
                    </a>
                </li>
                <li>
                    <a href="#game">
                    GAME
                    </a>
                </li>
                <li>
                    <a href="#about">
                    ABOUT
                    </a>
                </li>
                <li>
                    <a href="#contact">
                    CONTACT
                    </a>
                </li>
                </ul>
            </div>
        </div>
    </>)
}
export default Menu;