import React from 'react'
import Cards from '../cards'
import { FcDepartment,FcGraduationCap} from "react-icons/fc";
import { CgAwards } from "react-icons/cg";
import {  MdOutlineAssessment} from "react-icons/md";
import styles from './styles.module.css'
import data from '../../data';
import { DoughnutChart } from '../chart/doughurt';
import { VerticalChart } from '../chart/verticalChart';
const Info = () => {

  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const mystudentDetails = myDetail;
  console.log(mystudentDetails)
    const {department,faculty,session,cgpa,designated_course_adviser,designated_HOD,designated_dean_of_faculty,vice_chancellor,notice_board} = data
  return (
    <div className={styles.infoContainer}>
        <div className={styles.salutation}>
            <div className={styles.hi}>Hi {mystudentDetails && mystudentDetails.first_name}  {mystudentDetails && mystudentDetails.middle_name}</div>
            <div className={styles.salute}>Welcome Back</div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardSize}>
            <Cards 
            bgColor={'rgba(45, 156, 219, 0.2)'}
            departmentName={department}
            title={"Department"}
            icon={<FcDepartment/>}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<CgAwards/>}
            bgColor={'rgba(250, 179, 179, 0.35)'}
            departmentName={faculty}
            title={"Faculty"}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<MdOutlineAssessment/>}
            bgColor={'#8AFAA359'}
            departmentName={session}
            title={"Session"}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<FcGraduationCap/>}
            bgColor={'rgba(250, 179, 179, 0.35)'}
            departmentName={cgpa}
            title={"CGPA"}
            />
            </div>
        </div>
        <div className={styles.graphContainer}>
            <div className={styles.statistic}>
                <DoughnutChart/>
            </div>
            <div className={styles.report}>
                <VerticalChart/>
            </div>
        </div>
        <div className={styles.courseHeader}>
            <div>Registered courses </div>   
        </div>
        <div className={styles.courseContainer}>
            
        </div>
    </div>
  )
}

export default Info