import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchWidget from "../../components/Input/Search";
import StudentSidebar from "../../components/Sidebar";
import Slider from "../../components/ui/slider";
import styles from "./styles.module.css";
import {
  getTestquestion,
  postResponse,
} from "../../redux/Actions/studentActions/testQuestion";
import {MdTimer } from "react-icons/md";

const TestScreen = () => {
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

  const course = questions && questions.quiz && questions.quiz.course;
  const description = questions && questions.quiz && questions.quiz.description;
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/student/login");
    }
  }, [studentLogin, navigate, dispatch]);

  const testData = JSON.parse(localStorage.getItem("question"));

  const quizers = JSON.parse(localStorage.getItem("quiz_takers"));

  const mytime = testData && testData.quiz.timer;

  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState("");

  const questionLength = testData && testData.quiz.question_set.length;
  
  const quiz_taker = quizers && quizers;

  let initialMinute = mytime;
  let initialSeconds = mytime;
  let [minutes, setMinutes] = useState(initialMinute);
  let [seconds, setSeconds] = useState(initialSeconds);

  const question =
    testData && testData.quiz && testData.quiz.question_set[index].id;
  const displayQuestion = testData && testData.quiz.question_set[index].label;

  const lastpage = index + 1;
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(myInterval);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  });

  if (minutes == 0 && seconds == 10) {
    alert("You have less than 10 seconds");
    setTimeout(() => navigate("/student/takeTest"), [1000]);
  }

  const submitHandler = (e) => {
    e.preventDefault();
    const newIndex = index + 1;

    if (answer) {
      localStorage.setItem("selected_answer", JSON.stringify(answer));
      dispatch(postResponse(quiz_taker, question, answer));
    }
    if (!answer) {
      alert("Please select an option");
    } else {
      if (newIndex >= questionLength) {
        setTimeout(() => navigate("/student/takeTest"), [1000]);
      } else {
        setIndex(newIndex);
        setAnswer("");
        e.target.reset();
      }
    }
  };

  const prevHandler = () => {
    setIndex(index - 1);
  };

  const size = (index / questionLength) * 100 || 0;

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
                <div className={styles.testContainer}>
                      <div className={styles.timer}>
                      <MdTimer/>
                        {minutes === 0 && seconds === 0 ? null : (
                          <h1>
                            {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
                          </h1>
                        )}
                      </div>
                      <p2>{description}</p2><br/>
                      <p2>
                        Question {lastpage} of {questionLength}
                      </p2>
                      <Slider size={size} />
                      <div>{displayQuestion}</div>
                      <form onSubmit={submitHandler}>
                        {testData &&
                          testData.quiz.question_set[index] &&
                          testData.quiz.question_set[index].answer_set.map(
                            (item, i) => (
                              <div key={i}>
                                <div>
                                  <input
                                    id={`radio${i}`}
                                    name="radio"
                                    type="radio"
                                    value={item.id}
                                    onChange={(e) => setAnswer(e.target.value)}
                                  />
                                  &nbsp; &nbsp;
                                  <label htmlFor={`radio${i}`}>
                                    {item.text}
                                  </label>
                                </div>
                              </div>
                            )
                          )}
                      </form>
                    </div>
                    <div className={styles.test_btn}>
                      {index > 0 && (
                        <button className={styles.next} type="button" onClick={prevHandler}>
                          Back
                        </button>
                      )}
                      {lastpage === questionLength ? (
                        <button className={styles.submit} type="button" onClick={submitHandler}>
                          submit
                        </button>
                      ) : (
                        <button className={styles.next} type="button" onClick={submitHandler}>
                          next
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
        )}
      </div>
    </div>
  );
};

export default TestScreen;
