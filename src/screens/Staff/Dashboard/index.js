import React, { useEffect, useState } from "react";
import Card3 from "../../../components/cards/card3";
import LecturerHeader from "../../../components/lecturerHeader";
import LectureSidebar from "../../../components/lecturerSidebar";
import styles from "./styles.module.css";
import Calendar from "react-calendar";
import { AiOutlineFileMarkdown,AiOutlineCaretDown } from "react-icons/ai";
import NotificationCard from "../../../components/cards/notificationCard";
import LecturerNotice from "../../../components/cards/lecturerNotice";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { lecturerDetailsAction } from "../../../redux/Actions/lecturer/lecturerDetail";
import { Navigate, useNavigate } from "react-router-dom";
import { getAssignmentByStaffIdAction, getTestBySourceAction } from "../../../redux/Actions/lecturer/lecturerAssessment";
import { getNoticeAction } from "../../../redux/Actions/lecturer/lecturerNotice";
import { lecturerCourseAction } from "../../../redux/Actions/lecturer/lecturerCourses";
import { Button, Table, Th, Tr,Tbody, Td, useToast, CircularProgress} from '@chakra-ui/react'
const LecturerDashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());
    
    useEffect(() => {
      dispatch(lecturerDetailsAction());
    }, []);

    const lecturerDetails = useSelector((state) => state.lecturerDetails);
  const {lecturerDetail,success}  = lecturerDetails;
    const username =  lecturerDetail && lecturerDetail.first_name
    const [lecturerEmail,setLecturerEmail] =useState("")
    const [id,setId] = useState("")
    const [courseId,setCourseId] = useState(0)
    const [source,setSource] = useState("")

    useEffect(()=>{
      if (success) {
        setId(lecturerDetail && lecturerDetail.staff[0] && lecturerDetail.staff[0].user &&lecturerDetail.staff[0].user.id)
        dispatch(getAssignmentByStaffIdAction(id));
        setLecturerEmail(lecturerDetail && lecturerDetail.email)
        dispatch(getNoticeAction(lecturerEmail))
        setSource(lecturerDetail && lecturerDetail.staff[0] && lecturerDetail.staff[0].user &&lecturerDetail.staff[0].user.id)
        dispatch(getTestBySourceAction(source));
        setCourseId(lecturerDetail && lecturerDetail.staff[0] && lecturerDetail.staff[0].user &&lecturerDetail.staff[0].id)
        dispatch(lecturerCourseAction(courseId))
      } 
    },[success,lecturerDetail,getNoticeAction,getTestBySourceAction,getAssignmentByStaffIdAction,lecturerCourseAction])

 
  const lecturerGetNotice = useSelector((state) => state.lecturerGetNotice);
  const { getNotice } = lecturerGetNotice;

  const lectureGetTestBySource = useSelector((state) => state.lectureGetTestBySource);
  const { getTestBySource} = lectureGetTestBySource;


  const lecturerGetAssignmentByStaffID = useSelector((state) => state.lecturerGetAssignmentByStaffID);
  const { getAssignmentByStaffId } = lecturerGetAssignmentByStaffID;
 

  const lecturerCourse = useSelector((state) => state.lecturerCourse);
  const {lecturerCourses}  = lecturerCourse;


const mycourses = lecturerCourses && lecturerCourses.specialization && lecturerCourses.specialization.courses
console.log(mycourses)
const assignment = () =>{
  navigate("/lecturer/assessment/assignment/history")
}
const test = () =>{
  navigate("/lecturer/assessment/test/history")
}

  return (
    <div className="page_container">
      <LectureSidebar dashboard={"focus"} />
      <div className="right_container2">
        <LecturerHeader title={"Dashboard"} />
        <div className={styles.info_container}>
          <div className={styles.left}>
           
            <div className={styles.infoheader}>
              <div className={styles.salutation}>
                <h1>Hi {username}</h1>
                <p>its nice seeing you again</p>
              </div>
              <div className={styles.infoBtn}>
                
                    <button onClick={assignment}>Assignments <AiOutlineCaretDown/></button>
                
                    <button onClick={test}>Tests <AiOutlineCaretDown/></button>
                    
                </div>
            </div>
            <div className={styles.card_container}>
                  <Card3 number={getAssignmentByStaffId&&getAssignmentByStaffId.length}
                label={"Assignment Created"}
                bgColor={"rgba(4, 87, 22, 0.24)"}
                labelColor={"#045716"}
                iconColor={"rgba(4, 87, 22, 1)"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={getTestBySource && getTestBySource.length}
                label={"Test Created"}
                bgColor={"rgba(82, 69, 159, 0.24)"}
                labelColor={"#52459F"}
                iconColor={"rgba(82, 69, 159, 1)"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={getNotice&&getNotice.length}
                label={"Notice Created"}
                bgColor={"rgba(203, 84, 1, 0.24)"}
                labelColor={"#CB5401"}
                iconColor={"#CB5401"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             
            </div>
            <div className={styles.courseHeader}> My Courses</div>
            <div className={styles.tableContainer}>
            <Table varient="striped" colorScheme="gray" size="md">
            <Tr>
              <Th>Course Code</Th>
              <Th>Course Title</Th>
              <Th>Course Unit</Th>
              
            </Tr>
            {mycourses &&
              mycourses.map((item,i) => (
                <Tbody>
                  <Tr key={i}>
                  <Td>{item.code}</Td>
                  <Td>{item.name}</Td>
                    <Td>{item.unit}</Td>
                    
                   
                    </Tr>
                </Tbody>
              ))}
          </Table>
            </div>
           
          </div>
          <div className={styles.right}>
            <div className={styles.reactCalender}>
                <Calendar onChange={onChange} value={value} />
            </div>

            <div  className={styles.notice_container}>
          <div className={styles.noticeTitle}>New Notification</div>
          <div className={styles.notice}><LecturerNotice/></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
