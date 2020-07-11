import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';

const FormButton = ({ text, disabled }) => {
    const [isDisabled, setDisabled] = useState(true);

    useEffect(() => {
        setDisabled(disabled);
    }, [disabled]);

    return ( 
        <Button 
            variant="contained"
            disabled={isDisabled}
            type="submit" 
            className="form__button"
        >
            {text}
        </Button>
    );
}
 
export default FormButton;