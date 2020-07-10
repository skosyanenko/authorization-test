import React from 'react';

const FormHead = ({ title }) => {
    return ( 
        <div className="main__head">
            <h1 className="main__head-title">{title}</h1>
            <h4 className="main__head-subtitle">Введите свои данные</h4>
        </div>
    );
}
 
export default FormHead;