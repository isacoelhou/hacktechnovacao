import { Popup, TileLayer } from "react-leaflet"
import { Marker, MapContainer } from "react-leaflet"
import { icon } from "leaflet"

const CVEL_POSITION = [-24.95583, -53.45528]

export const markers = [
	{
		"name": "Parque Tarquinio",
		"lat": "-24.971906",
		"lng": "-53.461688",
		"url": "https://goo.gl/maps/zA4F84BYBmceqg5d7" 
	},
	{
		"name": "Parque Municipal Paulo Gorski",
		"lat": "-24.965494",
		"lng": "-53.433923",
		"url": "https://goo.gl/maps/euLt5u46bHchrZ6Y6" 
	},
	{
		"name": "Bosque Municipal Elias Lopuch - Bosque Parque Verde",
		"lat": "-24.940806",
		"lng": "-53.490475",
		"url": "https://goo.gl/maps/MLqPGvDC6W5QZq5C9" 
	},
	{
		"name": "Lago Municipal de Cascavel",
		"lat": "-24.964871",
		"lng": "-53.436572",
		"url": "https://goo.gl/maps/GtfzzCsLZhcR8gEA7" 
	},
	{
		"name": "Parque Ambiental Hilário Zardo (Parque Vitória)",
		"lat": "-24.941542",
		"lng": "-53.458771",
		"url": "https://goo.gl/maps/v7abCgsyXv5ydJqJ7" 
	}
];


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
        <Marker position={markerLatLng} icon={GetIcon(20)}>
            <Popup>
                <a href={url}>{name}</a>
            </Popup>
        </Marker>
    </>
}

export function Maper()
{
    const allMarkers = markers.map((marker)=>{
        const currentLatLang = [Number(marker.lat), Number(marker.lng)]
        console.log(`Positions: ${currentLatLang}` )
        return (
            <Marker position={currentLatLang} icon={GetIcon(20)} key={marker.name}>
                <Popup>
                    <a href={marker.url}>{marker.name}</a>
                </Popup>
            </Marker>
        )
    })
    return (
        <MapContainer center={CVEL_POSITION} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {allMarkers}
        </MapContainer>
    )
}
