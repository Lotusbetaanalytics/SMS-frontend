import React from "react";
import styles from "./styles.module.css";

function Input({type,onChange,value}) {
  return <div className={styles.inputContainer}>
              <input
            type={type}
            
            onChange={onChange}
            value={value}
        />
    </div>;
}

export default Input;
