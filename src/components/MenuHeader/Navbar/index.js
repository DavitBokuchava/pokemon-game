import clss from 'classnames/';
import st from './style.module.css';


const Navbar = ({isOpen,bgActive = false, handleMenu})=>{
    // let clxName = clss.bind(st)
    // let clsn = clxName({
    //     menuButton : true,
    //     e:menu,
    //   });id={st.root}
    return (
        <>
            <nav  className={
                clss(st.root,{
                    [st.bgActive]:bgActive
                })
            }>
                <div className={st.navWrapper}>
                    <p className={st.brand}>
                    LOGO
                    </p>
                    <div  className={clss(st.menuButton, {
                        [st.active] : isOpen
                    })} >
                    <span onClick = {handleMenu} />
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar;