import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import styles from './styles.module.css'

const CardTwo = ({name}) => {
  const navigate = useNavigate()
  const noticeHandler = () =>{
    navigate("/student/notice")
  }
  return (
    <div className={styles.container2}>
    <div className={styles.left_container}>
      <div className={styles.user}>Hi {name} !</div>
      <div className={styles.message}>its nice seeing you again</div>
      <div><button className={styles.check} onClick={noticeHandler}>Check Notification</button> </div>
    </div>
</div>
  )
}

export default CardTwo