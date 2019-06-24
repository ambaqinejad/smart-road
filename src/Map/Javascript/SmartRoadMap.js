import React, { Component } from 'react'
import {Map, TileLayer} from "react-leaflet";
import L from 'leaflet';

class SmartRoadMap extends Component{

    render() {
        return(
            <div>
                <Map
                    className={"leaflet-container"}
                    center={[40.416775, -3.703790]}
                    zoom={13}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                </Map>
            </div>
        )
    }
}

export default SmartRoadMap;