import { CircularProgress, toast, useToast } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import Input from '../../../../components/Input';
import LecturerHeader from '../../../../components/lecturerHeader';
import LectureSidebar from '../../../../components/lecturerSidebar';
import { getAssignmentByIdAction, lecturerEditAssignmentAction, lecturerPostAssignmentAction } from '../../../../redux/Actions/lecturer/lecturerAssessment';
import { lecturerCourseAction } from '../../../../redux/Actions/lecturer/lecturerCourses';
import { lecturerDetailsAction } from '../../../../redux/Actions/lecturer/lecturerDetail';
import data from '../../data';
import "../../../../App.css"
import styles from "./styles.module.css"
import { EDIT_ASSIGNMENT_RESET, POST_ASSIGNMENT_RESET } from '../../../../redux/Constants/lecturer/lecturerAssessment';



const EditAssignment = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id:assignmentId} = useParams()
   
    const toast = useToast();

    const [due_date,setDue_date] = useState("");
    const [title,setTitle] = useState("");
    const [question,setQuestion] = useState("");
    const [max_score,setMax_score] = useState("")
    const [course,setCourse] = useState("")
    const [msg,setMsg] = useState("")

    const getId = JSON.parse(localStorage.getItem("lecturerDetails"));
    const id = getId.staff[0].id

    useEffect(()=>{
      dispatch(lecturerCourseAction(id))
    },[dispatch])

    useEffect(()=>{
        dispatch(getAssignmentByIdAction(assignmentId))
      },[dispatch])

    const lecturerCourse = useSelector((state) => state.lecturerCourse);
    const {lecturerCourses, loading}  = lecturerCourse;

    const  lecturerGetAssignmentById = useSelector((state) => state. lecturerGetAssignmentById);
    const { getAssignment,loading:isLoading,error:isError,success:getByidSuccess}  =  lecturerGetAssignmentById;
      console.log(getAssignment && getAssignment)

    useEffect(()=>{
        if (getByidSuccess){
            setTitle(getAssignment&& getAssignment.title)
            setQuestion(getAssignment&&getAssignment.question)
            setMax_score(getAssignment&&getAssignment.max_score)
            setDue_date(getAssignment&&getAssignment.due_date)
        }
      },[getByidSuccess,getAssignment])

    const lecturerEditAssignment = useSelector((state) => state.lecturerEditAssignment);
    const {loading:editLoading,success,error}  = lecturerEditAssignment;

    const mycourses = lecturerCourses && lecturerCourses.specialization && lecturerCourses.specialization.courses
    console.log(mycourses)

    const courseHandler=(e) =>{
         setCourse(e.target.value)

    }


    const submitHandler = () => {
        const assignmentData = {
            title:title,
            question:question,
            course:course,
            max_score:max_score,
            due_date:due_date
        }
        if (!title || !due_date || !title || !course || !max_score  ) {
          setMsg(true)
        } else {
          dispatch(lecturerEditAssignmentAction(assignmentData,assignmentId))
          console.log("hey")
        }
    }
    if (success) {
      toast ({
        title: "Success",
        description: success,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      setDue_date("")
      setMax_score("")
      setTitle("")
      setQuestion("")
      dispatch({type:EDIT_ASSIGNMENT_RESET})
    }
    if (error) {
      toast ({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    }
    const questionBank = () => {
        navigate("/lecturer/assessment/assignment/history")
    }
    const createTestHandler = () => {
        navigate("/lecturer/assessment/test")
    }
    const createAssignment = () => {
        navigate("/lecturer/assessment/assignment")
    }

   

  return (
    <div className="page_container">
    <LectureSidebar assessment={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment"} />
      {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
        {editLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
        {msg && (
              <div> all field are required </div>
        )}
      <div className={styles.info_container}>
        <div className={styles.left}>
          <button className={styles.green} onClick={createAssignment}>Create Assignment</button>
          <button className={styles.blue} onClick={createTestHandler}>Create Test</button>
          </div>
       
        <div className={styles.right}>
        <div className={styles.editContainer}>
                <h1>Assignment</h1>     
                <div className={styles.editinfo}>
                  <label>Course Name</label>
                  <select onChange={courseHandler}
                    value={course}>
                    {mycourses && mycourses.map((item,i) =>(
                        <option key={i} value={item.id}>{item.name}
                            
                        </option>
                    ))}
                    
                  </select>
                </div>
                
                <div className={styles.editinfo}>
                  <Input
                    label={"Title"}
                    type="type"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

               
                
                <div className={styles.editinfo}>
                    <label>Question</label>
                  <textarea
                    
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                  />
                </div>
               
                <div className={styles.editinfo}>
                  <Input
                    label={"Maximum scores"}
                    type="number"
                    value={max_score}
                    onChange={(e) => setMax_score(e.target.value)}
                  />
               </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Due_date"}
                    type="date"
                    value={due_date}
                    onChange={(e) => setDue_date(e.target.value)}
                  />
                 
                </div>
                <div className={styles.editinfo}>
                <div className={styles.btn_container}>
                    <button className={styles.blue} onClick={submitHandler}>Create</button>
                </div>
                </div>
               
         </div>
          <div className={styles.btnContainer}>
            <button className={styles.green} onClick={questionBank}>Question Bank</button>
        </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default EditAssignment