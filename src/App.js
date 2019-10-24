import React, {Component} from 'react';

import './App.css';
import SinhVien from './components/SinhVien/SinhVien';


class App extends Component{

  state = {
    sinhVien : [
      { hoten: 'Lionel Messi', tuoi: 35, sothich: 'Ăn nhậu' },
      { hoten: 'RonalDo', tuoi: 32, sothich: 'Code' },
      { hoten: 'Neymar JR', tuoi: 30, sothich: 'Giả vờ ngã' }
    ],
    lop : '18CDTH11'
  }

  changeClick = () => {
    this.setState(
      {
        sinhVien : [
          { hoten: 'Salah', tuoi: 5, sothich: 'Đá bóng' },
          { hoten: 'Bale', tuoi: 2, sothich: 'Đá cầu' },
          { hoten: 'Countinho', tuoi: 10, sothich: 'Hát' }
        ]
      }
    );
  }

  render(){
    return(
      <div className="App">
        <header className="App-header">
        <h2>ReactJS - {this.state.lop}</h2>
        <button onClick={this.changeClick}>Change click</button>
         <SinhVien
           hoten = {this.state.sinhVien[0].hoten}
           tuoi = {this.state.sinhVien[0].tuoi} >
           Sở thích : {this.state.sinhVien[0].sothich}
         </SinhVien>

         <SinhVien
           hoten = {this.state.sinhVien[1].hoten}
           tuoi = {this.state.sinhVien[1].tuoi} >
           Sở Thích : {this.state.sinhVien[1].sothich}
         </SinhVien>

         <SinhVien
           hoten = {this.state.sinhVien[2].hoten}
           tuoi = {this.state.sinhVien[2].tuoi} >
           Sở Thích : {this.state.sinhVien[2].sothich}
         </SinhVien>
        </header>
      </div>
    );
  }
}






export default App;
