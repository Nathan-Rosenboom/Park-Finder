import React from "react";
import PrivateMaster from "./layout/private/PrivateMaster";
import ParkContainer from "../containers/search/ParkContainer";
import SearchItem from "../containers/search/SearchItem";
import "./Parks.css";

function Park (props) {

    return (
        <main>
        <PrivateMaster/>
        <SearchItem />
        <ParkContainer/>
        </main>
    )
}

export default Park;