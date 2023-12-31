import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchResultsDropdown from './dropDownMenuSearchBar';
import "./searchNavBar.css"


const SearchNavBar: React.FC = () => {

    const [searchText, setSearchText] = useState<string>(""); //texto donde se guarda las palabras de resultados 

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }


    const [searchResults, setSearchResults] = useState([]); // se guardo las objetos que vienen por resultado con su propiedades 
    const [showResults, setShowResults] = useState(false); //dice si abre el formulario o no 
    const [searchError, setSearchError] = useState<string | null>(null); // Estado para mensajes de error

    const verResultadoBusqueda = async (searchText: string) => {
        try {
            const { data } = await axios.get(`llamada a la api ${searchText}`)
            if (data.length > 0) {
                setSearchResults(data)
                setShowResults(true)
            }
            else {
                setSearchResults([])
                setShowResults(true)
                setSearchError("No se han encontrado resultados. Por favor, inténtalo de nuevo.")
            }
        } catch (error) {
            console.error("Error en la búsqueda:", error);
            setShowResults(true)
            setSearchError("error en la busqueda")
        }

    }

    useEffect(() => {
        if (searchText.trim() === "") {
            // Si no hay texto de búsqueda, no hacemos la llamada a la API y ocultamos los resultados.
            setShowResults(false);
            setSearchError(null);
        } else {
            verResultadoBusqueda(searchText);
        }
    }, [searchText]);

        return (
            <div className="search-container">
              <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder='Buscar...'
              />
              <div className="search-results-container">
                <SearchResultsDropdown results={searchResults} isOpen={showResults} error={searchError} />
              </div>
            </div>
          );
};

export default SearchNavBar;