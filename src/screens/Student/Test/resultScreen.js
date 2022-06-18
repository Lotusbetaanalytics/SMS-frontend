import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchWidget from "../../../components/Input/Search";
import StudentSidebar from "../../../components/Sidebar";
import Slider from "../../../components/ui/slider";
import styles from "./styles.module.css";
import Vmage from "../../../assets/Vector.png"
import {
  getTestquestion,
  postResponse,
} from "../../../redux/Actions/studentActions/testQuestion";
import {MdTimer } from "react-icons/md";

const TestResult = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem("id"));

  const testResponse = useSelector((state) => state.testResponse);
  const { loading, error } = testResponse;

  useEffect(() => {
    dispatch(getTestquestion(id));
  }, [id, dispatch]);

  const testQuestion = useSelector((state) => state.testQuestion);
  const { questions } = testQuestion;

  console.log(questions);

  const quizName = questions && questions.quiz && questions.quiz.name;
  const quizScore = questions && questions.score
  const course = questions && questions.quiz && questions.quiz.course;
 
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/student/login");
    }
  }, [studentLogin, navigate, dispatch]);

 

  return (
    <div className="page_container">
      <StudentSidebar test={"active"} />
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
                  <div className={styles.header_title}>{course}</div>
                  <div>{quizName}</div>
                </div>
                    <div className={styles.result}>
                    <h2>Test Completed</h2>
                        <div className={styles.imageContainer}>
                            <img src={Vmage}/>
                            </div>
                            
                    <h2>Your Test score is </h2>
                    <h1> {quizScore}</h1>
                    </div>
                    
                  </div>
                </div>
              </div>
        )}
      </div>
    </div>
  );
};

export default TestResult;
