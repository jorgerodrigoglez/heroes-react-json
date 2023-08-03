import { useContext } from 'react';
import { AuthContext } from '../context';

import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {

  const { login } = useContext( AuthContext );

  const navigate = useNavigate();

  const onLogin = () => {

    // regresar a la última página visitada - de PrivateRoutes
    const lastPath = localStorage.getItem('last-path') || '/';

    login( 'Jorge RG ');
    
    // se sustituye '/' por la variable lastPath
    navigate( lastPath, {
      // remplaza el historial
      replace: true
    });
  }

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={ onLogin}
      >
        Login
      </button>

    </div>
  )
}
