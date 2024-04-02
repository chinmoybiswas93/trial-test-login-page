"use client";
import { useState } from "react";
import styles from "./loginForm.module.css";
import SelectOptions from "../SelectOptions/SelectOptions";

const LoginForm = () => {
  // show password icon
  const [showPass, setShowPass] = useState(false);
  // check selected checkbox
  const [defaultCheck, setDefaultCheck] = useState(false);
  // email input
  const [email, setEmail] = useState(null);
  // password input
  const [password, setPassword] = useState("");

  const [isChecked, setIsChecked] = useState("");
  // errors state

  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [termsError, setTermsError] = useState(null);

  // terms and condition checkbox check
  const termsSelectChange = (e) => {
    setTermsError(null);
    setIsChecked(e.target.checked);
    const buttons = document.querySelectorAll('[type="radio"]');
    buttons.forEach((item) => {
      if (item.checked) {
        setDefaultCheck(true);
      }
    });
    if (!defaultCheck) {
      buttons[0].checked = true;
      buttons[2].checked = true;
      buttons[4].checked = true;
      setDefaultCheck(true);
    }
  };

  // email validation
  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  //  password validation
  const validatePassword = (value) => {
    const passwordRegex =
      /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  // email change
  const emailOnChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setEmailError(null);
  };

  // email blur
  const emailOnBlur = () => {
    if (email !== null) {
      if (!email.trim()) {
        setEmailError("Email cannot be left blank");
      } else if (!validateEmail(email)) {
        setEmailError("Invalid email address");
      } else {
        setEmailError(null);
      }
    }
  };

  // password on change
  const passwordOnChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    if (!value.trim()) {
      setPasswordError("Password cannot be left blank");
    } else if (!validatePassword(value)) {
      setPasswordError(
        "Password must be 8 or more characters long with a mix of letters, numbers, and symbols"
      );
    } else {
      setPasswordError(null);
    }
  };

  // password on blur
  const passwordOnBlur = () => {
    if (!password.trim()) {
      setPasswordError("Password cannot be left blank");
    } else if (!validatePassword(password)) {
      setPasswordError(
        "Password must be 8 or more characters long with a mix of letters, numbers, and symbols"
      );
    } else {
      setPasswordError(null);
    }
  };

  const handleSubmit = () => {
    if (!isChecked) {
      setTermsError(
        "Please accept the terms and conditions to finish the signup"
      );
    }

    if (!email) {
      setEmailError("Email cannot be left blank");
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.emailContainer}>
        <input
          onChange={emailOnChange}
          onBlur={emailOnBlur}
          autoFocus
          type="email"
          name="email"
          id="login-email"
          placeholder="Email"
        />
        {emailError && (
          <p className={styles.errorContainer}>
            <span className={styles.errorIcon}></span>
            {emailError}
          </p>
        )}
      </div>
      <div className={styles.passwordBox}>
        <input
          onChange={passwordOnChange}
          onBlur={passwordOnBlur}
          type={showPass ? "text" : "password"}
          name="password"
          id="login-password"
          placeholder="Password"
        />
        {passwordError && (
          <p className={styles.errorContainer}>
            <span className={styles.errorIcon}></span>
            {passwordError}
          </p>
        )}
        <button
          type="button"
          className={styles.passwordIcon}
          onClick={() => setShowPass(!showPass)}
        >
          {!showPass ? (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M16 16c-.8125-.8125 1.1875-4 0-4-2.1875 0-4 1.8125-4 4s1.8125 4 4 4 4-1.8125 4-4c0-1-3.375.8125-4 0Zm0-10C5.625 6 0 14.8125 0 16.1875 0 17.625 5.625 26 16 26s16-8.8125 16-10S26.375 6 16 6Zm0 16c-3.375 0-6-2.625-6-6s2.625-6 6-6 6 2.625 6 6-2.625 6-6 6Zm0 0" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M27.375 21.813 22 16.375V16c0-3.375-2.625-6-6-6h-.375L12 6.375C13.375 6.187 14.625 6 16 6c10.375 0 16 8.813 16 10 0 .625-1.625 3.375-4.625 5.813ZM20 25.625c-1.375.188-2.625.375-4 .375-10.375 0-16-8.375-16-9.813 0-.812 1.625-3.562 4.625-6L10 15.625V16c0 3.375 2.625 6 6 6h.375ZM6.375 4 28 25.625 25.625 28 4 6.375Zm0 0" />
            </svg>
          )}
        </button>
      </div>
      <div className={styles.termsCheck}>
        <label htmlFor="terms-check">
          <input
            onChange={termsSelectChange}
            type="checkbox"
            name="terms"
            id="terms-check"
            className={styles.termsCheckbox}
          />
          I agree to Typeform&apos;s{" "}
          <a href="/">
            <u>Terms of Service</u>
          </a>
          ,{" "}
          <a href="/">
            <u>Privacy Policy</u>
          </a>{" "}
          and{" "}
          <a href="/">
            <u>Data Processing Agreement</u>
          </a>
          .
        </label>
        {termsError && (
          <p className={styles.errorContainer}>
            <span className={styles.errorIcon}></span>
            {termsError}
          </p>
        )}
      </div>

      <SelectOptions setDefaultCheck={setDefaultCheck}></SelectOptions>
      <div>
        <button
          onClick={handleSubmit}
          className={styles.submitButton}
          type="submit"
        >
          Create my free account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
