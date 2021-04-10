
import React from 'react';
import {NotificationManager} from 'react-notifications';
import Menu from './Menu';
import Navbar from './Navbar';
import Modal from '../../components/Modal';
import LoginForm from '../../components/LoginForm'


const  MenuHeader =  ({bgActive})=> { 
const [isOpen, setOpen] = React.useState(null);
const [isOpenModal, setOpenModal] = React.useState(null);
const handleMenu = ()=>{
    return setOpen(prv=> !prv);
}
const handleClickLogin = ()=>{
   return setOpenModal(prv=> !prv);
}

const handleSubmitValue = async ({email,password, register})=>{
   console.log("handledValue === ", email,password, register);
   const reqOptions = {
      method:'POST',
      body:JSON.stringify({
         email,
         password,
         returnSecurityToken:true
      })
   } 
      const response = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:${register ? "signUp":"signInWithPassword"}?key=AIzaSyDQfvgWXrgSAbnkOPvytMMpn-hDitlYPdk`, reqOptions).then(res=>res.json());
      console.log(response)
      if(response.hasOwnProperty('error')){
         return NotificationManager.error(response.error.message,"Error")
      }else{
         localStorage.setItem('idToken',response.idToken)
         return NotificationManager.success(`Successsfully ${register ? "Registered":"Logged in"}`)
      } 
   
}
 
return (
     <>
        <Menu 
            isOpen = { isOpen } 
            handleMenu = { handleMenu } />
        <Navbar 
            isOpen = { isOpen } 
            bgActive = {bgActive} 
            handleMenu = {handleMenu}
            onClickLogin = {handleClickLogin} />
         <Modal 
            title = "Title"
            onClickCloseModal = {handleClickLogin}
            isOpenModal = {isOpenModal} >
               <LoginForm
               onSubmit = {handleSubmitValue}
               />
         </Modal>
     </>
    )
 }

export default MenuHeader;
