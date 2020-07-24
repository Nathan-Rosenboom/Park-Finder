import React from "react";
import PublicMaster from "./layout/public/PublicMaster";
import LoginForm from "../containers/home/LoginForm";

function Home (props) {

    return (
        <main>
        <PublicMaster/>

        <LoginForm/>
        </main>
    )
}

export default Home;