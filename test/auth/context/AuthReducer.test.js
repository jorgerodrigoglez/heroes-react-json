import { authReducer, types } from "../../../src/auth";


describe('Pruebas del authReducer', () => {

    test('debe de retornar el estado por defecto', () => {

        const state = authReducer( {logged: false }, {} );
        expect( state ).toEqual( { logged: false });

    });

    test('debe de llamar la accion de login y autenticar al usuario', () => {

            const action = {
                type: types.login,
                payload: {
                    name: 'Jorge',
                    id: 1234
                }
            }

            const state = authReducer( {logged: false }, action );
            expect( state ).toEqual({ 
                logged: true,
                user: action.payload
            });
    });

    test('debe de llamar la accion de loout borrar el name del usuario y poner el logged en false', () => {

        const state = {
            logged: true,
            user: {
                name: 'Jorge',
                id: 1234
            }
        }

        const action = {
            type: types.logout,
        }

        const newState = authReducer( state , action );
        expect( newState ).toEqual({ logged: false });
    });
 })