import { Popup, TileLayer } from "react-leaflet"
import { Marker, MapContainer } from "react-leaflet"
import { icon } from "leaflet"

const CVEL_POSITION = [-24.95583, -53.45528]

export var markers = [
    {
      name: 'Catedral Metropolitana Nossa Senhora Aparecida',
      lat: -24.955915,
      lng: -53.455857,
      maps: 'https://goo.gl/maps/YfAETAbxMFgHaMr39',
    },
    {
      name: 'Teatro Municipal Sefrin Filho',
      lat: -24.959290,
      lng: -53.456288,
      maps: 'https://goo.gl/maps/Egmu74qAFXgkjSfF9',
    },
    {
      name: 'Zoológico Municipal de Cascavel',
      lat: -24.949135,
      lng: -53.432372,
      maps: 'https://goo.gl/maps/CRbAVEJK8bFpTPke6',
    },
    {
      name: 'Centro Esportivo Ciro Nardi',
      lat: -24.9636383,
      lng: -53.4576335,
      maps: 'https://en.wikipedia.org/wiki/Canada',
    },
    
  ]


function GetIcon(iconSize)
{
    return icon( {
        iconUrl: require("./markericon.png"),
        iconSize: [iconSize]
    })
}

export function MarkerPoint(markerLatLng, name, url)
{
    return <>
        <Marker position={markerLatLng} >
            {/* <Popup>
                <a href={url}>{name}</a>
            </Popup> */}
        </Marker>
    </>
}

export function Maper()
{
    const allMarkers = markers.map((marker)=>{
        const currentLatLang = [Number(marker.lat), Number(marker.lng)]
        console.log(`Positions: ${currentLatLang}` )
        return (
            <a href={marker.url}>
            <Marker position={currentLatLang} icon={GetIcon(20)} key={marker.name}>
                <Popup>
                    <a href={marker.url}>{marker.name}</a>
                </Popup>
            </Marker>
            </a>
        )
    })
    
    return (
        <MapContainer center={CVEL_POSITION} zoom={20} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {allMarkers}
        </MapContainer>
    )
}
