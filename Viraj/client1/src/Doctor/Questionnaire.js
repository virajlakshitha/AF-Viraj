import React, {Component} from 'react';
import './Questionnaire.css';
import axios from 'axios';
import api from '../Urls';

export default class Questionnaire extends Component{
    constructor(props){
        super(props);
        this.state={
            name: '',
            relateTo: '',
            remarks: '',
            question: '',
            answer: ''
        }
    }
    onSubmit(event){
        event.preventDefault();
        event.stopPropagation();
        axios.post(api.API+"question",{name:this.state.name, relateTo:this.state.relateTo, remarks:this.state.remarks, question:this.state.question, answer:this.state.answer}).then(res=>{
            alert("Added");
        }).catch(err=>{
            alert("Error");
        });
        this.setState({
            name: '',
            relateTo: '',
            remarks: '',
            question: '',
            answer: ''
        })
    }
    onNameChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            name: event.target.value
        })
    }
    onRelateToChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            relateTo: event.target.value
        })
    }
    onRemarksChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            remarks: event.target.value
        })
    }
    onQuestionChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            question: event.target.value
        })
    }
    onAnswerChange(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            answer: event.target.value
        })
    }

    render() {
        return (
            <div className={"Questionaire"}>
                <div className="nav-bar">
                    <ul>
                        <li>Dashboard</li>
                        <li>My OPD Patients</li>
                        <li>My Queue</li>
                        <li>Questionnaire</li>
                    </ul>
                </div>

                <div className={"bottom-content"}>
                    <div className={"raw"}>
                        <div className="col-md-8" style={{"position":"center"}}>
                        <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                        <div class="card-header">Patient Information</div>
                        <div class="card-body">
                            <form onSubmit={event => this.onSubmit(event)}>
                                <div class="form-group has-success">
                                    <label class="form-control-label">Name</label>
                                    <input type="text"class="form-control is-valid" id="inputValid" onChange={event => this.onNameChange(event)}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleSelect2">Relate To</label>
                                    <select multiple="" class="form-control" id="exampleSelect2" onSelect={event => this.onRelateToChange(event)}>
                                        <option>OPD visit</option>
                                        <option>Regular visit</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="exampleTextarea">Remarks</label>
                                    <textarea class="form-control" id="exampleTextarea" rows="3" onChange={event => this.onRemarksChange(event)}></textarea>
                                </div>
                                <div class="form-group has-success">
                                    <label class="form-control-label">Question</label>
                                    <input type="text"class="form-control is-valid" id="inputValid" onChange={event => this.onQuestionChange(event)}/>
                                </div>
                                <div class="form-group">
                                    <label for="exampleTextarea">Answer</label>
                                    <textarea class="form-control" id="exampleTextarea" rows="3" onChange={event => this.onAnswerChange(event)}></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
                 </div>
            </div>
        );
    }
};