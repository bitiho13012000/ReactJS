import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SanPham from './components/SanPham/SanPham';

class App extends Component{
  render(){
    return(
      <div className="App">
        <header className="App-header">
        <h2>Cửa Hàng Điện Thoại ReactJS</h2>
          <SanPham masanpham="MSP01" tensanpham="Iphone5" gia="10000000VND">
            <i>Máy chính hãng 100%</i>
          </SanPham>
          <SanPham masanpham="MSP02" tensanpham="SamSung" gia="9000000VND">
          <i>Máy rẻ nhưng tốt</i>
          </SanPham>
          <SanPham masanpham="MSP03" tensanpham="Iphone6" gia="7000000VND">
          <i>Máy lâu năm nhưng vẫn còn ngon</i>
          </SanPham>
          <SanPham masanpham="MSP04" tensanpham="Iphone7" gia="5000000VND">
          <i>Máy nhập từ Mỹ khá oke</i>
          </SanPham>
          <SanPham masanpham="MSP05" tensanpham="IphoneX" gia="10000000VND">
         <i>Dạo này Iphone 11 ra nên IphoneX còn có 10 triệu thôi</i>
          </SanPham>
        </header>
      </div>
    );
  }
}






export default App;
