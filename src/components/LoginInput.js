import { Field } from 'formik';
import './css/LoginInput.css';
const LoginInput = ({ inputName }, ...props) => {
  return (
    <div className='loginInputGroup'>
      <p className='loginInputName'>{inputName}</p>
      <Field className='loginInputField' {...props} />
    </div>
  );
};

export default LoginInput;
