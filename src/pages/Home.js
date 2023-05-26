import { useEffect, useReducer } from "react";
import "./HomeCss.css";
import { Maper } from "./maps/Map";
import "leaflet/dist/leaflet.css";

function Recommendation(image_url)
{
  return (
  <div id="rec">
    <img className="imagery" src={image_url} alt={image_url} height="320" width="350"></img>
  </div>
  )
}

async function getRecommendations()
{
  const recommends = []
  const response = await fetch(
    "http://127.0.0.1:8000/places/all/",
    {
      method: "GET",
    }
  );
  const json_response = await response.json();
  json_response["all"].forEach(element => {
    if (recommends.length < 5 && element["tags"].split(" ").includes("promoted")) {
      recommends.push(<p id="promoteText">Promoted</p>)
      recommends.push(Recommendation(element["image_url"]))
      json_response["all"].splice(json_response["all"].indexOf(element), 1)
    }
  })
  json_response["all"].forEach(element => {
    if (recommends.length < 5) {
      recommends.push(Recommendation(element["image_url"]))
    }
  });
  return recommends
}

function Recommendations()
{
  const [recommendList, dispatch] = useReducer((recommendList, {type, value})=>{
    switch (type) {
      case "change":
        return value
      default:
        return recommendList
    }
  }, [])

  useEffect(()=>{
    getRecommendations().then((value)=>{
      dispatch({type: "change", value: value})
    })
  })
  return (
  <>
    <h1 id="recTitle">Recomendações</h1>
    {recommendList}
  </>
  )
}

function Categories()
{
  return (
    <>
      <h1 id="categoriesTitle">Categorias</h1>
    </>
  )
}

function Home() {
  return (
    <>
      <div id="container">
        <div id="mapRow">
          <h1 id="nearYou">Perto de Você</h1>
          <div id="map">
            <Maper/>
          </div>
        </div>
        <div id="recommendations"><Recommendations/></div>
      </div>
    </>
  );
}

export default Home;
