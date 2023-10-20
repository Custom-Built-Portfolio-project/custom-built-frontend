import React, { useEffect, useState } from 'react';



const SearchNavBar: React.FC = () => {

    const [searchText, setSearchText] = useState<string>("");

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value)
    }

    const verResultadoBusqueda = async (searchText : string) => {
      try {
        const {data} = axios.get("llamada a la api")
        
      } catch (error) {
        const messageErrorBusqueda= "No se han encontrado resultados relacionados con la busqueda" ;
      }

    }

    useEffect(() => {
        verResultadoBusqueda(searchText)
    },
        [searchText])

    return (
        <div>
            <input
                type="text"
                value={searchText}
                onChange={handleSearchChange}
                placeholder='Buscar...' />
        </div>
    );
};

export default SearchNavBar;