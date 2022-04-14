import useInput from "../hooks/use-input";

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');
const BasicForm = (props) => {
  const {
    value: enteredFirstName,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetFirstName,
  } = useInput(isNotEmpty);

  const {
    value: enteredLastName,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;
  if (enteredFirstNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;

  }

  const submitHandler = (event) => {
    event.preventdefault();
    if (!formIsValid) {
      return;
    }

    console.log('submitted!');
    console.log(enteredFirstName, enteredLastName, enteredEmail);

    resetFirstName();
    resetLastName();
    resetEmail();

  }

  const firstNameClasses = firstNameInputHasError ? 'form-control invalid' : 'form-control';
  const lastNameClasses = lastNameInputHasError ? 'form-control invalid' : 'form-control';
  const emailClasses = emailInputHasError ? 'form-control invalid' : 'form-control';


  return (
    <form onSubmit={submitHandler}>
      <div className='control-group'>
        <div className={firstNameClasses}>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='name'
            value={enteredFirstName}
            onBlur={firstNameInputBlurHandler}
            onChange={firstNameChangeHandler}
          />
          {firstNameInputHasError && <p className="error-text">please enter a valid first name.</p>}
        </div>
        <div className={lastNameClasses}>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='name'
            value={enteredLastName}
            onBlur={lastNameInputBlurHandler}
            onChange={lastNameChangeHandler}
          />
          {lastNameInputHasError && <p className="error-text">please enter a valid last name.</p>}
        </div>
      </div>
      <div className={emailClasses}>
        <label htmlFor='name'>E-Mail Address</label>
        <input
          type='text'
          id='name'
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
          onChange={emailChangeHandler}
        />
        {emailInputHasError && <p className="error-text">please enter a valid email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
