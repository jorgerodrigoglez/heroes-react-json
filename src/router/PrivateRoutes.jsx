import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom"
import { AuthContext } from "../auth"


export const PrivateRoutes = ({ children }) => {

    const{ logged } = useContext(AuthContext);

    // hay qu evitar las renderizaciones de los componentes del children
    useEffect(() => {
        console.log( 're-redender...' );
    }, [])

    // logica para almacenar el localStorage la ultina pagina visitada
    const{ search, pathname } = useLocation();
    const lastPath = pathname + search;
    console.log( lastPath );
    localStorage.setItem('last-path', lastPath );
    
    return ( logged )
        ? children
        : <Navigate to="/login" />
}
