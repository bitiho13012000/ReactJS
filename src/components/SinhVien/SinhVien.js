import React from 'react';

const sinhVien = (props) => {
    return(
        <div>
            <p>{props.hoten} - Tuổi: {props.tuoi}</p>
            <p>{ props.children }</p>
        </div>
    );
}
export default sinhVien;