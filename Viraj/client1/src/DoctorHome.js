import React, {Component} from 'react';
import {render,ReactDOM} from 'react-dom';
import './Doctor/DocHome.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import {DocHome} from './Doctor/DocHome';
import {Questionnaire} from './Doctor/Questionnaire';
import {ViewQuestions} from './Doctor/ViewQuestions';
import {AddToQueue} from './Nurse/AddToQueue';
import {PrintToken} from './Nurse/PrintToken';
import {Header} from './Header';

export const DoctorHome = (props) => {
    return(
        <div>
            <Router>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/a">qq</Link></li>
                        <li><Link to="/b">aa</Link></li>
                    </ul>
                    <Route exact path="/" render={props => {
                        return <DocHome/>
                    }}/>
                    <Route path="/a" render={props => {
                        return <Questionnaire/>
                    }}/>
                    <Route path="/b" render={props => {
                        return <ViewQuestions/>
                    }}/>
                </div>
            </Router>

        </div>
    );
}
    // ReactDOM.render(
        {/*<div>*/}
                {/*<Router>*/}
                    {/*<div>*/}
                        {/*<ul>*/}
                                {/*<li><Link to="/">Home</Link></li>*/}
                                {/*<li><Link to="/a">qq</Link></li>*/}
                                {/*<li><Link to="/b">aa</Link></li>*/}
                        {/*</ul>*/}
                        {/*<Route exact path="/" render={props => {*/}
                            {/*return <DocHome/>*/}
                        {/*}}/>*/}
                        {/*<Route path="/a" render={props => {*/}
                            {/*return <Questionnaire/>*/}
                        {/*}}/>*/}
                        {/*<Route path="/b" render={props => {*/}
                            {/*return <ViewQuestions/>*/}
                        {/*}}/>*/}
                    {/*</div>*/}
                {/*</Router>*/}

            {/*</div>*/}
    //
    //     );
