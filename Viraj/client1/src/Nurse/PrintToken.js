import React,{Component} from 'react';
import './PrintToken.css';
import axios from 'axios';
import api from '../Urls';
import Patient from './PatientDetails';

export default class PrintToken extends Component{
    constructor(props){
        super(props);
        this.state={
            queue: []
        }
    }
    componentDidMount(){
        axios.get(api.API+"queue/Nishantha").then(res=>{
            this.setState({
                queue: res.data.data || res.data
            });
        });
    }
    printToken(){

    }
    render(){
        return(
            <div>
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
                        <div class="card-header">Print Token</div>
                        <div class="card-body">
                            <div class="card text-white bg-success mb-3" style={{"max-width": "20rem;"}}>
                                <div class="card-body">
                                    <label class="card-text">Token Number : </label>
                                    <label>{this.state.queue.length+1}</label>
                                    <label id={"token-button"}><button type="button" class="btn btn-secondary">Print Token</button></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}