import React from 'react'
import cn from 'classnames';
import st from './style.module.css';
const Modal = ({title,children,onClickCloseModal, isOpenModal})=>{
    const modalEL = React.useRef();
    const handleCloseModal = ()=>{
        onClickCloseModal&&onClickCloseModal(false)
    }
    const handleElement = (e)=>{
        if(!modalEL.current.contains(e.target)){
            return  handleCloseModal(false)
        }
    }
    React.useEffect(()=>{
        return document.querySelector('body').style.overflow = isOpenModal ? "hidden" : null
    },[isOpenModal])
    //onClick = {handleElement}
    return (
        <div className={cn(st.root,{[st.open] : isOpenModal})} 
        onClick = {handleElement}>
            <div 
                className={st.modal}
                ref = {modalEL}
                >
                <div 
                    
                    className={st.head} >
                     {title}
                    <span 
                        className={st.btnClose} 
                        onClick = {handleCloseModal}>

                    </span>
                </div>
                <div className={st.content} >
                    { children}
                </div>
            </div>
        </div>
    )
}
export default Modal;