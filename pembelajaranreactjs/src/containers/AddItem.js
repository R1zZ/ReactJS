import React, { Component } from 'react';
import '../css/Home.css';

class AddItem extends Component {
    constructor(props) {
        super(props)

        this.onSubmit = this.onSubmit.bind(this);
    }

    //fungsi submit
    onSubmit(event) {
        event.preventDefault();
        this.props.onAdd(this.namaInput.value, this.hargaInput.value);
        this.namaInput.value = '';
        this.hargaInput.value = '';
    }



    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Tambah</h3>
                <input
                    placeholder="Nama"
                    ref={namaInput => this.namaInput = namaInput}
                />
                <input
                    placeholder="Harga"
                    ref={hargaInput => this.hargaInput = hargaInput}
                />
                <button>Tambah</button>
                <hr />
            </form>
        );
    }
}

export default AddItem;