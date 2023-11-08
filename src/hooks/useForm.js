import { useState } from 'react';

function useForm(options) {
  const [data, setData] = useState(options?.initialValues || {});
  const [errors, setErrors] = useState({});

  const handleChange = (fieldname, transformer) => (e) => {
    const value = (transformer) ? transformer(e.target.value) : e.target.value;
    setData({
      ...data,
      [fieldname]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validators = options?.validators;
    if (validators) {
      let valid = true;
      const errs = {};
      for (const fieldname in validators) {
        if (Object.hasOwnProperty.call(validators, fieldname)) {
          const value = data[fieldname];
          const validator = validators[fieldname];
          if (validator?.required?.value && !value) {
            valid = false;
            errs[fieldname] = validator.required.message;
          }
          else {
            const minimum = validator?.minimum;
            if (minimum?.value && parseInt(minimum) > value.length) {
              valid = false;
              errs[fieldname] = minimum.message;
            }
          }
        }
      }

      if (!valid) {
        setErrors(errs);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit(e, data);
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
  };
}

export default useForm;
