import React from 'react'
import StaticPlate from "./StaticPlate";
import {plate} from "../../Constants/Jsons/JsonFiles";

import "../../Constants/Jsons/JsonFiles"
import 'bootstrap'


const fakePlatePart = () => {


    return (
        <div>
            <div className="container-fluid">
                {plate.map((el, idx) => {
                    return (
                        <div className="row">
                            <div className="col-12 fake-plate-par-set-center">
                                <StaticPlate
                                    plate_number={plate[idx].number}
                                    plate_code={plate[idx].code}/>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default fakePlatePart