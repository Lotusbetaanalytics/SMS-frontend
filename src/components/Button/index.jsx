import React from 'react'
import styles from "./styles.module.css";
const Button = ({handler,buttonName}) => {
  return (
    <div className={styles.customBtn}>
        <button type='button' 
         onClick={handler}> {buttonName} </button>
    </div>
  )
}

export default Button