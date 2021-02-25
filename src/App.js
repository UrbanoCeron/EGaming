import { useEffect } from "react";
import Firebase from "./config-fb/config";
import Searchbar from "./views/Searchbar";
import TopOfFer from "./views/TopOffer/TopOffer"
import CardSection from "./Components/CardSection/CardSection"



const App = () => {
    let a = "Hasta 15% de <span style='color: #00d1b2;'>Descuento diferentes categorias</span> en <br /> DIFERENTES CATEGORIAS";

    useEffect( () => {
        const wordRef = Firebase.database().ref('cards');
        wordRef.on('value', (item) => {
            console.log(item.val());
        });
    },[])

    return (
        <div>
            <h1>Este es un conflicto</h1>
            <TopOfFer title={a}></TopOfFer>
            <Searchbar info={"Esta la info por destructuring"}></Searchbar>
            <p>
                loremaldkjasdkjalkdjaldjlakdjladjaljds
            </p>
            <h1> Hola mundo</h1> 

            <CardSection></CardSection>

        </div>
        
);
}

export default App;
