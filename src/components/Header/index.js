import { useHistory } from 'react-router-dom'
import st from './header.module.css';

const Header = (props)=>{
const { title, descr } = props;
const history = useHistory()
    return (
        <>
        <header className={st.root}>
            <div className={st.forest}></div>
            <div className={st.silhouette}></div>
            <div className={st.moon}></div>
            <div className={st.container}>
                <h1>{title}</h1>
                <p>{descr}</p>
                <button onClick = {()=>history.push("/game")} > PLAY </button>
            </div>
            
        </header>
        </>)
}
export default Header;