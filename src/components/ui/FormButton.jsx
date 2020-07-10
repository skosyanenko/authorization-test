import React from 'react';
import Button from '@material-ui/core/Button';

const FormButton = ({ text, disabled }) => {
    return ( 
        <Button 
            variant="contained"
            disabled={disabled}
            type="submit" 
            className="form__button"
        >
            {text}
        </Button>
    );
}
 
export default FormButton;