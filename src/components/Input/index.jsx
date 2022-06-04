import React from "react";
import styles from "./styles.module.css";

function Input({label,type,onChange,value,placeholder}) {
  return <div className={styles.inputContainer}>
            <div className={styles.label}>{label}</div>
            <input
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    </div>;
}

export default Input;
