import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./styles.module.css";
import { getTestquestion, postResponse } from "../../redux/studentActions/testQuestion";
import Navigation from "../../components/navigation_/navigation";
import Slider from "../../components/ui/slider";

const TestScreen = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { id } = useParams();


  console.log(id)

 
  const Response = useSelector((state) => state.Response);
  const { loading, error } = Response;

  // const testQuestion = useSelector((state) => state.testQuestion);
  // const { questions } = testQuestion;

  useEffect(() => {
    dispatch(getTestquestion(id));
  }, [id, dispatch]);
  
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));
  

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);


  const testData = JSON.parse(localStorage.getItem("question"));
  // const testData = questions
  //  console.log(testData)

   const quizers = JSON.parse(localStorage.getItem("quiz_takers"));
//     console.log(quizers)

 const mytime = testData && testData.quiz.timer
    // console.log(mytime)
  

 const [index, setIndex] = useState(0);
const [answer, setAnswer] = useState("");

 const questionLength = testData && testData.quiz.question_set.length;

//  console.log(questionLength,"this is answer")

 const quiz_taker = quizers;
//   console.log(quiz_taker,"quiz_taker")

// //  console.log(questionLength)

  let initialMinute = mytime;
  let initialSeconds = mytime;
  let [minutes, setMinutes] = useState(initialMinute);
  let [seconds, setSeconds] = useState(initialSeconds);

  const question = testData && testData.quiz.question_set[index].id 

  const displayQuestion = testData && testData.quiz.question_set[index].label
//   console.log(question,"this is question")

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
      dispatch(postResponse(quiz_taker,question,answer));
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
    <div>
    <Navigation />
    {error && (
      <Alert status="error">
        <AlertIcon />
        {error}
      </Alert>
    )}
    {loading ? (
      <Center>
        <CircularProgress isIndeterminate color="purple.300" />
      </Center>
    ) : (
      <div className={`${styles.pagePadding}`}>
        <div
          className={`${styles.pagePadding} ${styles.border} ${styles.removePadding}`}
        >
          <div className={styles.left}>
            {minutes === 0 && seconds === 0 ? null : (
              <h1 className={styles.timer}>
                {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
              </h1>
            )}
          </div>
          <div className={styles.section}>
            {testData.name}
          </div>
          <p2 className={styles.instruction}>
            {testData.description}
          </p2>
          <br />
          <p2 className={styles.instruction}>
            {lastpage} of {questionLength}
          </p2>
          <Slider size={size} />
          <div className={styles.question}>
            {displayQuestion}
          </div>
          <form className={styles.testform} onSubmit={submitHandler}>
            {testData && testData.quiz.question_set[index] && testData.quiz.question_set[index].answer_set.map((item, i) => (
                <div key={i}>
                  <div>
                    <input
                      id={`radio${i}`}
                      name="radio"
                      type="radio"
                      value={item.id}
                      onChange={(e) => setAnswer(e.target.value)}
                    />&nbsp; &nbsp;
                    <label htmlFor={`radio${i}`}>{item.text}</label>
                  </div>
                </div>
              ))}
           
          </form>
        </div>
        <div className={styles.btnContainer}>
        {index > 0 && (
              <button
                type="button"
                className={`btn ${styles.purple} ${styles.marginTop}`}
                onClick={prevHandler}
              >
                Back
              </button>
            )}
            {lastpage === questionLength ? (
              <button type="button" onClick={submitHandler} className={`btn ${styles.purple} ${styles.marginTop}`}>
                submit
              </button>
            ) : (
              <button type="button" onClick={submitHandler} className={`btn ${styles.purple} ${styles.marginTop}`}>
                next
              </button>
            )}
        </div>
        
      </div>
    )}
  </div>
  );
};

export default TestScreen;
