import React from 'react';
import { Link } from 'react-router-dom';

const FormFooter = ({ data: {to, label, question} }) => {
    return (  
        <div className="main__footer">
            <span className="main__footer-question">{question}</span>
            <Link to={to} className="main__footer-link">{label}</Link>
        </div>
    );
}
 
export default FormFooter;