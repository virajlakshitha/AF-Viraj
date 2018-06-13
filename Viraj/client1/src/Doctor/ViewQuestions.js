import React,{Component} from 'react';
import './ViewQuestions.css';
import axios from 'axios';
import api from '../Urls';

export default class ViewQuestions extends Component{
    state={
        question: []
    };
    componentDidMount(){
        axios.get(api.API+"question").then(res=>{
            this.setState({
                question: res.data.data || res.data
            });
        })
    }
    render(){
        return(<div>
                <div className="nav-bar">
                    <ul>
                        <li>Dashboard</li>
                        <li>My OPD Patients</li>
                        <li>My Queue</li>
                        <li>Questionnaire</li>
                    </ul>
                </div>
                <div className={"bottom-content"}>
                    <div class="card border-primary mb-3" style={{"max-width": "20rem;"}}>
                        <div class="card-header">Patient Information</div>
                        <div class="card-body">
                            <table class="table table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Type</th>
                                    <th scope="col">Remarks</th>
                                </tr>
                                </thead>
                                <tbody>
                                {this.state.question.map(question=>
                                    <tr class="table-active" key={question.id}>
                                        <td>{question.question}</td>
                                        <td>{question.answer}</td>
                                        <td>{question.remarks}</td>
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