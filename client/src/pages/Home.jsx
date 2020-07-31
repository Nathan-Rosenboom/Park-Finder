import React from "react";
import PublicMaster from "./layout/public/PublicMaster";
import LoginForm from "../containers/home/LoginForm";
import Col from "react-bootstrap/Col";

function Home (props) {

    return (
        <main>
        <PublicMaster/>
        <LoginForm/>
        <Col className><i class="fas fa-search"></i></Col>
        </main>
    )
}

export default Home;