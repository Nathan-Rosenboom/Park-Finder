import React, { useEffect } from 'react';
import Navbar from "./Navbar";
import GlobalStore from "../../../utils/GlobalStore"
import { useHistory } from "react-router-dom";
import axios from 'axios'

function PublicMaster(props) {
    const store = GlobalStore.useGlobalContext()
    const history = useHistory()

    useEffect(() => {
        axios.get('http://localhost:3001/api/current-user', {
            withCredentials: true,
        })
            .then((response) => {
                console.log(response)
                store.auth.dispatchAuth({
                    type: 'set-user',
                    payload: response.data.data
                })
            }).catch((err) => {
                if(err.response.status === 401){
                    return history.push('/')
                }
                console.log({err});
            })
    }, [])
    return (
        <main {...props}>
            <Navbar />
        {props.children}
        </main>

    )
}

export default PublicMaster;