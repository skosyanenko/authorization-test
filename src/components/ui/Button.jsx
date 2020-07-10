import React, { useEffect, useState } from 'react';

const Button = ({ text, errors, values }) => {
    const [state, setState] = useState(true);

    useEffect(() => {
        setState({
            state: errors.length > 0,
        })
    }, [errors.length])

    return ( 
        <button 
            disabled={state}
            type="submit" 
            className="wrapper__button"
        >
            {text}
        </button>
    );
}
 
export default Button;