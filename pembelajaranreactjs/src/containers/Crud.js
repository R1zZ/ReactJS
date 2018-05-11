import React, {Component} from 'react';
import AddItem from './AddItem';
import ProdukItem from './ProdukItem';
import '../css/Home.css' ;

//deklarasi array
const produk = [
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
            produk: JSON.parse(localStorage.getItem('produk')) //pengambilan data array
        };    
        this.onAdd = this.onAdd.bind(this); //const untuk add
        this.onDelete = this.onDelete.bind(this); //const untuk hapus
        this.onEditSubmit=this.onEditSubmit.bind(this); //const untuk edit
    }

    componentWillMount(){
        const produk= this.getProduk();
        this.setState({produk});
    }

    //fungsi untuk ambil
    getProduk(){
        return this.state.produk
    }

    //fungsi add 
    onAdd(nama, harga){
        const produk = this.getProduk();
        produk.push({
            nama,
            harga
        });

        this.setState({produk});
    }

    //fungsi untuk menghapus
    onDelete(nama){
        const produk = this.getProduk();
        const filterProduk = produk.filter(produk => {
            return produk.nama !== nama;
        });
        this.setState({produk: filterProduk});
    }
    
    onEditSubmit(nama, harga, originalNama){
        let produk = this.getProduk();
        produk = produk.map(produk =>{
            if (produk.nama === originalNama) {
                produk.nama = nama;
                produk.harga = harga;
            }
            return produk;
        });
        this.setState({produk});
    }

    render(){
        return(
            <div className="Home">
                <h1>CRUD</h1>
                <AddItem
                    onAdd={this.onAdd}
                />
                {
                    this.state.produk.map(produk => {
                        return(
                            <ProdukItem 
                                key={produk.nama}
                                nama={produk.nama}
                                harga={produk.harga}
                                onDelete={this.onDelete}
                                onEditSubmit={this.onEditSubmit}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

export default Crud;