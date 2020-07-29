import React from "react";
import PrivateMaster from "./layout/private/PrivateMaster";
import ParkContainer from "../containers/search/ParkContainer";
import SearchForm from "../containers/search/SearchForm";
import "./Parks.css";

function Parks (props) {

    return (
        <main>
        <PrivateMaster/>
        <SearchForm />
        <ParkContainer/>
        </main>
    )
}

export default Parks;