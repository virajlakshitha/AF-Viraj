import React, {Component} from 'react';
import './DocHome.css';
import axios from 'axios';
import api from '../Urls';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';

export default class DocHome extends Component {
    constructor(props){
        super(props);
        this.state={
            queue: [],
            patient: [],
            id: '',
            status: 'Hold'
        };
        this.getAll();
    }
    getQueue(){
        this.state.queue.map(queue=>{
            var ids=queue.patient;
            axios.get(api.API+"patient/"+ids).then(res=>{
                this.setState({
                    patient: res.data.data || res.data
                });
            })
        });

    }
    getAll(){
        axios.get(api.API+"queue/Nishantha").then(res=>{
            this.setState({
                    queue: res.data.data || res.data
            });
            this.getQueue();
        });
    }
    changeButton(val){
        if(val === 'Run'){
            this.state.status= 'Hold';
            document.getElementById("but").style.color = "red";
            document.getElementById("but").innerHTML = "Hold Queue";
        }
        else if(val === 'Hold'){
            this.state.status= 'Run';
            document.getElementById("but").style.color = "blue";
            document.getElementById("but").innerHTML = "Run Queue";
        }
    }
    changeDocOnline(event){
        event.preventDefault();
        event.stopPropagation();
        if(this.state.status==='Run'){
            axios.delete(api.API+"doctor/Nishantha").then(res=>{
                this.changeButton('Run');
            }).catch(err=>{
                alert(err);
            });
        }
        else{
            axios.post(api.API+"doctor/",{name: 'Nishantha'}).then(res=>{
                this.changeButton('Hold');
            }).catch(err=>{
                alert(err);
            });
        }
    }
    removePatient(id){
        var ids=id;
        axios.delete(api.API+"queue/"+ids).then(res=>{
            if(res.status == 200){
                alert("Successfully deleted");
            }
        }).catch(err=>{
            alert(err);
        });
    }
    render() {
        return (
            <div className={"DocHome"}>
                <NavBar/>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <tr>
                                <td className={"left-field-d"}>Name </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Dr. Wasanatha</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>No. of Patients </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>{this.state.queue.length}</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Queue Status </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Open</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Queue Type </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Regular</td>
                            </tr>
                            <div className={"inside"}>
                                <button type="button" class="btn btn-primary" id="but" onClick={event => this.changeDocOnline(event)}>{this.state.status} Queue</button>
                            </div>
                        </Panel.Body>
                    </Panel>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className={"field-border"}>Patient HIN</th>
                                    <th scope="col" className={"field-border"}>Name</th>
                                    <th scope="col" className={"field-border"}>Age</th>
                                    <th scope="col" className={"field-border"}>Sex</th>
                                    <th scope="col" className={"field-border"}>Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.patient.map(patient=>
                                    <tr class="table-active" key={patient.id}>
                                        <td className={"field-border-1"}>{patient.hin}</td>
                                        <td className={"field-border-1"}>{patient.name}</td>
                                        <td className={"field-border-1"}>{patient.age}</td>
                                        <td className={"field-border-1"}>{patient.sex}</td>
                                        <td className={"field-border-1"}>{patient.remarks}</td>
                                        <td className={"field-border-1"}>
                                            <Button bsStyle="primary" onClick={event=>this.removePatient(patient._id)}>Dismiss</Button>
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </Panel.Body>
                    </Panel>

                </div>
            </div>
        );
    }
}