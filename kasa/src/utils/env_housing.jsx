import { createContext, useState } from "react";
//import housing by fetch?

export const envHousing = createContext();

export const lessor = ({ children }) => {
    const [locs, setLocs ] = useState(housingfetch.get());
}