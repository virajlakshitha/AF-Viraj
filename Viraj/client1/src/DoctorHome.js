import React, {Component} from 'react';
import './Doctor/DocHome.css';
import Doc from './Doctor/DocHome';
import Question from './Doctor/Questionnaire';
import ViewQuestion from './Doctor/ViewQuestions';
import AddToQueue from './Nurse/AddToQueue';
import PrintToken from './Nurse/PrintToken';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class DoctorHome extends Component{
    render(){
        return(<div>
                <Router><div>
                <ul>
                        <li><Link to="/">Dashboard</Link></li>
                        <li><Link to="/addQuestion">Add Questions</Link></li>
                        <li><Link to="/viewQuestion">View Questions</Link></li>
                        <li><Link to="/queue">Add to Queue</Link></li>
                        <li><Link to="/token">Print Token</Link></li>
                </ul>
                <Route exact path="/" render={props => {
                    return <Doc/>
                }}/>
                <Route path="/addQuestion" render={props => {
                    return <Question/>
                }}/>
                <Route path="/viewQuestion" render={props => {
                    return <ViewQuestion/>
                }}/>
                <Route path="/queue" render={props => {
                    return <AddToQueue/>
                }}/>
                <Route path="/token" render={props => {
                    return <PrintToken/>
                }}/></div>
                </Router>
            </div>
        );
    }
}