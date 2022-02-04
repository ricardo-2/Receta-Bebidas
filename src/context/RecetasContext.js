import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const RecetasContext = createContext();


const RecetasProvider = (props) => {

    const [recetas, guardarRecetas] = useState([]);
    const [busqueda, buscarRecetas] = useState({
        nombre: '',
        categoria: ''
    });
    const [ consultar, guardarConsultar] = useState(false);

    const { nombre, categoria} = busqueda;

    useEffect(() => {
        if(consultar) {
            const obtenerRecetas = async () => {
                const url = ``;

                const resultado = await axios.get(url);

                //console.log(resultado.data.drink);
                guardarRecetas(resultado.data.drink);
             }
             obtenerRecetas();
        }
        
    }, [busqueda]); 
    
    return ( 
        <RecetasContext.Provider
           value={{
               recetas,
               buscarRecetas,
               guardarConsultar
           }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;