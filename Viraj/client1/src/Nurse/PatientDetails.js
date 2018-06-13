import React, { Component } from 'react';
import './PatientDetails.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import api from '../Urls';

export default class PatientDetails extends Component{
    constructor(props) {
        super(props);
        this.state = {
            patient: []
        };
    }
    componentDidMount(){
        axios.get(api.API+"patient/5b1e6497c16de82a8084ed48").then(res=>{
            this.setState({
                patient: res.data.data || res.data
            });
        })
    }
    render(){
        return(
            <div className={"pat-details-1"}>
                <div>{this.state.patient.map(patient=>
                    <div key={patient.id}>
                        <label>{patient.name} / </label>
                        <label>{patient.sex} / </label>
                        <label>{patient.age} / </label>
                        <label>{patient.status}</label>
                    </div>
                )}
                </div>
                <div className={"pat-details-2"}>
                    {this.state.patient.map(patient=>
                        <div key={patient.id}>
                            <label>PatientID : </label>
                            <label>{patient._id}</label>
                            <label id={"dob"}>DOB : </label>
                            <label>{patient.dob}</label>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}