import React from "react"
import '../../Css/Subcomponents/CreateRoadCameraSearch.css'

const searchBar = (props) => {
    return(
        <div>
            <input
                className="create-road-camera-search-bar"
                type="text"
                placeholder="جستجو بر اساس نام محور"
                onChange={props.onSearchBarChange}/>
        </div>
    )
};

export default searchBar;