import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import fire from '../config/Fire';
import '../css/Login.css';

class Fromlogin extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state = {
            email:'',
            password:''
        };
    }

    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
            console.log(u);
        }).catch((error) =>{
            console.log(error);
        });
    }

    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .catch((error) =>{
            console.log(error);
        });
    }

    handleChange(e){
        this.setState({ [e.target.name]: e.target.value})
    }
    
    render(){
        return(
            <div className="Login">
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail">Email Address</label>
                        <input 
                            value={this.state.email}
                            onChange={this.handleChange}
                            type="email"
                            name="email"
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailhelp"
                            placeholder="Masukan Email"
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword">Password</label>
                        <input 
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            name="password"
                            className="form-control"
                            id="exampleInputPassword"
                            placeholder="Password"
                        />
                        <button
                            type="submit"
                            onClick={this.login}
                            className="btn btn-primary"
                        >Login</button>
                        <Button
                            onClick={this.signup}
                            className="btn btn-success"
                        >Signup</Button>                        
                    </div>
                </form>
            </div>
        );
    }
}

export default Fromlogin;