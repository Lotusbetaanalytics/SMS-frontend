import React from 'react'
import styles from './styles.module.css'
import { FcDepartment} from "react-icons/fc";

const Cards = ({bgColor,departmentName,title,icon}) => {
   
  return (
    <div className={styles.container} style= {{backgroundColor:bgColor}}>
        <div className={styles.icons}>{icon}</div>
        <div className={styles.department}>{title}</div>
        <div className={styles.departmentName}>{departmentName}</div>
    </div>
  )
}

export default Cards