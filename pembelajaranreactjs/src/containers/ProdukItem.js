import React, {Component} from 'react';
import {button} from 'react-bootstrap';
import '../css/Home.css' ;

class ProdukItem extends Component{
    constructor(props){
        super(props);

        this.onDelete=this.onDelete.bind(this);
    }

    onDelete(){
        const {onDelete,nama}=this.props;

        onDelete(nama);
    }

    render(){
        const{ nama, harga, onDelete} = this.props;

        return(
            <div>
                <span>{nama}</span> 
                {' | '}
                <span>{harga}</span> 
                {' | '}
                <button onClick={this.onDelete}>Delete</button>
            </div>
        );
    }
}

export default ProdukItem;