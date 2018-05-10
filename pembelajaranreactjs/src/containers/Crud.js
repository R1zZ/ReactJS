import React, {Component} from 'react';
import {button} from 'react-bootstrap';
import ProdukItem from './ProdukItem';
import '../css/Home.css' ;

const produk = [
    {
        nama: 'HP',
        harga: '1000000'
    },
    {
        nama: 'Komputer',
        harga: '1080000'
    }
];

localStorage.setItem('produk', JSON.stringify(produk));

class Crud extends Component{
    constructor(props){
        super(props);

        this.state = {
            produk: []
        };    

        this.onDelete = this.onDelete.bind(this);
    }

    componentWillMount(){
        this.getProduk();
    }

    getProduk(){
        const produk = JSON.parse(localStorage.getItem('produk'));

        this.setState({produk});        
    }

    onDelete(nama){
        console.log(nama);
    }
    
    render(){
        return(
            <div className="Home">
                <h1>Kelola Produk</h1>
                {
                    this.state.produk.map(produk => {
                        return(
                            <ProdukItem 
                                key={produk.nama}
                                nama={produk.nama}
                                harga={produk.harga}
                                onDelete={this.onDelete}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Crud;