import { useLocation, useNavigate } from "react-router-dom";
// yarn add query-string
import queryString from 'query-string';
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../components"
import { getHeroesSearchByName } from "../helpers";


export const SearchPage = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //const query = queryString.parse( location.search );
  // separa los parametros de la busqueda
  //console.log( {query} );
  const { q = '' } = queryString.parse( location.search );
  // regresa los parametros de busqueda
  const heroes = getHeroesSearchByName( q );
  // console.log( heroes );

  // mostrar y ocultar mensajes de búsqueda en style={{}}
  const showSearch = ( q.length === 0 );
  const showError = ( q.length > 0 ) && heroes.length === 0;

  const { searchText , onInputChange } = useForm({
    searchText : q
  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //console.log({ searchText })
    //if( searchText.trim().length <= 0 ) return;

    navigate(`?q=${searchText}`);

  }

  return (
    <>
        <h3>Search</h3>
        <hr />
        <div className="row">
          <div className="col-5">
            <form onSubmit={ onSearchSubmit }>
              <input 
                type="text" 
                placeholder="Busca un héroe"
                className="form-control"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={ onInputChange }
              />

              <button
                className="btn btn-outline-primary mt-2"
              >
                Search
              </button>
            </form>
          </div>

          <div className="col-7">
            <h4>Results</h4>
            <hr />
              {/*
                ( q === '') 
                  ?  <div className="alert alert-primary">Realiza una búsqueda</div>
                  : ( heroes.length === 0)
                    && <div className="alert alert-danger">No hubo resultados para <strong>{q}</strong></div>
              */}   

              <div 
                className="alert alert-primary animate__animated animate__fadeIn" 
                style={{ display : showSearch ? '' : 'none' }}
              >
                Realiza una búsqueda
              </div> 

              <div 
                className="alert alert-danger animate__animated animate__fadeIn"  
                style={{ display : showError ? '' : 'none' }}
              >
                No hubo resultados para: <strong>{q}</strong>
              </div>

              {/* <HeroCard /> */}
              {
                heroes.map( hero => (
                  <HeroCard key={ hero.id } { ...hero } />
                ))
              }
          </div>

        </div>
    </>
  )
}
