import {Route, Redirect} from 'react-router-dom';
//{component:Component,...rest}
const PrivateRoute = ({component:Component,...rest})=>{
    console.log({component:Component,...rest}, localStorage.getItem('idToken') )
    return (
         <Route
            {...rest}
            render={ props=>
                   localStorage.getItem('idToken')?
                    <Component 
                        {...props} /> : <Redirect to = '/'/>
                }
            
         />
    )
}
export default PrivateRoute;