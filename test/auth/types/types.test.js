import { types } from "../../../src/auth"


describe('pruevas en - types.js -', () => {

    test('debe de regresar estos types', () => {

        //console.log(types);
        expect(types).toEqual({
            login: '[Auth] Login',
            logout: '[Auth] Logout',
        })
     })
})