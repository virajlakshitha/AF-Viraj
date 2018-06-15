import React, {Component} from 'react';
import './Questionnaire.css';
import axios from 'axios';
import api from '../Urls';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';

export default class Questionnaire extends Component{
    validation(){
        var val1=document.getElementById("name1").value;
        var val2=document.getElementById("name2").value;
        var val3=document.getElementById("name3").value;
        var val4=document.getElementById("name4").value;
        if (val1.match(/^\d/) || val2.match(/^\d/) || val3.match(/^\d/) || val4.match(/^\d/)) {
            alert("Input values are incorrect");
        }
        else{
            this.onSubmit();
        }
    }
    onSubmit(){
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
                            <form onSubmit={() => this.validation()}>
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

                </div>
            </div>
        );
    }
};