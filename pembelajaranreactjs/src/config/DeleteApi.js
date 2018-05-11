import React, {Component} from "react";
import axios from 'axios';

class DeleteApi extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:'',
            name:'',
        }; //deklarasi state array
    }

    handleChange = event => {
        this.setState({id: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        //PemanggilanApi
        axios.delete(`https://jsonplaceholder.typicode.com/users/${this.state.id}`)
            .then(response => {
                const id = response.data;
                this.setState({id});
            })
    }

    render(){
        console.log(this.state.id)
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Person ID:
                        <input
                            type="type"
                            name="id"
                            onChange={this.handleChange}
                        />
                    </label>
                    <button type="submit">Delete</button>
                </form>
            </div>

        );
    }
}

export default DeleteApi;