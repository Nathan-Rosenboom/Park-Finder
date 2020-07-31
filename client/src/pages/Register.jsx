import React from "react";
import PublicMaster from "./layout/public/PublicMaster";
import RegisterForm from "../containers/home/RegisterForm";
import Col from "react-bootstrap/Col";
import "./Home.css";

function Register (props) {

    return (
        <main>
        <PublicMaster/>
        <RegisterForm/>
        <Col className="text-center icon"><i class="fas fa-search"></i></Col>

        </main>
    )
}

export default Register;