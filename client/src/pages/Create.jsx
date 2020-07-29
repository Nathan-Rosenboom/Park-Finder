import React from "react";
import PrivateMaster from "./layout/private/PrivateMaster";
import CreateForm from "../containers/create/CreateForm";
function Create() {
    return (
        <div>
            <PrivateMaster/>
            <CreateForm/>
        </div>
    )
}

export default Create;