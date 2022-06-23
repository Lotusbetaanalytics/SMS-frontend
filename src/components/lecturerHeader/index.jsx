import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { BiBell } from "react-icons/bi";
import adminpic from "../../assets/profile.jpg";
import { useDispatch, useSelector } from 'react-redux';
import { lecturerDetailsAction } from '../../redux/Actions/lecturer/lecturerDetail';
const LecturerHeader = ({ title }) => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(lecturerDetailsAction());
  }, []);

  const lecturerDetails = useSelector((state) => state.lecturerDetails);
const {lecturerDetail}  = lecturerDetails;
  const username =  lecturerDetail && lecturerDetail.first_name

  return (
    <div className={styles.container}>
      <div className={styles.Title}>
        <h2>{title}</h2>  
      </div>

      <div className={styles.avatar}>
        <h3>{username}</h3>

        <div className={styles.headerbar}>
        <div className={styles.userName}>
            <button className={styles.vatar}>
            <img src={adminpic} alt="avatar" />
            </button>
          </div>
          {/* <button className={styles.bellContainer}>
              <BiBell/>
          <div className={styles.notice_count}>
              2
          </div>
          </button> */}
         
           
        </div>
      </div>
    </div>
  )
}

export default LecturerHeader