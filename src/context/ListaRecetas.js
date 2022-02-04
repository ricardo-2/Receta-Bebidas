import React, { useContext} from 'react';
import Recetas from '../components/Recetas';
import { RecetasContext } from './RecetasContext';

const ListadoRecetas = () => {

    //extraer las recetas
    const {recetas } = useContext(RecetasContext); 

    console.log(recetas);

    return ( 
        <div className="row mt-5">
            {recetas.map(receta => (
              <Recetas 
                key={receta.idDrink}
                receta={receta}
              />
            ))}
        </div>
     );
}
 
export default ListadoRecetas;