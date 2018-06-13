import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Nurse/AddToQueue';
import Token from './Nurse/PrintToken';
import DocHome from './Doctor/DocHome';
import Header from './Header';
import Questionnnaire from './Doctor/Questionnaire';
import ViewQuestions from './Doctor/ViewQuestions';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Header />, document.getElementById('header'));
// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Token />, document.getElementById('root'));
// ReactDOM.render(<DocHome />, document.getElementById('root'));
ReactDOM.render(<Questionnnaire />, document.getElementById('root'));
// ReactDOM.render(<ViewQuestions />, document.getElementById('root'));
registerServiceWorker();