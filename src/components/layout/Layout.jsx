import style from './styleLayout.module.css';
// //import bg1 from '../../assets/bg1.jpg'

function styleFn(a,b){
    if(!!a === true){
        return {
            background:`url(${a})`
        };
    }
    return {background:`${b}`}
}
//style = { urlBg ? {backgroundImage:`url(${urlBg})`}: {background:`${colorBg}`}}
const Layout = (props)=>{
    const {title, descr, urlBg, colorBg} = props;
    const inlineStyle = styleFn(urlBg, colorBg)
    return (
        <>
            <section className={style.root} >
                <div className={style.wrapper} style = {inlineStyle } >
                    <article>
                        <div className={style.title}>
                            <h3>{title}</h3>
                            <span className={style.separator}></span>
                        </div>
                        <div className={`${style.desc} ${style.full}`}>
                            <p>{descr}</p>
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout;