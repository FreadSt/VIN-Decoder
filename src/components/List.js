import React, {useState, useEffect} from "react";
import Axios from "axios";

const List = () => {
    const [vin, setVin] = useState()

    useEffect(() => {
        Axios.get(`/vehicles/getvehiclevariablelist?format=json`)
            .then(result => {
                setVin(result, console.log(result.data,"sd"))
                
            })
    },[])

    return(
        <div>
            <form>
                <input onChange={setVin}/>
            </form>
        </div>
    )
}

export default List;


