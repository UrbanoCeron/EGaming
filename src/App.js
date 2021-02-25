import { useEffect, useState } from "react";
import Firebase from "./config-fb/config";
import Searchbar from "./views/Searchbar";
import TopOfFer from "./views/TopOffer/TopOffer"
import CardSection from "./Components/CardSection/CardSection"



const App = () => {
    // let a = "Hasta 15% de <span style='color: #00d1b2;'>Descuento diferentes categorias</span> en <br /> DIFERENTES CATEGORIAS";

    // const [state,setState] = useState();

    // useEffect( () => {
    //     const wordRef = Firebase.database().ref('cards');
    //     wordRef.on('value', (item) => {
    //         debugger
    //         setState(item.val());
    //         console.log(item.val());
    //     });
    // },[])

    return (
        <div>
            {/* { 
                state && state.map( (item,i) => <CardSection key={i} {...item} ></CardSection>  )
            } */}
        </div>
        
);
}

export default App;
