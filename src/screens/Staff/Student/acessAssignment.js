import { CircularProgress, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import LecturerHeader from '../../../components/lecturerHeader';
import LectureSidebar from '../../../components/lecturerSidebar';
import { getAssignmentTakerByItIdAction, lecturerEditAssignmentTakerAction } from '../../../redux/Actions/lecturer/lecturerAssessment';
import { EDIT_ASSIGNMENTTAKER_RESET } from '../../../redux/Constants/lecturer/lecturerAssessment';
import styles from "./styles.module.css";
const AcessAssignment = () => {
    const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();
  const {id} = useParams()
  const [msg, setMsg] = useState("");
  const [answer, setAnswer] = useState("");
  const [file, setFile] = useState("");
  const [question,setQuestion] = useState("")
  const [score,setScore] = useState("")
  const [title,setTitle] = useState("")
  useEffect(() => {
    dispatch(getAssignmentTakerByItIdAction(id));
  }, [dispatch]);

  const lecturerGetAssignmenttakerByItId = useSelector((state) => state.lecturerGetAssignmenttakerByItId);
  const { getAssignmenttakerByItId, loading,success:getSuccess} = lecturerGetAssignmenttakerByItId;
  console.log(getAssignmenttakerByItId)

 const student = getAssignmenttakerByItId && getAssignmenttakerByItId.student
const assignment = getAssignmenttakerByItId && getAssignmenttakerByItId.assignment && getAssignmenttakerByItId.assignment.id
 console.log(student,assignment)

  useEffect(() => {
    if (getSuccess){
        setTitle(getAssignmenttakerByItId && getAssignmenttakerByItId.assignment && getAssignmenttakerByItId.assignment.title) ;
        setQuestion(getAssignmenttakerByItId && getAssignmenttakerByItId.assignment && getAssignmenttakerByItId.assignment.question);
       
        setScore(getAssignmenttakerByItId && getAssignmenttakerByItId.score)
        
    }
  }, [getSuccess]);
 
  const submitHandler = (e) => {
    e.preventDefault();
    const assignmentTakerData = {
        student:student,
        assignment: assignment,
        score:score,
        completed:true
    }
    if (!assignmentTakerData) {
        setMsg(true)
      } else {
    dispatch(lecturerEditAssignmentTakerAction(assignmentTakerData,id));
   
      }
    }

     const lecturerEditAssignmenttaker = useSelector((state) => state.lecturerEditAssignmenttaker );
    const { success,error, loading:postLoading,editAssignmentTaker} = lecturerEditAssignmenttaker;
    console.log(editAssignmentTaker)

    if (success) {
      toast ({
        title: "Success",
        description: success,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
       dispatch({ type: EDIT_ASSIGNMENTTAKER_RESET });
      
    }
    if (error) {
      toast ({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    dispatch({ type: EDIT_ASSIGNMENTTAKER_RESET});
    }
  const assignmentPage = () => {
    navigate("/lecturer/student/assignment");
  };
  const testPage = () => {
    navigate("/lecturer/student/test");
  };
  const allStudent = () => {
    navigate("/lecturer/student/student");
  };
  const deleteHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="page_container">
    <LectureSidebar student={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment History"} />
      {postLoading && <CircularProgress isIndeterminate color="green.300" />}
      {loading && <CircularProgress isIndeterminate color="green.300" />}
      <div className={styles.dropDown}>
        <div className={styles.dropDown_container}>
        <button className={`${styles.left_Curve} ${styles.green}`} onClick={assignmentPage}>
            Assignment
          </button>
          <button className={styles.white} onClick={testPage}>
            Test
          </button>
          <button className={`${styles.right_Curve} ${styles.white}`} onClick={allStudent}>
           My Student
          </button>
        </div>
      </div>
      <div className={styles.assignment_container}>
                <div className={styles.lefty}>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <div className={styles.test_btn}>
                  
                  <input type="number"
                  placeholder='Score'
                    value={score}
                    onChange={(e) => setScore(e.target.value)} 
                    />
                     <div className={styles.uploadWrapper}>
                      <button className={styles.uploadBtn}>
                        Download file
                      </button>
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.value)}
                        value={file}
                      />
                    </div>
                    <button
                      className={styles.submit}
                      type="button"
                      onClick={submitHandler}
                    >
                      submit
                    </button>
                   
                  </div>
                </div>

                <div className={styles.righty}>
                   <h2>{title}</h2> 
                  <ol>
                     <li>{question}</li>
                  </ol>
                </div>
              </div>
    </div>
  </div>
  
  )
}

export default AcessAssignment