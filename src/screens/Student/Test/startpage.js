import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import SearchWidget from "../../../components/Input/Search";
import StudentSidebar from "../../../components/Sidebar";
import { getTestquestion } from "../../../redux/Actions/studentActions/testQuestion";
import styles from "./styles.module.css";
const StartPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();
  localStorage.setItem("id", JSON.stringify(id));
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/student/login");
    }
  }, [studentLogin, navigate, dispatch]);

  useEffect(() => {
    dispatch(getTestquestion(id));
  }, [id, dispatch]);

  const testQuestion = useSelector((state) => state.testQuestion);
  const { questions,loading,error } = testQuestion;

//   const testData = JSON.parse(localStorage.getItem("question"));
const testData = questions && questions;
  const quizName = testData && testData.quiz && testData.quiz.name;
  const timer = testData && testData.quiz && testData.quiz.timer;

  const testHandler = (id) => {
    dispatch(getTestquestion(id));
    navigate("/student/test/testscreen");
    // console.log(id)
  };

  return (
    <div className="page_container">
      <StudentSidebar test={"active"}/>
      <div className="right_container">
        <SearchWidget />
        <div className="message_container">
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
        </div>
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="purple.300" />
          </Center>
        ) : (
        <div className="right_content_container">
          <div className={styles.profile_bg}>
            <div className={styles.flex}>
              <div className={styles.header}>
                <div className={styles.header_title}>Test</div>
                <div>{quizName}</div>
              </div>
              <div className={styles.tableContainer}>
                <div className={styles.instruction}>
                  <h3 style={{ fontWeight: "bold", marginBottom: "10px" }}>
                    Instruction
                  </h3>
                  <p style={{ marginBottom: "20px" }}>
                    Attempt all questions,you are advise to not click{" "}
                    <span style={{ color: "red" }}>finish</span> button or
                    navigate away from the test screen during test doing so will
                    automatically submit your test.You have{" "}
                    <span style={{ color: "red" }}>{timer}</span> Minutes to
                    complete the test{" "}
                  </p>

                  <button className={styles.start_btn} onClick={testHandler}>
                    start test
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};

export default StartPage;
