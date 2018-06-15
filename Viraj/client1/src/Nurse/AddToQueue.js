import React, { Component } from 'react';
import './AddToQueue.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios';
import api from '../Urls';
import Patient from './PatientDetails';
import dateFormat  from 'dateformat';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';
var now = new Date();

class App extends Component {
    constructor(props){
        super(props);
        this.state={
            doctors: [],
            doctor: '',
            nurse: '',
            patient: '',
            time: dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT"),
            remarks:''
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
        this.state.doctor=event.target.value;
    }
    onAssigByChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.state.nurse= event.target.value;
    }
    onRemarksChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.state.remarks=event.target.value;
    }
    onSubmit(event){
        alert("abc");
        event.preventDefault();
        event.stopPropagation();
        axios.post(api.API+"queue",{
            doctor:document.getElementById("exampleSelect2").value,
            patient:'abc',
            time:dateFormat(now),
            assignedBy:document.getElementById("assign").value,
            remarks: document.getElementById("exampleTextarea").value
        }).then(res=>{
            alert("done");
        }).catch(err=>{
            alert("error");
        });
        this.setState({
            doctor: '',
            nurse: '',
            patient: '',
            time: '',
            assignedBy: ''
        })
    }
    render() {
    return (<div>
            <NavBar/>
            <div className={"bottom-content"}>
                {/*<div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>*/}
                    {/*<div class="card-header">Patient Information</div>*/}
                    {/*<div class="card-body">*/}
                        {/*<Patient/>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body><Patient/></Panel.Body>
                </Panel>
                <Panel bsStyle="primary">
                    <Panel.Heading>
                        <Panel.Title componentClass="h3">Add to Queue</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <form onSubmit={event => this.onSubmit(event)}>
                            <div class="form-group">
                                <label for="exampleSelect2">Assign To</label>
                                <select multiple="" class="form-control" id="exampleSelect2" onChange={event=>this.onDoctorChange(event)}>
                                    {this.state.doctors.map(doctor=>
                                        <option value={doctor.name}>Dr. {doctor.name}</option>
                                    )}
                                </select>
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Date and Time</label>
                                <input type="text" class="form-control is-valid" id="inputValid" value={dateFormat(now, "dddd, mmmm dS, yyyy, h:MM:ss TT")}/>
                            </div>
                            <div class="form-group has-success">
                                <label class="form-control-label">Assigned By</label>
                                <input type="text"class="form-control is-valid" id="assign" onChange={event => this.onAssigByChange(event)} required={"true"}/>
                            </div>
                            <div class="form-group">
                                <label for="exampleTextarea">Remarks</label>
                                <textarea class="form-control" id="exampleTextarea" rows="3" required={"true"}></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
                        </form>
                    </Panel.Body>
                </Panel>
                {/*<div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>*/}
                    {/*<div class="card-header">Add to Queue</div>*/}
                    {/*<div class="card-body">*/}

                    {/*</div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
  }
}

export default App;
