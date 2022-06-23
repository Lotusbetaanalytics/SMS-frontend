import { Button, Table, Th, Tr,Tbody, Td, useToast, CircularProgress} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LecturerHeader from '../../../../components/lecturerHeader'
import LectureSidebar from '../../../../components/lecturerSidebar'
import { getAssignmentByCourseAction, lecturerDeleteAssignmentAction } from '../../../../redux/Actions/lecturer/lecturerAssessment'
import { lecturerCourseAction } from '../../../../redux/Actions/lecturer/lecturerCourses'
import { DELETE_ASSIGNMENT_RESET } from '../../../../redux/Constants/lecturer/lecturerAssessment'
import tableData from '../tableData'
import styles from "./styles.module.css"
const AssignmentQuestionBank = () => {
    const toast = useToast()
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [course,setCourse] = useState("")
    const questionBank = () => {
        navigate("/lecturer/assessment/assignment")
    }
    
    const getId = JSON.parse(localStorage.getItem("lecturerDetails"));
    const id = getId.staff[0].id
    


    useEffect(()=>{
      dispatch(lecturerCourseAction(id))
    },[dispatch])

    const lecturerCourse = useSelector((state) => state.lecturerCourse);
    const {lecturerCourses, loading}  = lecturerCourse;

    const lecturerGetAssignmentByCourse = useSelector((state) => state.lecturerGetAssignmentByCourse);
    const {getAssignmentByCourse, loading:assignmentLoading}  = lecturerGetAssignmentByCourse;

    const lecturerDeleteAssignment = useSelector((state) => state.lecturerDeleteAssignment);
    const { loading:deleteLoading,success:deleteSuccess,error:deleteError}  = lecturerDeleteAssignment;
    


    const mycourses = lecturerCourses && lecturerCourses.specialization && lecturerCourses.specialization.courses
  

    const courseHandler=(e) =>{
      setCourse(e.target.value)
 }

 useEffect(()=>(
  dispatch(getAssignmentByCourseAction(course))
),[course])

const editHandler = (id) =>{
  navigate(`/lecturer/assignment/${id}`)
    console.log(id)

} 

    const deleteHandler = (id) =>{
      alert("Are you sure you want to delete this assignment");
      dispatch(lecturerDeleteAssignmentAction(id))
        console.log(id)
    } 

    if (deleteSuccess) {
      toast ({
        title: "Assignment deleted successfully",
        description: deleteSuccess,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      dispatch({ type: DELETE_ASSIGNMENT_RESET });
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
      dispatch({ type: DELETE_ASSIGNMENT_RESET });
    }

  return (
    <div className="page_container">
    <LectureSidebar assessment={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment History"} />
      {deleteLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
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
       <Table varient="striped" colorScheme="gray" size="md">
            <Tr>
              <Th>Title</Th>
              <Th>Question</Th>
              <Th>Assignment_Deadline</Th>
              <Th>Action</Th>
              <Th>Action</Th>
            </Tr>
            {getAssignmentByCourse &&
              getAssignmentByCourse.map((item) => (
                <Tbody>
                  <Tr key={item.id}>
                  <Td>{item.title}</Td>
                    <Td>{item.question}</Td>
                    <Td>{item.due_date}</Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="green"
                        borderRadius="10"
                        width={"full"}
                        size="sm"
                        key={item._id}
                        onClick={() => editHandler(item.id)}
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
                        key={item._id}
                        onClick={() => deleteHandler(item.id)}
                      >
                        Delete
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

export default AssignmentQuestionBank