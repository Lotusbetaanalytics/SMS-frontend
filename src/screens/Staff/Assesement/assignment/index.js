import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import LecturerHeader from '../../../../components/lecturerHeader';
import LectureSidebar from '../../../../components/lecturerSidebar';
import data from '../../data';
import styles from "./styles.module.css"

const Assignment = () => {
    const navigate = useNavigate();
    const [deadline,setDeadline] = useState("");
    const [title,setTitle] = useState("");
    const [question,setQuestion] = useState("");
    const [courseTitle,setCourseTitle] = useState("")
    const [course_code,setCourse_code] = useState("")

        const mydata = data;
        console.log(mydata)

    const courseHandler=(e) =>{
         setCourse_code(e.target.value)
        console.log(e.target.value)
    }

    const submitHandler = () => {
        console.log("yes")
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
      <div className={styles.info_container}>
        <div className={styles.left}>
          <button className={styles.green} onClick={createAssignment}>Create Assignment</button>
          <button className={styles.blue} onClick={createTestHandler}>Create Test</button>
          </div>
       
        <div className={styles.right}>
        <div className={styles.editContainer}>
                <h1>Assignment</h1>     
                <div className={styles.editinfo}>
                  <label>Course Code</label>
                  <select onChange={courseHandler}
                    value={course_code}>
                    <option value="" disabled>select</option>
                     onChange={(e) => setTitle(e.target.value)}
                    {mydata && mydata.map((item) =>(
                        <option value={item.id}>{item.code}
                            
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
                    label={"Course Title"}
                    type="text"
                    value={courseTitle}
                    onChange={(e) => setCourseTitle(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Deadline"}
                    type="date"
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
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

export default Assignment