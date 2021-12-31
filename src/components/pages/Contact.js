import React, { useState } from 'react';
import FadeIn from 'react-fade-in';
import { validateEmail } from '../utils/helpers';
import emailImg from '../../assets/images/email.png';
import { Toast } from 'bootstrap';

const styles = {
  form: {
    marginLeft: "7px"
  },
  input: {
    width: '350px'
  },
  textarea: {
    width: '350px'
  },
  toastImg: {
    height: '20px'
  },
  toastZPosition: {
    zIndex: "11"
  }
}

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'userName') {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email) || !userName) {
      setErrorMessage('Email or Name is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }
    const toastElList = [].slice.call(document.querySelectorAll('.toast'))
    const toastList = toastElList.map(function (toastEl) {
      // Creates an array of toasts (it only initializes them)
      return new Toast(toastEl) // No need for options; use the default options
    });
    toastList.forEach(toast => toast.show()); // This show them
    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setUserName('');
    setMessage('');
    setEmail('');
  };

  return (
    <div className="tab-content">
      <FadeIn>
        <h1>Contact Me</h1>
        <form className="form" style={styles.form}>
          <div className="input-group mb-3" style={styles.input}>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              placeholder="Name"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3" style={styles.input}>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              placeholder="email"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </div>
          <div className="input-group mb-3" style={styles.textarea}>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="text"
              placeholder="Message"
              className="form-control"
            />
          </div>
          <button type="button" className="btn btn-dark btn-primary" id="liveToastBtn" onClick={handleFormSubmit}>Submit</button>
          <div className="toast position-fixed bottom-0 end-0 p-3" style={styles.toastZPosition}>
            <div id="liveToast" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
              <div className="toast-header">
                <img src={emailImg} alt="email" style={styles.toastImg} />
                <strong className="me-auto">Sent!</strong>
                <small>now</small>
                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
              </div>
              <div className="toast-body">
                Thanks for sending a message! Brad will get back to you soon.</div>
            </div>
          </div>
        </form >
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )
        }
      </FadeIn>
    </div >
  );
}
