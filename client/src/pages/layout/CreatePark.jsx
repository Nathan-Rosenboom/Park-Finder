import React, { useState } from 'react';
import axios from 'axios';

function NewPark(props){
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [streetAddress, setStreetAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [playground, setPlayground] = useState("");
    const [toilets, setToilets] = useState("");
    const [exerciseFacilities, setExerciseFacilities] = useState("");
    const [petsAllowed, setPetsAllowed] = useState("");

    const handleParkName = (event) => {
        setName(event.target.value)
    }

    const handleParkDescription = (event) => {
        setDescription(event.target.value)
    }

    const handleParkStreetAddress = (event) => {
        setStreetAddress(event.target.value)
    }

    const handleParkCity = (event) => {
        setCity(event.target.value)
    }

    const handleParkState = (event) => {
        setState(event.target.value)
    }

    const handleParkPlayground = (event) => {
        setPlayground(event.target.value)
    }

    const handleParkToilets = (event) => {
        setToilets(event.target.value)
    }

    const handleParkExerciseFacilities = (event) => {
        setExerciseFacilities(event.target.value)
    }

    const handleParkPetsAllowed = (event) => {
        setPetsAllowed(event.target.value)
    }

    const createPark = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/parks', {
            name,
            description,
            streetAddress,
            city,
            state,
            playground,
            toilets,
            exerciseFacilities,
            petsAllowed
        }).then((response) => {
            const newPark = response.data.data;
            props.setParks([
                newPark,
                ...props.parks,
            ])
        });
    }
        return (
            <div style={{marginTop: 10}}>
                <h3>Add New Park</h3>
                <form onSubmit={createPark}>
                <div className="form-group"> 
                        <label>Park Name: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={handleParkName}
                                />
                    </div>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                onChange={handleParkDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Street Address: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                onChange={handleParkStreetAddress}
                                />
                    </div>
                    <div className="form-group">
                        <label>City: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                onChange={handleParkCity}
                                />
                    </div>
                    <div className="form-group">
                        <label>State: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                onChange={handleParkState}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="playground" 
                                    onChange={handleParkPlayground}
                                    />
                            <label className="form-check-label">Playground</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="toilets" 
                                    onChange={handleParkToilets}
                                    />
                            <label className="form-check-label">Toilets</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="exerciseFacilities" 
                                    onChange={handleParkExerciseFacilities}
                                    />
                            <label className="form-check-label">Exercise Facilities</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="checkbox" 
                                    name="parkOptions" 
                                    id="petsAllowed" 
                                    onChange={handleParkPetsAllowed}
                                    />
                            <label className="form-check-label">Pets Allowed</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add Park" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

    export default NewPark;