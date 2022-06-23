import { Button, Table, Th, Tr,Tbody, Td, useToast} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import LecturerHeader from '../../../../components/lecturerHeader'
import LectureSidebar from '../../../../components/lecturerSidebar'
import styles from "../assignment/styles.module.css"
import tableData2 from "../../Assesement/tabledata2"
import { useDispatch, useSelector } from 'react-redux'
import { lecturerCourseAction } from '../../../../redux/Actions/lecturer/lecturerCourses'
import { getTestByCourseAction, lecturerDeleteTestAction } from '../../../../redux/Actions/lecturer/lecturerAssessment'
import { DELETE_TEST_RESET } from '../../../../redux/Constants/lecturer/lecturerAssessment'
const TestqustionBank = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const toast = useToast()
    const [course,setCourse] = useState("")
    const questionBank = () => {
        navigate("/lecturer/assessment/test/")
    }
   

    const getId = JSON.parse(localStorage.getItem("lecturerDetails"));
    const id = getId.staff[0].id
    

    useEffect(()=>{
      dispatch(lecturerCourseAction(id))
    },[dispatch])

    const lecturerCourse = useSelector((state) => state.lecturerCourse);
    const {lecturerCourses,}  = lecturerCourse;

    const lecturerGetTestByCourse = useSelector((state) => state.lecturerGetTestByCourse);
    const {getTestByCourse, loading:TestLoading}  = lecturerGetTestByCourse;
    console.log(getTestByCourse)
    const lecturerDeleteTest = useSelector((state) => state.lecturerDeleteTest);
    const { loading:deleteLoading,success:deleteSuccess,error:deleteError}  = lecturerDeleteTest;

    const mycourses = lecturerCourses && lecturerCourses.specialization && lecturerCourses.specialization.courses
  

    const courseHandler=(e) =>{
      setCourse(e.target.value)
 }

 useEffect(()=>(
  dispatch(getTestByCourseAction(course))
),[course])

const editHandler = (id) =>{
  navigate(`/lecturer/test/${id}`)
    console.log(id)

} 

    const deleteHandler = (id) =>{
      dispatch(lecturerDeleteTestAction(id))
        console.log(id)
    } 

    if (deleteSuccess) {
      toast ({
        title: "Success",
        description: deleteSuccess,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      dispatch({ type: DELETE_TEST_RESET });
      window.location.reload()
    }
    if (deleteError) {
      toast ({
        title: "Error",
        description: deleteError,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
      dispatch({ type: DELETE_TEST_RESET });
    }


  return (
    <div className="page_container">
    <LectureSidebar assessment={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Test History"} />
      <div className={styles.dropDown}>
                <div>
                <select onChange={courseHandler}
                    value={course}>
                      <option>select</option>
                    {mycourses && mycourses.map((item,i) =>(
                        <option key={i} value={item.name}>{item.name}
                            
                        </option>
                    ))}
                    
                  </select>
                </div>
                <div className={styles.dropDown_container}>
                    <button className={styles.blue} onClick={questionBank}>Create Question</button>
                </div>
       </div>
      <div className={styles.white_container}>
       <Table varient="striped" colorScheme="gray" size="md" maxWidth={"100"}>
            <Tr maxWidth={"100"}>
              <Th>Test_Title</Th>
              <Th>Course_Code</Th>
              <Th>Test_Description</Th>
              <Th>Question(No)</Th>
              <Th>Timer</Th>
              <Th>Action</Th>
              <Th>Action</Th>
              <Th>Action</Th>
            </Tr>
            {getTestByCourse &&
              getTestByCourse.map((item) => (
                <Tbody maxWidth={"100"}>
                  <Tr key={item.id}>
                  <Td>{item.name}</Td>
                  <Td>{item.course}</Td>
                  <Td>{item.description}</Td>
                  {/* <Td>{item.question}</Td> */}
                  
                     <Td>{item.question_set.length}</Td> 

                   
                    <Td>{item.timer}</Td> 
                   
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="green"
                        borderRadius="10"
                        width={"full"}
                        size="sm"
                        key={item.id}
                        onClick={() => deleteHandler(item.id)}
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="red"
                        borderRadius="10"
                        size="sm"
                        key={item.id}
                        onClick={() => deleteHandler(item.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="blue"
                        borderRadius="10"
                        size="sm"
                        key={item.id}
                        onClick={() => deleteHandler(item.id)}
                      >
                        View
                      </Button>
                    </Td>
                    </Tr>
                </Tbody>
              ))}
          </Table>
        </div>
      </div>
      </div>
  )
}

export default TestqustionBank