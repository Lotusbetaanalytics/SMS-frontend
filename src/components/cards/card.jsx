import React from 'react'
import styles from './styles.module.css'

const CardTwo = ({name}) => {
  
  return (
    <div className={styles.container2}>
    <div className={styles.left_container}>
      <div className={styles.user}>Hi {name} !</div>
      <div className={styles.message}>its nice seeing you again</div>
      <div><button className={styles.check}>Check Notification</button> </div>
    </div>
</div>
  )
}

export default CardTwo