import { Routes, Route } from 'react-router-dom';

import { HeroesRoutes } from '../heroes';
import { LoginPage } from '../auth';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';

export const AppRouter = () => {
  return (
    <>
        <Routes>

           {/** Rutas publicas */}
           {/*<Route path="/login" element={ <LoginPage/> } /> */}
              {/*<Route path="/login" element={ 
                  <PublicRoutes>
                    <LoginPage/>
                  </PublicRoutes>
              } />*/}

            {/** Idem - Rutas públicas*/}
              <Route path="login/*" element={ 
                  <PublicRoutes>
                    <Routes>
                      <Route path='/*' element={ <LoginPage/> }/>
                    </Routes>
                  </PublicRoutes>
              } />


            {/** Rutas privadas */}
            {/*<Route path="/*" element={ <HeroesRoutes />  />*/}
           <Route path="/*" element={ 
              <PrivateRoutes>
                <HeroesRoutes />
              </PrivateRoutes>
            } />


        </Routes>
    </>
  )
}
