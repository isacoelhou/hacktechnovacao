import "./HomeCss.css";
import { Maper } from "./maps/Map";
import "leaflet/dist/leaflet.css";

function Home() {
  return (
    <>
      <div id="container">
        <div id="categories">Categorias</div>
        <div id="map"><Maper/></div>
        <div id="carrouselNearby">Imagens de Lugares Pertos</div>
      </div>
    </>
  );
}

export default Home;
