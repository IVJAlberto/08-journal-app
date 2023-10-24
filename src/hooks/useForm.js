import { useEffect, useState } from "react";

export const useForm = (initialForm = {}, formValidations = {}) => {

    const [formState, setFormState] = useState( initialForm );
    const [formValidation, setformValidations] = useState({

    });

    useEffect(() => {
        createValidators();
    }, [ formState ])
    

    const onInputChange = ({target}) => {
        const { name, value } = target;
        setFormState({
            ...formState, 
            [ name ]: value
        })
    }

    const onResetForm = () => {
        setFormState( initialForm )
    }

    const createValidators = () => {

        const formCheckValues = {};
        for (const formField of Object.key(formValidations)) {
            const [ fn, errorMessage = 'Error de validación.'] = formValidations[formField];

            formCheckValues[`${ formField }Valid`] = fn( formState[formField] ) ? null : errorMessage;

        }

        setFormState( formCheckValues );

    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        ...formValidation,
    }

}