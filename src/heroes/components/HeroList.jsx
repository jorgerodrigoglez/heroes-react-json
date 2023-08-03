import { useMemo } from "react";
import { getHeroesByPlublisher } from "../helpers";
import { HeroCard } from "./";

export const HeroList = ({ publisher }) => {

    //const heroes = getHeroesByPlublisher( publisher );  
    const heroes = useMemo( () => getHeroesByPlublisher( publisher ), [ publisher ] );  
    //console.log( heroes );

    return (
        
        <div className="row rows-cols-1 row-cols-md-3 g-3">
            {
                heroes.map( heroe => (
                   /* <li key={heroe.id}>
                        {heroe.superhero}
                    </li> */

                    <HeroCard 
                        key={heroe.id}
                        { ...heroe }
                    />
                ))
            }
        </div>
    )
}
