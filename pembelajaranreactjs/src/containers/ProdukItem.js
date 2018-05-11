import React, {Component} from 'react';
import {button} from 'react-bootstrap';
import '../css/Home.css' ;

const produk = [];

localStorage.setItem('produk', JSON.stringify(produk));
class ProdukItem extends Component{
    constructor(props){
        super(props);

        this.state={
            isEdit:false
        };
        this.state = {
            produk: JSON.parse(localStorage.getItem('produk')) //pengambilan data array
        };    
        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }

    //fungsi delete
    onDelete(){
        const {onDelete, nama}= this.props;
        onDelete(nama);
    }

    onEdit(){
        this.setState({isEdit:true});
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(
            this.namaInput.value, 
            this.hargaInput.value, 
            this.props.nama
        );
        this.setState({isEdit:false});
    }

    render(){
        const{ nama, harga} = this.props;

        return(
            <div>
                {
                    this.state.isEdit?(
                        <form onSubmit={this.onEditSubmit}>
                            <input 
                                placeholder="Nama" 
                                ref={namaInput =>this.namaInput=namaInput} defaultValue={nama}
                            />
                            <input 
                                placeholder="Harga" 
                                ref={hargaInput => this.hargaInput=hargaInput} defaultValue={harga}
                            />
                            <button>Save</button>
                        </form>
                    ):(
                        <div>
                            <span>{nama}</span> 
                            {' | '}
                            <span>{harga}</span> 
                            {' | '}
                            <button onClick={this.onDelete}>Delete</button>
                            {' | '}
                            <button onClick={this.onEdit}>Edit</button>
                        </div>
                    )
                }
            </div>
        );
    }
}

export default ProdukItem;