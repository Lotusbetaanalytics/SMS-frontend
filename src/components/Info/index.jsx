import React, { useEffect } from 'react'
import Cards from '../cards'
import { FcDepartment,FcGraduationCap} from "react-icons/fc";
import { CgAwards } from "react-icons/cg";
import {  MdOutlineAssessment} from "react-icons/md";
import styles from './styles.module.css'
import { DoughnutChart } from '../chart/doughurt';
import { VerticalChart } from '../chart/verticalChart';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../../redux/studentActions/studentAction';

const Info = () => {

    const dispatch = useDispatch();

    const details = useSelector((state) => state.details);
  
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    console.log(mystudentDetails)
    const academicData = mystudentDetails && mystudentDetails.student[0].academic_data;
    console.log(academicData)

    const student_cgpa = academicData && academicData.cgpa
    console.log(student_cgpa)

    const student_department = academicData && academicData.department.name
    console.log(student_department)

    const student_level = academicData && academicData.level.code
    console.log(student_level)

    const student_session = academicData && academicData.session.year
    console.log(student_session)

    
    useEffect(() => {
      dispatch(studentDetails());
    }, [dispatch]);

    
  return (
    <div className={styles.infoContainer}>
        <div className={styles.salutation}>
            <div className={styles.hi}>Hi {mystudentDetails && mystudentDetails.first_name}  {mystudentDetails && mystudentDetails.middle_name}</div>
            <div className={styles.salute}>Welcome</div>
        </div>
        <div className={styles.cardContainer}>
            <div className={styles.cardSize}>
            <Cards 
            bgColor={'rgba(45, 156, 219, 0.2)'}
            departmentName={student_department}
            title={"Department"}
            icon={<FcDepartment/>}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<CgAwards/>}
            bgColor={'rgba(250, 179, 179, 0.35)'}
            departmentName={student_level}
            title={"Level"}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<MdOutlineAssessment/>}
            bgColor={'#8AFAA359'}
            departmentName={student_session}
            title={"Session"}
            />
            </div>
            <div className={styles.cardSize}>
            <Cards 
            icon={<FcGraduationCap/>}
            bgColor={'rgba(250, 179, 179, 0.35)'}
            departmentName={student_cgpa}
            title={"CGPA"}
            />
            </div>
        </div>
        <div className={styles.graphContainer}>
        
            <div className={styles.statistic}>
            {/* <DoughnutChart/> */}
            <VerticalChart/>
            </div>
            <div className={styles.report}>
              <DoughnutChart/>  
            </div>
        </div>
        
    </div>
  )
}

export default Info