import React, {Component} from 'react';
import './App.css';
import SanPham from './components/SanPham/SanPham';

class App extends Component{

  state = {
    sanPham : [
      { masanpham: 'MSP01', tensanpham: 'Iphone5', gia: 3000000+'VND',noidung:'Máy tốt, rẻ'},
      { masanpham: 'MSP02', tensanpham: 'Iphone6', gia: 4000000+'VND' ,noidung:'Máy 99%'},
      { masanpham: 'MSP03', tensanpham: 'Iphone7', gia: 5000000+'VND' ,noidung:'Máy nhập từ Mỹ'}
    ]   
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
        <h2>ReactJS-State</h2>
         <SanPham
           masanpham = {this.state.sanPham[0].masanpham}
           tensanpham = {this.state.sanPham[0].tensanpham}
           gia = {this.state.sanPham[0].gia}>
           Chi tiết : {this.state.sanPham[0].noidung}
         </SanPham>

         <SanPham
           masanpham = {this.state.sanPham[1].masanpham}
           tensanpham = {this.state.sanPham[1].tensanpham}
           gia = {this.state.sanPham[1].gia}>
           Chi tiết : {this.state.sanPham[1].noidung}
         </SanPham>

         <SanPham
           masanpham = {this.state.sanPham[2].masanpham}
           tensanpham = {this.state.sanPham[2].tensanpham}
           gia = {this.state.sanPham[2].gia}>
           Chi tiết : {this.state.sanPham[2].noidung}
         </SanPham>
        </header>
      </div>
    );
  }
}

export default App;
