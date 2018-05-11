import React, {Component} from "react";
import axios from 'axios';

class PostApi extends Component {
   //deklarasi fungsi submit
    constructor(props){
        super(props);
        this.state = {name:''};
    }
    
    handleChange = event => {
        this.setState({name: event.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        const user = {
            name: this.state.name
        };

        axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(response => {
            console.log(response);
            console.log(response.data);
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Masukan Nama:
                        <input type="text" name="name" onChange={this.handleChange} />
                    </label>
                    <button type="submit">ADD</button>
                </form>
            </div>
        );
    }
}
export default PostApi;