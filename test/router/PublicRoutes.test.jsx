import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PublicRoutes } from '../../src/router/PublicRoutes';

describe('pruebas en <PublicRoutes />', () => { 

    test('debe mostrar el children si no esta autenticado', () => { 

        const contextValue = {
            logged: false
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <PublicRoutes>
                    <h1>Ruta pública</h1>
                </PublicRoutes>
            </AuthContext.Provider>
         )

         expect( screen.getByText('Ruta pública')).toBeTruthy();
         //screen.debug();

     });

     test('debe navegar mediante el <Navigate /> si está autenticado', () => {
        
        const contextValue = {
            logged: true,
            user: {
                name : 'JRG',
                id : '123EDF'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/login']}>
                    <Routes>
                        <Route path='login' element={
                            <PublicRoutes>
                                <h1>Ruta pública</h1>
                            </PublicRoutes>
                        }/>
                        <Route path='marvel' element={ <h1>Página de Marvel</h1> } />
                     </Routes>
                </MemoryRouter>
            </AuthContext.Provider>
         )

         expect( screen.getByText('Página de Marvel')).toBeTruthy();
         //screen.debug();

     });
 })