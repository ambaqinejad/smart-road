import React, {Component} from 'react';
import L from 'leaflet'
import 'leaflet-routing-machine'
import {Map} from 'react-leaflet'
import 'bootstrap'
import 'leaflet/dist/leaflet.css'


// import icon from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';
// let DefaultIcon = L.icon({
//     iconUrl: icon,
//     shadowUrl: iconShadow
// });
//
// L.Marker.prototype.options.icon = DefaultIcon;

class Contact extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col- col-md col-sm">

                    </div>
                    <div className="col-8 col-sm-12 col-md-10">
                        <div id={'map'}>

                        </div>
                    </div>
                    <div className="col- col-md col-sm">

                    </div>
                </div>
            </div>
        );
    }


    componentDidMount() {
        this.map = L.map('map');
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png")
            .addTo(this.map);
        L.Routing.control({
            waypoints: [
                L.latLng(27.74, 53.94),
                L.latLng(32.97, 58.949)
            ],
            plan: false

        }).addTo(this.map);

        // L.marker(
        //     [57, 11.94], {
        //         riseOnHover:true
        //     }).addTo(this.map);
        // L.marker(L.latLng(57, 11.949)).addTo(this.map)
    }

}

export default Contact;