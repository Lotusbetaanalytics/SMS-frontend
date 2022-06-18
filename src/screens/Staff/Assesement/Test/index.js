import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import LecturerHeader from '../../../../components/lecturerHeader';
import LectureSidebar from '../../../../components/lecturerSidebar';
import data from '../../data';
import styles from "../assignment/styles.module.css"

const LecturerTest = () => {
    const navigate = useNavigate();
    const [deadline,setDeadline] = useState("");
    const [testDescription,setTestDescription] = useState("");
    const [question,setQuestion] = useState("");
    const [courseTitle,setCourseTitle] = useState("")
    const [course_code,setCourse_code] = useState("")
    const [options,setOptions] = useState("")
    const [correctAnswer,setCorrectAnswer] = useState("")

        const mydata = data;
        console.log(mydata)

    const courseHandler=(e) =>{
         setCourseTitle(e.target.value)
        console.log(e.target.value)
    }

    const submitHandler = () => {
        console.log("yes")
    }
    const questionBank = () => {
        navigate("/lecturer/assessment/test/history")
    }
    const createTestHandler = () => {
        navigate("/lecturer/assessment/test")
    }
    const createAssignment = () => {
        navigate("/lecturer/assessment/assignment")
    }

     // console.log(textInput);
 
    //  const textInput = React.useRef();
  // const removeListAgenda = (i) => {
  //   let filtered = agenda.filter((agendas) => {
  //     return agendas !== i;
  //   });
  //   setAgenda(filtered);
  // };
  // const addListAgenda = () => {
  //   setAgenda([...agenda, listAgenda ]);
  // };

  {/* <Input
                  title="five point agenda"
                  type={"text"}
                  onChange={(e) => {
                    setListAgenda(e.target.value);
                  }}
                  value={listAgenda}
              
                /> */}
                 {/* <div>
                 <button
                  className={styles.removeBtn}
                  onClick={() => {
                    addListAgenda();
                   
                  }}
                  type="button"
                >
                  Add Option
                </button>
                 </div> */}

                  {/* {agenda.map((item, i) => (
              <div className="remove_option2" key={i}>
                <ul>
                  <ol>{item}</ol>
                </ul>
               
                <button
                  type="button"
                  className={styles.removeBtn}
                  onClick={() => removeListAgenda(item)}
                >
                  Remove Option
                </button>
              </div>
            ))} */}
  return (
    <div className="page_container">
    <LectureSidebar assessment={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Test"} />
      <div className={styles.info_container}>
        <div className={styles.left}>
          <button className={styles.green} onClick={createAssignment} >Create Assignment</button>
          <button className={styles.blue} onClick={createTestHandler}>Create Test</button>
          </div>
       
        <div className={styles.right}>
        <div className={styles.editContainer}>
                <h1>Test</h1>     
                <div className={styles.editinfo}>
                  <label>Course Code</label>
                  <select onChange={courseHandler}
                    value={courseTitle}>
                    <option value="" disabled>select</option>
                     onChange={(e) => setCourseTitle(e.target.value)}
                    {mydata && mydata.map((item) =>(
                        <option value={item.id}>{item.code}
                            
                        </option>
                    ))}
                    
                  </select>
                </div>
                
                <div className={styles.editinfo}>
                  <Input
                    label={"Course Title"}
                    type="type"
                    value={testDescription}
                    onChange={(e) => setCourseTitle(e.target.value)}
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
                    label={"Test Description"}
                    type="text"
                    value={testDescription}
                    onChange={(e) => setTestDescription(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Correct Answer"}
                    type="text"
                    value={correctAnswer}
                    onChange={(e) => setCorrectAnswer(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Options"}
                    type="text"
                    value={options}
                    onChange={(e) => setOptions(e.target.value)}
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

export default LecturerTest