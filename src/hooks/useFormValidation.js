import { useCallback, useState } from "react";

function useFormValidation(initialValues) {
    const [inputValues, setInputValues] = useState(initialValues);
    const [errors, setErrors] = useState(initialValues);
    const [isValid, setIsValid] = useState(false);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setInputValues({ ...inputValues, [name]: value }); 
        setErrors({ ...errors, [name]: e.target.validationMessage }); 
        setIsValid(e.target.closest("form").checkValidity()); // проверка валидности
      };
    
      const resetForm = useCallback(
        (newValues = {}, newErrors = {}, newIsValid = false) => {
          setInputValues(newValues);
          setErrors(newErrors);
          setIsValid(newIsValid);
        },
        [setInputValues, setErrors, setIsValid]
      );
    
      return { inputValues, setInputValues, handleChange, errors, isValid, setIsValid, resetForm };
    }
    
    export default useFormValidation;