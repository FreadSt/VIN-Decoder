import React, {useState, useEffect} from "react";
import Axios from "axios"
import validate from "./ValidRules";


/*1. local storage. В инпуте Кнопка search, Если запрос успешный - сохранить вин в local storage. 
+ Логика Если их уже 5, то последний удалить, и вместо него добавляем в начало (1й)*/


const Form = () => {

    const [vin, setVin] = useState('')
    const [vinDataArr, setVinDataArr] = useState([])
    
    useEffect(() => {
        Axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json`)
        .then(result => {
            console.log(result.data.Results, "vin")
            return result.data.Results
        })
    },[])

    return (
        <div>
            <h1>VIN Input</h1>
            <form>
                <div>
                    <input/>
                    <button>Search</button>
                </div>
            </form>

            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>

            <div className="decoded-list">
                <li></li>
            </div>
        </div>
    )
}
export default Form;