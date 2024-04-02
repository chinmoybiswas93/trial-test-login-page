"use client";
import { useState } from "react";
import styles from "./loginForm.module.css";
import SelectOptions from "../SelectOptions/SelectOptions";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);

  const [defaultCheck, setDefaultCheck] = useState(false);

  const termsSelectChange = () => {
    const buttons = document.querySelectorAll('[type="radio"]');
    buttons.forEach(item => {
      if (item.checked) {
        setDefaultCheck(true)
      }
    })
    if (!defaultCheck) {
      buttons[0].checked = true;
      buttons[2].checked = true;
      buttons[4].checked = true;
      setDefaultCheck(true);
    }
  }

  return (
    <div className={styles.container}>
      <div>
        <input type="email" name="email" id="login-email" placeholder="Email" />
      </div>
      <div className={styles.passwordBox}>
        <input
          type={showPass ? "text" : "password"}
          name="password"
          id="login-password"
          placeholder="Password"
        />
        <button
          type="button"
          className={styles.passwordIcon}
          onClick={() => setShowPass(!showPass)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
            <path d="M16 16c-.8125-.8125 1.1875-4 0-4-2.1875 0-4 1.8125-4 4s1.8125 4 4 4 4-1.8125 4-4c0-1-3.375.8125-4 0Zm0-10C5.625 6 0 14.8125 0 16.1875 0 17.625 5.625 26 16 26s16-8.8125 16-10S26.375 6 16 6Zm0 16c-3.375 0-6-2.625-6-6s2.625-6 6-6 6 2.625 6 6-2.625 6-6 6Zm0 0" />
          </svg>
        </button>
      </div>
      <div className={styles.termsCheck}>
        <label htmlFor="terms-check">
          <input onChange={termsSelectChange} type="checkbox" name="terms" id="terms-check" className={styles.termsCheckbox} />
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
      </div>

      <SelectOptions defaultCheck={defaultCheck} setDefaultCheck={setDefaultCheck}></SelectOptions>
      <div>
        <button className={styles.submitButton} type="submit">
          Create my free account
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
