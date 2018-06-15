import React,{Component} from 'react';
import './ViewQuestions.css';
import axios from 'axios';
import api from '../Urls';
import NavBar from '../NavBar';
import {Panel,FormControl,ControlLabel,FormGroup,Button,Form} from 'react-bootstrap';

export default class ViewQuestions extends Component{
    constructor(props){
        super(props);
        this.state={
            que: [],
            question: [],
            questionId: '',
            name: '',
            relateTo: '',
            remarks: '',
            ques: '',
            answer: '',
            id:''
        };
        this.displayQuestions();
    }
    validation(){
        var val1=document.getElementById("exampleTextarea-1").value;
        if (val1.match(/^\d/)) {
            alert("Input values are incorrect");
        }
        else{
            this.onSubmit();
        }
    }
    displayQuestions(){
        axios.get(api.API+"question").then(res=>{
            this.setState({
                question: res.data.data || res.data
            });
        })
    }
    getQuestion(q){
        this.state.id=q._id;
        this.state.ques=q.question;
        this.state.name=q.name;
        this.state.relateTo=q.relateTo;
        this.state.remarks=q.remarks;
        document.getElementById("exampleTextarea").value = this.state.ques;
    };
    onAnswer(event){
        event.preventDefault();
        event.stopPropagation();
        this.setState({
            answer: event.target.value
        })
    }
    onSubmit(){
        axios.put(api.API+"question/"+this.state.id,{
            name: this.state.name,
            relateTo: this.state.relateTo,
            remarks: this.state.remarks,
            question: this.state.ques,
            answer: document.getElementById("exampleTextarea-1").value
        }).then(res=>{
            alert("Successfully added the answer");
            this.displayQuestions();
        }).catch(err=>{
            alert(err);
        });
        this.setState({
            que: [],
            question: [],
            questionId: '',
            name: '',
            relateTo: '',
            remarks: '',
            ques: '',
            answer: ''
        })
    }
    render(){
        return(<div>
                <NavBar/>
                <div className={"bottom-content"}>
                    <Panel bsStyle="primary">
                        <Panel.Heading>
                            <Panel.Title componentClass="h3">View Questions</Panel.Title>
                        </Panel.Heading>
                        <Panel.Body>
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">RelateTo</th>
                                    <th scope="col">Remarks</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Answer</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.question.map(question=>
                                    <tr class="table-active" key={question.id} onClick={()=>this.getQuestion(question) }>
                                        <td>{question.name}</td>
                                        <td>{question.relateTo}</td>
                                        <td>{question.remarks}</td>
                                        <td>{question.question}</td>
                                        <td>{question.answer}</td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                            <div class="card-body">
                                <form onSubmit={() => this.validation()}>
                                    <div class="form-group">
                                        <label for="exampleTextarea">Question</label>
                                        <textarea class="form-control" id="exampleTextarea" rows="3" disabled=""></textarea>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleTextarea">Answer</label>
                                        <textarea class="form-control" id="exampleTextarea-1" rows="3" required={"true"}></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-primary">Submit</button>
                                </form>
                            </div>
                        </Panel.Body>
                    </Panel>

                </div>
            </div>
        );
    }
}