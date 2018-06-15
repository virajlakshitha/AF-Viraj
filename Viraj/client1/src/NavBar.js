import React,{Component} from 'react';
import './NavBar.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class extends Component{
    render(){
        return(
            <div className="nav-bar">
                <ul>
                    <li>Dashboard</li>
                    <li>My OPD Patients</li>
                    <li>My Queue</li>
                    <li>Questionnaire</li>
                </ul>
            </div>
        );
    }
}