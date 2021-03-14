import st from './footer.module.css';


const Footer = ()=>{
   //console.log(st)
    return (
        <>
            <footer>
                <div className = {st.wrapper}>
                    <h3>THANKS FOR VISITING</h3>
                    <p>© 2021 #ReactMarathon.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer;