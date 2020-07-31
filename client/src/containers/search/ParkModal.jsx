import React, { useState } from "react";
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
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4></h4>
        <p>{props.description}</p>
        <p>
          {props.streetAddress}, {props.city}, {props.state}
        </p>
        <p><i className="icon" class="fas fa-toilet"></i><i className="icon" class="fas fa-shapes"></i><i className="icon" class="fas fa-dog"></i><i className="icon" class="fas fa-dumbbell"></i></p>
        <p>
          <i className={colourClass} class={toiletIcon}></i> <i className={colourClass} class={playgroundIcon}></i> <i className={colourClass} class={petsAllowedIcon}></i> <i className={colourClass} class={exerciseFacilitiesIcon}></i>
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ParkModal;
