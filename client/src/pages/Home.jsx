import React from "react";
import PublicMaster from "./layout/public/PublicMaster";
import LoginForm from "../containers/home/LoginForm";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Home (props) {

    return (
        <main>
        <PublicMaster/>
        <LoginForm/>
        <Col className="text-center icon"><i class="fas fa-search"></i></Col>
        </main>
    )
}

export default Home;