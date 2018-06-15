import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Nurse/AddToQueue';
import Token from './Nurse/PrintToken';
import DocHome from './Doctor/DocHome';
import Header from './Header';
import Doc from './DoctorHome';
import Questionnnaire from './Doctor/Questionnaire';
import ViewQuestions from './Doctor/ViewQuestions';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<Doc />, document.getElementById('root'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Token />, document.getElementById('root'));
// ReactDOM.render(<DocHome />, document.getElementById('root'));
// ReactDOM.render(<Questionnnaire />, document.getElementById('root'));
// ReactDOM.render(<ViewQuestions />, document.getElementById('root'));

class Doct  extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <div>
                        <Header/>
                    </div>
                    <Route path="/" component={Doc}/>
                    <Route path ="/viewQuestion" component={ViewQuestions}/>
                    <Route path="/addQuestion" component={Questionnnaire}/>
                    <Route path="/token" component={Token}/>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<Doct />, document.getElementById('root'));
registerServiceWorker();
