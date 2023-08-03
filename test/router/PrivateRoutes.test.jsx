import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../src/auth';
import { PrivateRoutes } from '../../src/router/PrivateRoutes';

describe('pruebas en el <PrivateRoutes />', () => {

    test('debe mostrar el children si esta autenticado', () => { 

        // llamada al localStorage
        Storage.prototype.setItem = jest.fn();

        const contextValue = {
            // con valor false se crea un ciclo infinito
            logged: true,
            user : {
                id: 12345,
                name: 'JRG'
            }
        }

        render( 
            <AuthContext.Provider value={ contextValue }>
                <MemoryRouter initialEntries={['/search?q=batman']}>
                    <PrivateRoutes>
                        <h1>Ruta privada</h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
         )

         expect( screen.getByText('Ruta privada')).toBeTruthy();
         //screen.debug();
         expect( localStorage.setItem ).toHaveBeenCalledWith( "last-path","/search?q=batman" );

     });
})