import { heroes } from "../data/heroes"

// helper para la construccion de ruta de HeroPage
export const getHeroById = ( id ) => {
    return heroes.find( hero => hero.id === id );
}