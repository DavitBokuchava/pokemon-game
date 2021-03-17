import st from './style.module.css';
import clss from 'classnames/bind';

const Navbar = ({menu, handleMenu})=>{
    let clxName = clss.bind(st)
    let clsn = clxName({
        menuButton : true,
        active:menu,
      });
    return (
        <>
            <nav className={st.root}>
                <div className={st.navWrapper}>
                    <p className={st.brand}>
                    LOGO
                    </p>
                    <a href = '/#' className={clsn} >
                    <span onClick = {handleMenu} />
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar;