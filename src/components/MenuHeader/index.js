
import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';


const  MenuHeader =  ()=> { 
const [menu, setMenu] = React.useState(false);
const handleMenu = ()=>{
    console.log("Click ...")
    return setMenu(a=> !a);
}
 
return (
     <>
        <Menu menu = { menu} setMenu = {setMenu} />
        <Navbar menu = { menu} setMenu = {setMenu} handleMenu = {handleMenu} />
     </>
    )
 }

export default MenuHeader;
