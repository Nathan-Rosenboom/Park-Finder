import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "./ParkModal.css"

function ParkModal(props) {
  let toilets = props.toilets.toString();
  let playground = props.playground.toString();
  let exerciseFacilities = props.exerciseFacilities.toString();
  let petsAllowed = props.petsAllowed.toString();
  let colourClass = "red";
  let toiletIcon = "";
  if (toilets === "true") {
    toiletIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    toiletIcon = "far fa-times-circle";
  }

  let playgroundIcon = "";
  if (playground === "true") {
    playgroundIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    playgroundIcon = "far fa-times-circle";
  }

  let petsAllowedIcon = "";
  if (petsAllowed === "true") {
    petsAllowedIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    petsAllowedIcon = "far fa-times-circle";
  }

  let exerciseFacilitiesIcon = "";
  if (exerciseFacilities === "true") {
    exerciseFacilitiesIcon = "far fa-check-circle";
    colourClass = "green"
  } else {
    exerciseFacilitiesIcon = "far fa-times-circle";
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modalBody">
        <p>{props.description}</p>
        <p className="addressBlock">Address</p>
        <p>
          {props.streetAddress}, {props.city}, {props.state}
        </p>
        <Row>
            <Col className="text-center" xs={3} md={3}>
            <i className="icon" class="fas fa-toilet"></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className="icon" class="fas fa-shapes"></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className="icon" class="fas fa-dog"></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className="icon" class="fas fa-dumbbell"></i>
            </Col>
          </Row>
          <Row>
            <Col className="text-center" xs={3} md={3}>
            <i className={colourClass} class={toiletIcon}></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className={colourClass} class={playgroundIcon}></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className={colourClass} class={petsAllowedIcon}></i>
            </Col>
            <Col className="text-center" xs={3} md={3}>
            <i className={colourClass} class={exerciseFacilitiesIcon}></i>
            </Col>
          </Row>
      </Modal.Body>
      <Modal.Footer className="modalFooter">
        <p>Park added by</p>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ParkModal;
