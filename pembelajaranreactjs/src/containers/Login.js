import React, {Component} from 'react';
import fire from '../config/Fire';
import Menu from './Menu';
import Formlogin from './Fromlogin';
import '../css/Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            user: {},
        };
    }

    componentDidMount(){
        this.authListener();
    }

    authListener(){
        fire.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
            } else {
                this.setState({user:null});
            }
        });
    }
    
    render(){
        return(
            <div className="Login">
               {this.state.user ? (<Menu />) : (<Formlogin/>)}
            </div>
        );
    }
}

export default Login;