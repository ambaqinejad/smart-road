import React, { Component } from 'react'
import {Map, TileLayer, Marker} from "react-leaflet";
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});
L.Marker.prototype.options.icon = DefaultIcon;

class SmartRoadMap extends Component{

    render() {
        const position=[this.props.lat, this.props.lang];
        return(
            <div>
                <Map
                    className={"leaflet-container"}
                    center={position}
                    zoom={15}
                    maxZoom={15}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={position}/>
                </Map>
            </div>
        )
    }
}

export default SmartRoadMap;