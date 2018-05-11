import React, {Component} from "react";
import axios from 'axios';

class Api extends Component{
    constructor(props){
        super(props);
        this.state = {persons:[]}; //deklarasi state array
    }

    //pemanggilan API
    componentDidMount(){
        axios.get(`https://jsonplaceholder.typicode.com/users`)
        .then(response =>{
            const persons = response.data;
            this.setState({persons});
        })
    }

    render(){
        console.log(this.state.persons)
        return(
            <div>
                <h4>List Nama pada API :</h4>
                <p/>
                <ul>
                    {
                        this.state.persons.map((data,key) => {
                            return (<h5 key={key}>{data.name}</h5>)
                        })
                    }
                </ul>
            </div>

        );
    }
}

export default Api;