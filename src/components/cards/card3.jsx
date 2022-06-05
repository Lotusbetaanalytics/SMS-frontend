import React from 'react'
import styles from "./styles.module.css"
const Card3 = ({number,label,bgColor,iconColor,icon,labelColor,bgkColor}) => {
  return (

    <div className={styles.card_container} style= {{backgroundColor:bgkColor}}>
            <div className={styles.card_icons} style= {{backgroundColor:bgColor,marginTop:"10px",marginBottom:"10px",color:iconColor,height:"50px",width:"50px",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"30px"}}>{icon}</div>
            <div className={styles.number}>{number}</div>
            <div className={styles.label} style= {{backgroundColor:labelColor,padding:".5rem .5rem",width:"100%"}}>{label}</div> 
    </div>
  )
}

export default Card3;