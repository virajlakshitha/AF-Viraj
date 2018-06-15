import React, {Component} from 'react';
import './Questionnaire.css';
import axios from 'axios';
import api from '../Urls';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';

export default class Questionnaire extends Component{
    validation(){

    }
    onSubmit(abc){
        axios.post(api.API+"question/",{
            name : document.getElementById("name1").value,
            relateTo :document.getElementById("name2").value,
            remarks :document.getElementById("name3").value,
            question :document.getElementById("name4").value,
            answer: ''
        }).then(res=>{
            alert("Added");
        }).catch(err=>{
            alert(err);
        });
    }

    render() {
        return (
            <div className={"Questionaire"}>
                <NavBar/>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">Add Questions</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <form onSubmit={() => this.onSubmit(this)}>
                                <div class="form-group has-success">
                                    <label class="form-control-label">Name</label>
                                    <input type="text" class="form-control is-valid" id="name1" required={"true"}/>
                                </div>
                                <div class="form-group has-success">
                                    <label class="form-control-label">Relate To</label>
                                    <input type="text" class="form-control is-valid" id="name2" required={"true"}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleTextarea">Remarks</label>
                                    <textarea class="form-control" id="name3" rows="3" required={"true"}></textarea>
                                </div>
                                <div class="form-group has-success">
                                    <label class="form-control-label">Question</label>
                                    <input type="text" class="form-control is-valid" id="name4" required={"true"}/>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </Panel.Body>
                    </Panel>
                    {/*<div className={"raw"}>*/}
                        {/*<div className="col-md-8" style={{"position":"center"}}>*/}
                        {/*<div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>*/}
                        {/*<div class="card-header">Patient Information</div>*/}
                        {/*<div class="card-body">*/}
                            {/*<form onSubmit={() => this.onSubmit(this)}>*/}
                                {/*<div class="form-group has-success">*/}
                                    {/*<label class="form-control-label">Name</label>*/}
                                    {/*<input type="text" class="form-control is-valid" id="name1"/>*/}
                                {/*</div>*/}
                                {/*<div class="form-group has-success">*/}
                                    {/*<label class="form-control-label">Relate To</label>*/}
                                    {/*<input type="text" class="form-control is-valid" id="name2"/>*/}
                                {/*</div>*/}
                                {/*<div class="form-group">*/}
                                    {/*<label for="exampleTextarea">Remarks</label>*/}
                                    {/*<textarea class="form-control" id="name3" rows="3"></textarea>*/}
                                {/*</div>*/}
                                {/*<div class="form-group has-success">*/}
                                    {/*<label class="form-control-label">Question</label>*/}
                                    {/*<input type="text" class="form-control is-valid" id="name4"/>*/}
                                {/*</div>*/}
                                {/*<button type="submit" class="btn btn-primary">Submit</button>*/}
                            {/*</form>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                    {/*</div>*/}
                </div>
                 {/*</div>*/}
            </div>
        );
    }
};