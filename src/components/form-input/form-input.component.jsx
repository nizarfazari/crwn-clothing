import './form-input.style.scss'

const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="form-group">
      <input className="form-input" {...otherProps} />
     {label && <label className={`${otherProps.value.length ? 'shrink' : ''} form-label`}>{label}</label>}
      
    </div>
  );
};

export default FormInput;
