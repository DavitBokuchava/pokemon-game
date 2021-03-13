import s from './styleLayout.module.css';


function sFn(a,b){
    const s = {};
    if (a) { s.backgroundImage = `url(${a})` } 
    if (b) { s.backgroundColor = b }
    return s;
}


//s = { urlBg ? {backgroundImage:`url(${urlBg})`}: {background:`${colorBg}`}}
const Layout = (props)=>{
    const {title, urlBg, colorBg, children} = props;
    const inlines = sFn(urlBg, colorBg)
    return (
        <>
            <section className={s.root} >
                <div className={s.wrapper} style = {inlines } >
                    <article>
                        <div className={s.title}>
                            <h3>{title}</h3>
                            <span className={s.separator}></span>
                        </div>
                        <div className={`${s.desc} ${s.full}`}>
                            {children}
                        </div>
                    </article>
                </div>
            </section>
        </>
    )
}

export default Layout;

/*
function sFn(a,b){
    const s = {};
    if(a){
        return {
            background:`url(${a})`
        };
    }
    return {background:`${b}`
}
  

*/