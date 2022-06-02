import Photo from "../assets/paysage1.png";
//import grid 3/ ligne

import { useContext } from "react";
import { EnvHousing } from '../utils/env_housing';

function Home() {
    const { locs, getIDs } = useContext(EnvHousing);
    const locIDs = getIDs();

   // if(){}
    return (
        <div>
            <Photo />
            /*grid 3/L */

        </div>
    )
}

export default Home;