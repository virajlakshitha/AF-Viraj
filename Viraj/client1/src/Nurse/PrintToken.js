import React,{Component} from 'react';
import './PrintToken.css';
import axios from 'axios';
import api from '../Urls';
import Patient from './PatientDetails';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';

export default class PrintToken extends Component{
    constructor(props){
        super(props);
        this.state={
            queue: []
        }
    }
    componentDidMount(){
        axios.get(api.API+"queue").then(res=>{
            this.setState({
                queue: res.data.data || res.data
            });
        });
    }
    printToken(event){
        window.print();
    }
    render(){
        return(
            <div>
                <NavBar/>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Patient Information</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body><Patient/></Panel.Body>
                    </Panel><Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Print Token</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <div class="card-body">
                                <label class="card-text">Token Number : </label>
                                <label>{this.state.queue.length+1}</label>
                                <label id={"token-button"}>
                                    <button type="button" class="btn btn-secondary" onClick={event => this.printToken(event)}>Print Token</button>
                                </label>
                            </div>
                        </Panel.Body>
                    </Panel>

                    {/*<div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>*/}
                        {/*<div class="card-header">Patient Information</div>*/}
                        {/*<div class="card-body">*/}
                            {/*<Patient/>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*<div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>*/}
                        {/*<div class="card-header">Print Token</div>*/}
                        {/*<div class="card-body">*/}
                            {/*<div class="card text-white bg-success mb-3" style={{"max-width": "20rem;"}}>*/}
                                {/*<div class="card-body">*/}
                                    {/*<label class="card-text">Token Number : </label>*/}
                                    {/*<label>{this.state.queue.length+1}</label>*/}
                                    {/*<label id={"token-button"}>*/}
                                        {/*<button type="button" class="btn btn-secondary" onClick={event => this.printToken(event)}>Print Token</button>*/}
                                    {/*</label>*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                </div>
            </div>
        );
    }
}