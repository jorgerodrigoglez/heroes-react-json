import { heroes } from "../data/heroes";

// helper para restringir los publishers validos y retornar la lista (array) de los mismos
export const getHeroesByPlublisher = ( publisher ) => {

    const validPublishers = ['DC Comics','Marvel Comics'];

    if( !validPublishers.includes( publisher )){
        throw new Error(`${publisher} no es un publisher valido`);
    }

    return heroes.filter( heroe => heroe.publisher === publisher )

}