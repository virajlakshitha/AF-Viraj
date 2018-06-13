import React, {Component} from 'react';
import './DocHome.css';
import axios from 'axios';
import api from '../Urls';

export default class DocHome extends Component {
    constructor(props){
        super(props);
        this.state={
            queue: [],
            patient: []
        };
    }
    componentDidMount(){
        axios.get(api.API+"queue/Nishantha").then(res=>{
            this.setState({
                queue: res.data.data || res.data
            });
        });
        axios.get(api.API+"patient/"+this.state.queue.map(queue=>{queue.patient})).then(res=>{
            this.setState({
                patient: res.data.data || res.data
            });
        });
    }
    render() {
        return (
            <div className={"DocHome"}>
                <div className="nav-bar">
                    <ul>
                        <li>Dashboard</li>
                        <li>My OPD Patient</li>
                        <li>My Queue</li>
                        <li>Add Questionnaire</li>
                        <li>View Questionnaire</li>
                    </ul>
                </div>
                <div className={"bottom-content"}>

                    <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                        <div class="card-header">Patient Information</div>
                        <div class="card-body">
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
                                <td className={"left-field-d"}>No. of treated patients </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>0</td>
                            </tr>
                            <hr/>
                            <tr>
                                <td className={"left-field-d"}>Queue Type </td>
                                <td className={"left-field-d"}>:</td>
                                <td className={"right-field-d"}>Regular</td>
                            </tr>
                            <div className={"inside"}>
                                <button type="button" class="btn btn-primary">Hold Queue</button>
                                <button type="button" class="btn btn-danger">Redirect Queue</button>
                            </div>
                        </div>
                    </div>
                    <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                        <div class="card-header">Patient Information</div>
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col" className={"field-border"}>Name</th>
                                    <th scope="col" className={"field-border"}>Patient Id</th>
                                    <th scope="col" className={"field-border"}>Queue Number</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.patient.map(patient=>
                                    <tr class="table-active" key={patient.id}>
                                        <td className={"field-border-1"}>{patient._id}</td>
                                        <td className={"field-border-1"}>{patient.name}</td>
                                        <td className={"field-border-1"}>1</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}