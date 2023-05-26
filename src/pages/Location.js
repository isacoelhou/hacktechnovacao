import { useEffect } from "react"
import { useParams } from "react-router-dom"
import "./LocationCss.css"

async function getLocation(id)
{
    const response = await fetch(
        "http://127.0.0.1:8000/places/all/",
        {
          method: "GET",
        }
      );
    const json_response = await response.json();
    console.log(json_response)
    if (json_response) {
        json_response["all"].forEach(element => {
            if (element["id"] === Number(id)) {
                document.getElementById("mainImage").setAttribute("src", element["image_url"])
                document.getElementById("description").innerHTML = element["descr"]
                document.getElementById("mainImageTitle").innerHTML = element["name"]
                document.getElementById("localizatonUrl").setAttribute("href", element["maps_url"])
            }
        });
    }
    
}

function Location()
{
    const params = useParams()
    useEffect(()=>{
        getLocation(params.id).then(()=>{
            console.log("Success!!")
        })
    })
    return (
        <>

            <div id="locationContainer">
            <div id="presentationRow">
                <img id="mainImage" src="" alt="dummy"></img>
                <p id="mainImageTitle"></p>
            </div>
            <div id="descriptionRow">
                <h1 id="descriptionTitle">Descrição</h1>
                <p id="description"></p>
                <a href="dummy.com" id="localizatonUrl">
                <img id="localizationIcon" src={require("./maps/markericon.png")} alt="localização"></img>
                </a>
            </div>
            </div>
        </>
    )
}

export default Location