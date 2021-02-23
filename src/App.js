import Searchbar from "./views/Searchbar";
import TopOfFer from "./views/TopOffer/TopOffer"

function App() {
    let a = "Hasta 15% de <span style='color: #00d1b2;'>Descuento diferentes categorias</span> en <br /> DIFERENTES CATEGORIAS";
    return (
        <div>
            <h1>Este es un conflicto</h1>
            <TopOfFer title={a}></TopOfFer>
            <Searchbar info={"Esta la info por destructuring"}></Searchbar>
            <p>
                loremaldkjasdkjalkdjaldjlakdjladjaljds
            </p>
            <h1> Hola mundo</h1> 
        </div>
        
);
}

export default App;
