import React from "react";
import PrivateMaster from "./layout/private/PrivateMaster";
import ParkContainer from "../containers/search/ParkContainer";
import "./Parks.css";

function Parks (props) {

    return (
        <main>
        <PrivateMaster/>
        <ParkContainer/>
        </main>
    )
}

export default Parks;