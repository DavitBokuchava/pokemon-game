import React from 'react';
import cn from 'classnames';
import st from './style.module.css';

const LoginForm = ({onSubmit})=>{
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const [register, setRegister] = React.useState(true)
    const handleSubmit = (e)=>{     
        e.preventDefault();
         onSubmit({
             email,
             password,
             register
         });
         setEmail('')
         setPassword('')
    }

    return (
        <>
            <form onSubmit = {handleSubmit}> 
                <div className={st.root}>
                    <input value = {email} type="text" className={st.input} required onChange = {(e)=>setEmail(e.target.value)}/>
                    <span className={st.highlight}></span>
                    <span className={st.bar}></span>
                    <label className={st.label}>Email</label>
                </div>
                <div className={st.root}>
                    <input value = {password} type="password" className={st.input} required onChange = {(e)=>setPassword(e.target.value)}/>
                    <span className={st.highlight}></span>
                    <span className={st.bar}></span>
                    <label className={st.label}>Password</label>
                </div>
                <button type = 'onsubmit'>
                    {register ? "SIGNUP" : "SIGNIN"}
                </button>
                <span 
                    style = {{fontSize: "1rem",marginLeft:"200px", cursor:"pointer"}} 
                    onClick = {()=>setRegister(prv=>!prv)}>
                {!register ? "REGISTER ?" : "LOGIN ?"}
                </span>
            </form>
            {/* <button type = 'onsubmit'>
                    avoe
                </button> */}
        </>
    )
}

export default LoginForm;