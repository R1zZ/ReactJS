import React, {Component} from 'react';
import fire from '../config/Fire';

class Menu extends Component{
    constructor(props){
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(){
        fire.auth().signOut();
    }
    render(){
        return(
            <div className="col-md-6">
                <h1>Tampilan Menu</h1>
                <p/>
                <button onClick={this.logout}>
                    Log Out
                </button>
            </div>
        );
    }
}

export default Menu;