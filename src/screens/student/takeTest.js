import { Center, CircularProgress } from '@chakra-ui/react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
// import Info from '../../components/Info'
import StudentSidebar from '../../components/StudentSidebar'
import SidebarTwo from '../../components/StudentSidebar/sidebar';
import { studentDetails } from '../../redux/studentActions/studentAction';
import { getTestquestion } from '../../redux/studentActions/testQuestion';
import styles from "./styles.module.css";
const TakeTest = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

 useEffect(() => {
  dispatch(studentDetails())
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  const {studentDetail,loading,error} = details;
  console.log(studentDetail)

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

  const registeredCourse = studentDetail && studentDetail.student[0].registered_quizes;
  
  console.log(registeredCourse)

  const testHandler = (item) =>{
    // console.log(item.quiz)
    // console.log(item.id)
    // const quizTaker = item.id
    // console.log(quizTaker)
    localStorage.setItem("quiz_takers", JSON.stringify(item.id));
    dispatch(getTestquestion(item.id))
    
  }

  

  return (
    <div className={styles.result}>
        <div className={styles.Sidebar}><StudentSidebar test={styles.remote} /></div>
        <div className={styles.resultTable}>
        <div className={styles.label}>Assigned Test</div>
        {loading ? (
      <Center>
        <CircularProgress isIndeterminate color="purple.300" />
      </Center>
    ) : (<div className={styles.flexy}>
      {registeredCourse ? (<>
         {registeredCourse && registeredCourse.map((item,i)=>(
        <Link to={`/student/taketest/${item.id}`} ><button className={styles.testContainer} onClick={() => testHandler(item)} key={item.id}>{item.quiz.name}</button></Link>
      ))}</>)  : ( <p> there is no test for you</p>)}
        </div>
    )}
         
       
        </div>

        
        
    </div>
  )
}

export default TakeTest;