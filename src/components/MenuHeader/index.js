
import React from 'react';
import Menu from './Menu';
import Navbar from './Navbar';


const  MenuHeader =  ({bgActive})=> { 
const [isOpen, setOpen] = React.useState(null);
//const [menu, setMenu] = React.useState(false);
const handleMenu = ()=>{
    return setOpen(a=> !a);
}
 
return (
     <>
        <Menu isOpen = { isOpen } />
        <Navbar isOpen = { isOpen } bgActive = {bgActive} handleMenu = {handleMenu} />
     </>
    )
 }

export default MenuHeader;
