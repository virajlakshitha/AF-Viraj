import React,{Component} from 'react';
import logo from './logo.svg';
import './Header.css';
import axios from 'axios';
import api from './Urls';

export default class Header extends Component{
    render(){
        return (<div className={"header"}>
            <header className="App-header">
                <div className="App-header-left">
                    <img src={logo} className="image"/>
                </div>
            </header>
        </div>);
    }
}