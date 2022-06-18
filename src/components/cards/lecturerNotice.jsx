import React, { useEffect } from 'react'
import styles from './styles.module.css'
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import data  from '../data';
import { getNoticeBySourceAction } from '../../redux/Actions/lecturer/lecturerNotice';
const LecturerNotice = () => {

   const dispatch = useDispatch();
   const source = 1
   
   useEffect(()=>{
      dispatch(getNoticeBySourceAction(source))
   },[])

    const  lecturerGetNoticeByScource = useSelector((state) => state. lecturerGetNoticeByScource);
    const { getNoticeBySource } =  lecturerGetNoticeByScource;

    
  
    let slicedMessage;

  return (
    <div >
      {getNoticeBySource && getNoticeBySource ? getNoticeBySource && getNoticeBySource.map((item,i)=>(
         slicedMessage = item.message.slice(0,90) + "....",
         <Link to="/student/notification"> <div className={styles.noticeBoard2} key={i}>
                <div className={styles.infoHeader}>{item.title}</div>
                <div className={styles.noticeInfo}>{slicedMessage}</div>
                <div className={styles.author}>Source : {item.source}</div>
              </div></Link>
 

      )): (
      <div>
           {data && data.map((item) => (
              <div className={styles.noNew}>{item.message}</div> 
           ))}
        </div>
        )}
     </div>
  )
};

export default LecturerNotice