export default function validate(values) {
    let errors = {};
    
    if (!values.name) {
      errors.name = 'Name is required';
    } else if (values.name.length < 1) {
      errors.name = 'Name must be 1 or more characters';
    }
    return errors;
  };
  