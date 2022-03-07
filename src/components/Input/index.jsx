import React from "react";
import styles from "./styles.module.css";

function Input({type,placeholder,onChange,value}) {
  return <div className={styles.inputContainer}>
              <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>;
}

export default Input;
