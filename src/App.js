//import './App.sass';

import Header from "./views/header";
import Searchbar from "./views/Searchbar";
import TopOffers from "./views/TopOffers";

function App() {
    let a = "Hasta 15% de <span style='color: #00d1b2;'>Descuento diferentes categorias</span> en <br /> DIFERENTES CATEGORIAS";
    return (
        <div>
            <TopOffers title={a}></TopOffers>
            <Searchbar info={"Esta la info por destructuring"}></Searchbar>
        </div>
);
}

export default App;
