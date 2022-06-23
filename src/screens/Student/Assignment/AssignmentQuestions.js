import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchWidget from "../../../components/Input/Search";
import StudentSidebar from "../../../components/Sidebar";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";

import styles from "./styles.module.css";

import { CircularProgress, useToast } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import { postAssignmentResponseAction, studentGetAssignmentByIdAction } from "../../../redux/Actions/StudentAssignment/assignment";
import { POST_ASSIGNMENT_RESPONSE_RESET } from "../../../redux/Constants/StudentAssignment/assignment";

const AssignmentQuestion = () => {
  const toast = useToast();
  const dispatch = useDispatch();
  const [msg, setMsg] = useState("");
  const { id } = useParams();
  const [answer, setAnswer] = useState("");
  const [file, setFile] = useState("");
  useEffect(() => {
    dispatch(studentGetAssignmentByIdAction(id));
  }, []);

  const lecturerGetAssignmentById = useSelector(
    (state) => state.lecturerGetAssignmentById
  );
  const { getAssignment, loading } = lecturerGetAssignmentById;


  const assignment_taker= JSON.parse(localStorage.getItem("assignment_taker"));
  const questionTitle = getAssignment && getAssignment.title;
  const question = getAssignment && getAssignment.question;
  const assignment = getAssignment && getAssignment.id


  const submitHandler = (e) => {
    e.preventDefault();
    const assignmentData = {
      assignment_taker:assignment_taker,
      assignment:assignment,
      answer:answer
    }
    if (!answer) {
        setMsg(true)
      } else {
    dispatch(postAssignmentResponseAction(assignmentData));
    console.log(
      assignmentData
    )
      }
    }

    const postAssignmentResponse = useSelector(
      (state) => state.postAssignmentResponse
    );
    const { success,error, loading:postLoading } = postAssignmentResponse;

    if (success) {
      toast ({
        title: "Success",
        description: success,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
       dispatch({ type: POST_ASSIGNMENT_RESPONSE_RESET });
      
    }
    if (error) {
      toast ({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
    dispatch({ type: POST_ASSIGNMENT_RESPONSE_RESET});
    }

  return (
    <div className="page_container">
      <StudentSidebar assignment={"active"} />
      <div className="right_container">
        <SearchWidget />
        <div className="message_container">
          {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
         {postLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
         {msg && (
              <div>Your answer field is empty</div>
        )}
        </div>
        <div className="right_content_container">
          <div className={styles.profile_bg}>
            <div className={styles.flex}>
              <div className={styles.header}>
                <div className={styles.header_title}>Assignment</div>
              </div>
              <div className={styles.assignment_container}>
                <div className={styles.left}>
                  <textarea
                    value={answer}
                    onChange={(e) => setAnswer(e.target.value)}
                  />
                  <div className={styles.test_btn}>
                    <button
                      className={styles.submit}
                      type="button"
                      onClick={submitHandler}
                    >
                      submit
                    </button>
                    <div className={styles.uploadWrapper}>
                      <button className={styles.uploadBtn}>
                        upload document
                      </button>
                      <input
                        type="file"
                        onChange={(e) => setFile(e.target.value)}
                        value={file}
                      />
                    </div>
                  </div>
                </div>

                <div className={styles.right}>
                  <h2>{questionTitle}</h2>
                  <ol>
                    <ol>{question}</ol>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentQuestion;
