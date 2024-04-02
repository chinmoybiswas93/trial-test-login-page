"use client";
import { useState } from "react";
import styles from "./selectOptions.module.css";

const SelectOptions = ({ setDefaultCheck }) => {
  const [open, setOpen] = useState(false);

  const handleChange = () => {
    setDefaultCheck(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.dropdownBox}>
        <button onClick={() => setOpen(!open)}>
          Select Options{" "}
          <svg
            className={open ? styles.iconOpen : styles.iconClose}
            width="12"
            height="7"
            viewBox="0 0 12 7"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.00008 2.94976L8.87876 5.82845C9.65981 6.6095 10.9261 6.60949 11.7072 5.82844L6.00008 0.121338L0.292969 5.82844C1.07402 6.60949 2.34035 6.60949 3.1214 5.82844L6.00008 2.94976Z"
            ></path>
          </svg>
        </button>

        <div className={open ? styles.questionsOpen : styles.questionsClose}>
          <div className={styles.question}>
            <p>Get useful tips, inspiration, and offers via e-communication.</p>
            <div className={styles.optionsContainer}>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="first-question" id="first-yes" />
                <label htmlFor="first-yes">Yes</label>
              </div>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="first-question" id="first-no" />
                <label htmlFor="first-no">No</label>
              </div>
            </div>
          </div>
          <div className={styles.question}>
            <p>
              Tailor Typeform to my needs based on my activity.See{" "}
              <a href="/">Privacy Policy</a>
            </p>
            <div className={styles.optionsContainer}>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="second-question" id="second-yes" />
                <label htmlFor="second-yes">Yes</label>
              </div>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="second-question" id="second-no" />
                <label htmlFor="second-no">No</label>
              </div>
            </div>
          </div>
          <div className={styles.question}>
            <p>
              Enrich my data with select third parties for more relevant
              content.See <a href="/">Privacy Policy</a>
            </p>
            <div className={styles.optionsContainer}>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="third-question" id="third-yes" />
                <label htmlFor="third-yes">Yes</label>
              </div>
              <div className={styles.options}>
                <input onChange={handleChange} type="radio" name="third-question" id="third-no" />
                <label htmlFor="third-no">No</label>
              </div>
            </div>
          </div>
          <p className={styles.optionsInfo}>
            You can update your preferences in your Profile at any time
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectOptions;
