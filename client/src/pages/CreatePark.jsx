import React from "react";
import PrivateMaster from "./layout/private/PrivateMaster";
import ParkContainer from "../containers/search/ParkContainer";

function CreatePark (props) {

    return (
        <main>
        <PrivateMaster/>

        <ParkContainer/>
        </main>
    )
}

export default CreatePark;