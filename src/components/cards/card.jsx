import React from 'react'
import styles from './styles.module.css'
const CardTwo = ({name,header,bgColor}) => {
  return (
    <div className={styles.container2}>
    <div className={styles.header} style= {{backgroundColor:bgColor}}>{header}</div>
    <div className={styles.head}>{name}</div>
</div>
  )
}

export default CardTwo