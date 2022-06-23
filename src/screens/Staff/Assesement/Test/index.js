import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import LecturerHeader from '../../../../components/lecturerHeader';
import LectureSidebar from '../../../../components/lecturerSidebar';
import data from '../../data';
import styles from "../assignment/styles.module.css"
import { GrAddCircle,GrSubtractCircle } from "react-icons/gr";

const LecturerTest = () => {
    const navigate = useNavigate();
    const [deadline,setDeadline] = useState("");
    const [testDescription,setTestDescription] = useState("");
    const [question,setQuestion] = useState("");
    const [questionSet,setQuestionSet] = useState([])
    const [singleQuestion,setSingleQuestion] = useState({})
    const [courseTitle,setCourseTitle] = useState("")
    const [course_code,setCourse_code] = useState("")
    const [answerSet,setAnswerSet] = useState([])
    const [option,setOption] =useState({})
    const [correctAnswer,setCorrectAnswer] = useState("")
    const [disable,setDisable] = useState(false)

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

 
     const textInput = React.useRef();
  const removeOption = (i) => {
    let filtered = answerSet.filter((answer) => {
      return answer !== i;
    });
    setAnswerSet(filtered);
  };
  const addOption = () => {
    setAnswerSet([...answerSet, option ]);
    setOption(option.text="")
  };

  const addToQuestionSetHandler = () => {
    setQuestionSet([...questionSet, singleQuestion ]);
    setOption("")
  };

  const anotherQuestion = () =>{
 console.log("i am here")
  }


  const questionData =[
    {
  
      "label": "",
      "answer_set": [
        {
          "text": "string",
          "is_correct": true
        }
      ],
     
    }
  ]
  
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
                <select value={correctAnswer} onChange={(e)=>{
                  setCorrectAnswer(e.target.value)
                  
                  const foundItem =answerSet.indexOf(answerSet.filter(({text,is_correct},index)=>{
                    return text==e.target.value
                  }).length>0&&(answerSet.filter(({text,is_correct},index)=>{
                    return text==e.target.value
                  }))[0]);

                 

                  
                    answerSet[foundItem].is_correct=true
                  setAnswerSet((prev)=>{
                    return [...prev.filter((item,ind)=>ind!=foundItem).map(({text,is_correct})=>{
                      return{
                        text,
                        is_correct:false
                      }
                    }),answerSet[foundItem]]
                  })

               
                
                }}>
                  <option value="">--Select answer--</option>
                  {answerSet.map(({text,is_correct})=>{
                    return <option value={text}>{text}</option>
                  })}
                </select>
                 
                </div>
                <div className={styles.editinf}>
                  <Input
                  textInput
                    label={"Options"}
                    type="text"
                    value={option&&option.text}
                    onChange={(e) => setOption({
                      text:e.target.value,
                      is_correct:false
                    })}
                  />
                  <button
                  className={styles.removeBtn}
                  onClick={() => {
                    addOption();
                   
                  }}
                  type="button"
                >
                 <GrAddCircle/>
                </button>

                </div>
                <div className={styles.options}>
                {answerSet.map((item, i) => (
              <div className={styles.remove_option2} key={i}>
              
                <div className={`${styles.removeItem} ${item.is_correct&&styles.correct}`} onClick={()=>{
                
                  // setAnswerSet((prev,index)=>{
                  //   return [...prev.filter((val,ind)=>ind!=index),...prev.filter((val,ind)=>ind==index).map(({is_correct,text})=>{
                  //     return {text,is_correct:true}
                  //   })]
                  // })
                 
                 
                }} >{item.text}</div>
            
             
              <button
                type="button"
                className={styles.removeBtn}
                onClick={() => removeOption(i)}
              >
               <GrSubtractCircle/>
              </button>
            </div>
              ))}

            </div>
           
                
                <div className={styles.editinfo}>
                <div className={styles.btn_container}>
                    <button className={styles.blue} onClick={submitHandler}>Create</button>
                </div>
                <div className={styles.btn_container}>
                    <button className={styles.green} onClick={anotherQuestion} disabled={!disable}>add question</button>
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