//import './App.sass';

import Header from "./views/header";
import TopOffers from "./views/TopOffers";

function App() {
    let a = "Hasta 15% de <span style='color: #00d1b2;'>Descuento diferentes categorias</span> en <br /> DIFERENTES CATEGORIAS";
    return (
        <div>
            <TopOffers title={a}></TopOffers>
            <Header></Header>
        </div>
);
}

export default App;
