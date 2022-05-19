import React from 'react'
import styles from './styles.module.css'


const Cards = ({bgColor,body,title,icon,iconBorder,iconColor}) => {
   
  return (
    <div className={styles.container}>
            <div className={styles.icons} style= {{backgroundColor:bgColor,border:iconBorder,color:iconColor}}>{icon}</div>
            <div className={styles.card_body}>
                <div className={styles.title}>{title}</div>
                <div className={styles.body}>{body}</div>
            </div>
            
       
    </div>
  )
}

export default Cards