import React, { Component } from 'react';
import './AddToQueue.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import api from '../Urls';
import Patient from './PatientDetails';

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            doctors: [],
            doctor: '',
            nurse: '',
            patient: ''
        };
    }
    componentDidMount(){
        axios.get(api.API+"doctor").then(res=>{
            this.setState({
                doctors: res.data.data || res.data
            });
        })
    }
    onDoctorChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            doctor: event.target.value
        })
    }
    onAssigByChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            nurse: event.target.value
        })
    }
    onDateTimeChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            patient: 'abc'
        })
    }
    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        axios.post(api.API+"queue",{doctor:this.state.doctor, patients:this.state.patient, assignedBy:this.state.nurse}).then(res=>{
            alert("done");
        }).catch(err=>{
            alert("error");
        });
        this.setState({
            doctor: '',
            nurse: '',
            patient: ''
        })
    }
    render() {
    return (<div>
            <div className="nav-bar">
                <ul>
                    <li>Patient Overview</li>
                </ul>
            </div>
            <div className={"bottom-content"}>
                <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                    <div class="card-header">Patient Information</div>
                    <div class="card-body">
                        <Patient/>
                    </div>
                </div>
                <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                    <div class="card-header">Add to Queue</div>
                    <div class="card-body">
                        <form onSubmit={event => this.onSubmit(event)}>
                            <div class="form-group">
                                <label for="exampleSelect2">Assign To</label>
                                <select multiple="" class="form-control" id="exampleSelect2" onChange={event=>this.onDoctorChange(event)}>
                                    {this.state.doctors.map(doctor=>
                                        <option>Dr. {doctor.name}</option>
                                    )}
                                </select>
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Date and Time</label>
                                <input type="text"class="form-control is-valid" id="inputValid" onChange={event => this.onDateTimeChange(event)}/>
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Assigned By</label>
                                <input type="text"class="form-control is-valid" id="inputValid" onChange={event => this.onAssigByChange(event)}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleTextarea">Remarks</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
