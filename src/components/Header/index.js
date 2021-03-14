import st from './header.module.css'

const Header = (props)=>{
const { title, descr } = props;
    return (
        <>
        <header className={st.root}>
            <div className={st.forest}></div>
            <div className={st.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
        </>)
}
export default Header;