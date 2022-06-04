import React, { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import Calendar from "react-calendar";
import book from "../../assets/book.png"
import "react-calendar/dist/Calendar.css";
import { AiOutlineUser } from "react-icons/ai";
import { FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { BsBarChart, BsCalendar2Event, BsCaretDown } from "react-icons/bs";
import { BiLineChart,BiBell } from "react-icons/bi";
import { GiBookshelf, GiTeacher } from "react-icons/gi";
import styles from "./styles.module.css"
import StudentSidebar from "../../components/Sidebar";
import SearchWidget from "../../components/Input/Search";
import CardTwo from "../../components/cards/card";
import Cards from "../../components/cards";
import { studentDetails } from "../../redux/Actions/studentActions/studentAction";
import NotificationCard from "../../components/cards/notificationCard";
const StudentDashboard = () => {

  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

    const navigate = useNavigate();
    const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

    useEffect(() => {
     if (!studentLogin) {
       navigate("/")
     }
   }, [studentLogin,navigate]);

   useEffect(() => {
    dispatch(studentDetails())
 }, []);

    const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    // const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
    // const mystudentDetails = myDetail;

    
    const academicData = mystudentDetails && mystudentDetails.student[0].academic_data;
    
    
    const student_cgpa = academicData && academicData.cgpa
  
    
    const student_department = academicData && academicData.department.name
  
    
    const student_level = academicData && academicData.level.code
    

    const student_session = academicData && academicData.session.year
    
    
  const course_adviser = mystudentDetails && mystudentDetails.student[0].academic_data ? mystudentDetails && mystudentDetails.student[0].academic_data.course_adviser.staff.user.full_name : "You have not been assigned level adviser" ;
  

  const matricNum = mystudentDetails && mystudentDetails.student[0].student_id
  
  const faculty = academicData && academicData.department.faculty.name
  const registered_courses = mystudentDetails && mystudentDetails.student[0].course_registrations.length
    
   

  return (
    <div className={styles.studentDashboard}>
      <StudentSidebar dashboard={"active"} />
      <div className={styles.dashboard_info}>
        <div className={styles.searchContainer}>
        <SearchWidget/>
          </div>

        <div className={styles.info_container}>
          <div className={styles.book}>
            <img src={book} alt="avatar" />
          </div>
          <CardTwo name={mystudentDetails && mystudentDetails.first_name}/>
          <div className={styles.card_container}>
            <Cards
              iconColor={"white"}
              iconBorder={"10px double rgba(82, 69, 159, 0.49);"}
              body={matricNum}
              title={"Matric Num"}
              bgColor={"rgba(82, 69, 159, 0.49)"}
              icon={<AiOutlineUser />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(131, 233, 244, 0.49);"}
              body={student_department}
              title={"Department"}
              bgColor={"rgba(131, 233, 244, 1)"}
              icon={<FaUniversity />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(69, 159, 100, 0.49);"}
              body={faculty}
              title={"Faculty"}
              bgColor={"rgba(69, 159, 100, 1)"}
              icon={<FaUniversity />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(203, 84, 1, 0.49)"}
              body={student_level}
              title={"Level"}
              bgColor={"rgba(203, 84, 1, 1)"}
              icon={<BsBarChart />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(4, 42, 98, 0.49);"}
              body={student_cgpa}
              title={"CGPA"}
              bgColor={"rgba(4, 42, 98, 1)"}
              icon={<BiLineChart />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px double rgba(167, 22, 22, 0.49)"}
              body={registered_courses}
              title={"Courses Registered"}
              bgColor={"rgba(167, 22, 22, 1)"}
              icon={<GiBookshelf />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(199, 158, 200, 0.09)"}
              body={student_session}
              title={"Session"}
              bgColor={"rgba(199, 158, 200, 1)"}
              icon={<BsCalendar2Event />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(96, 66, 37, 1)"}
              body={course_adviser}
              title={"D.C.A"}
              bgColor={"rgba(52, 26, 37, 1)"}
              icon={<FaChalkboardTeacher />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px double rgba(4, 74, 28, 0.49)"}
              body={"Gbenga fagbemi"}
              title={"H.O.D"}
              bgColor={"rgba(4, 87, 22, 1)"}
              icon={<GiTeacher />}
            />
          </div>
        </div>
      </div>
      <div className={styles.widget}>
        <div className={styles.headerbar}>
          <div className={styles.bellContainer}>
            
              <BiBell/>
          
          <div className={styles.notice_count}>
              2
          </div>
          </div>
          <div className={styles.userName}>
            <div className={styles.avatar}>
            <img src={book} alt="avatar" />
            </div>
            {mystudentDetails && mystudentDetails.full_name}  <button className={styles.logout_btn}><BsCaretDown/></button></div>
           
        </div>
        <div className={styles.reactCalender}>
         <Calendar onChange={onChange} value={value} />
        </div>
        <div className={styles.spaceBetween}>
          {/* <div className={styles.padding}>
            <p>Dean of Faculty</p>
            <div>Prof Olaitan</div>
            </div> */}
          {/* <div className={styles.padding}>
            <p>Vice Chancellor</p>
            <div>T.D Pepper</div>
          </div> */}

        </div>
        <div  className={styles.notice_container}>
          <div className={styles.noticeTitle}>Notice</div>
          <div className={styles.notice}><NotificationCard/></div>
          </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
