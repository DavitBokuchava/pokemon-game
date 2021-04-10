import clss from 'classnames/';
import st from './style.module.css';
import {ReactComponent as LoginSVG} from '../../../assets/login.svg'


const Navbar = ({isOpen,bgActive = false, handleMenu, onClickLogin})=>{
   
    return (
        <>
            <nav  className={
                clss(st.root,{
                    [st.bgActive]:bgActive
                })
            }>
                <div className={st.navWrapper}>
                    <div>
                        <p className={st.brand}>
                        LOGO
                        </p>
                    </div>
                    <div className = {st.loginAndMenu}>
                    <div className = {st.loginWrap}
                        onClick = {onClickLogin}>
                            <LoginSVG/>
                        </div>
                        <div  className={clss(st.menuButton, {
                            [st.active] : isOpen
                        })} >
                        <span onClick = {handleMenu} />
                        </div>
                    </div>
                    
                </div>
            </nav>
        </>
    )
}
export default Navbar;

 // let clxName = clss.bind(st)
    // let clsn = clxName({
    //     menuButton : true,
    //     e:menu,
    //   });id={st.root}