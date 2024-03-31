"use client";
import { useState } from "react";
import styles from "./languageSwitcher.module.css";

const LanguageSwitcher = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <div
        class={
          isOpen ? styles.dropdownContainerOpen : styles.dropdownContainerClose
        }
      >
        <a
          href="/signup/"
          role="menuitem"
          data-testid="language-item"
          class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU gWxfeL"
        >
          <span
            href="/signup/"
            class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS"
          >
            English
          </span>
        </a>
        <a
          href="/es/signup/"
          role="menuitem"
          data-testid="language-item"
          class="sc-a9e82213-0 sc-a9e82213-5 ikAZaU gWxfeL"
        >
          <span
            href="/es/signup/"
            class="sc-a9e82213-1 sc-a9e82213-6 daWfLx bcYHMS"
          >
            Español
          </span>
        </a>
      </div>
      <button className={styles.dropdownButton} onClick={() => setOpen(!isOpen)}>
        <div class="sc-a9e82213-2 hxVXWp">
          <svg
            height="17"
            viewBox="0 0 20 20"
            width="17"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0C4.5 0 0 4.5 0 10s4.5 10 10 10 10-4.5 10-10S15.5 0 10 0zM9 17.9C5.1 17.4 2 14 2 10c0-.6.1-1.2.2-1.8L7 13v1c0 1.1.9 2 2 2v1.9zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1H6V8h2c.6 0 1-.4 1-1V5h2c1.1 0 2-.9 2-2v-.4c2.9 1.2 5 4.1 5 7.4 0 2.1-.8 4-2.1 5.4z"
              fill="#5E5E5E"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <span class="sc-a9e82213-1 bfnwlE">English</span>
        <div class="sc-a9e82213-3 jClUTf">
          <svg
            fill="none"
            height="5"
            viewBox="0 0 9 5"
            width="9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              d="M4.35156 2.80708L2.33394 0.789472C1.78653 0.24205 0.898985 0.242052 0.351563 0.789472L4.35156 4.78946L8.35156 0.789472C7.80411 0.242052 6.91658 0.242052 6.36917 0.789472L4.35156 2.80708Z"
              fill="#5E5E5E"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
