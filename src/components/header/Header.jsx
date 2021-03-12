import style from './styleFooter.module.css'
const Header = (props)=>{
const {title, descr} = props;
    return (
        <>
        <header className={style.root}>
            <div className={style.forest}></div>
            <div className={style.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
            </div>
        </header>
        </>)
}
export default Header;