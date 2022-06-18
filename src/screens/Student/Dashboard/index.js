import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import MaterialTable from "material-table";
import { forwardRef } from 'react';
import Calendar from "react-calendar";
import book from "../../../assets/book.png";
import "react-calendar/dist/Calendar.css";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLogout } from "react-icons/md";
import { FaUniversity, FaChalkboardTeacher } from "react-icons/fa";
import { BsBarChart, BsCalendar2Event, BsCaretDown } from "react-icons/bs";
import { BiLineChart, BiBell } from "react-icons/bi";
import { GiBookshelf, GiTeacher } from "react-icons/gi";
import styles from "./styles.module.css";
import adminpic from "../../../assets/profile.jpg";
import StudentSidebar from "../../../components/Sidebar";
import SearchWidget from "../../../components/Input/Search";
import CardTwo from "../../../components/cards/card";
import Cards from "../../../components/cards";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import NotificationCard from "../../../components/cards/notificationCard";
import { studentLogout } from "../../../redux/Actions/auth";
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
const StudentDashboard = () => {
  const dispatch = useDispatch();
  const [value, onChange] = useState(new Date());

  const navigate = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/");
    }
  }, [studentLogin, navigate]);

  useEffect(() => {
    dispatch(studentDetails());
  }, []);

  const logoutHandler = () => {
    dispatch(studentLogout());
    setTimeout(() => navigate("/"), [2000]);
  };

  const details = useSelector((state) => state.details);
  const { studentDetail } = details;
  const mystudentDetails = studentDetail;

  const academicData =
    mystudentDetails && mystudentDetails.student[0].academic_data;

  const student_cgpa = academicData && academicData.cgpa;

  const student_department = academicData && academicData.department.name;

  const student_level = academicData && academicData.level.code;

  const student_session = academicData && academicData.session.year;

  const course_adviser =
    mystudentDetails && mystudentDetails.student[0].academic_data
      ? mystudentDetails &&
        mystudentDetails.student[0].academic_data &&
        mystudentDetails &&
        mystudentDetails.student[0].academic_data.course_adviser &&
        mystudentDetails &&
        mystudentDetails.student[0].academic_data.course_adviser.staff.user
          .full_name
      : "You have not been assigned level adviser";

  const matricNum = mystudentDetails && mystudentDetails.student[0].student_id;

  const faculty = academicData && academicData.department.faculty.name;
  const Hod = academicData && academicData.department.head;
  
  const registered_courses =
    mystudentDetails && mystudentDetails.student[0].course_registrations.length;
    const course_registered =
    mystudentDetails && mystudentDetails.student[0].course_registrations
    console.log(course_registered);
    const courseBank =academicData&& academicData.specialization.recommended_courses
  
    const courseData = courseBank && courseBank
    const columns=[
      {
        title: "Course code",
        field: "course.code",
        type:"string"
      },
      {
        title: "Course Name",
        field: "course.name",
        type:"string",
        cellStyle: {
          width: 400,
          maxWidth: 400
        },
        headerStyle: {
          width:400,
          maxWidth: 400
        }
        
      },
      {
        title: "Course Unit",
        field: "course.unit",
        type:"number"
      },
      {
        title: "Semester",
        field: "semester.semester",
        type:"number"
      },
      
      
    ]

    const tableIcons = {
      Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
      Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
      Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
      DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
      Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
      Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
      FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
      LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
      NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
      PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
      ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
      Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
      SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
      ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
      ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
    };
 

  return (
    <div className={styles.studentDashboard}>
      <StudentSidebar dashboard={"active"} />
      <div className={styles.dashboard_info}>
        <div className={styles.searchContainer}>
          <SearchWidget />
        </div>

        <div className={styles.info_container}>
          <div className={styles.book}>
            <img src={book} alt="avatar" />
          </div>
          <CardTwo name={mystudentDetails && mystudentDetails.first_name} />
          <div className={styles.card_container}>
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(82, 69, 159, 0.49)"}
              body={matricNum}
              title={"Matric Num"}
              bgColor={"rgba(82, 69, 159, 0.49)"}
              icon={<AiOutlineUser />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px rgba(131, 233, 244, 0.49)"}
              body={student_department}
              title={"Department"}
              bgColor={"rgba(131, 233, 244, 1)"}
              icon={<FaUniversity />}
            />
            <Cards
              iconColor={"white"}
              iconBorder={"5px solid rgba(69, 159, 100, 0.49)"}
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
              iconBorder={"5px solid rgba(4, 42, 98, 0.49)"}
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
              body={Hod}
              title={"H.O.D"}
              bgColor={"rgba(4, 87, 22, 1)"}
              icon={<GiTeacher />}
            />
          </div>
        </div>
        {/* <div className={styles.table_container}>
        <MaterialTable
              columns={columns}
              icons={tableIcons}
              data={courseData}
              title={`Available Courses: ${courseData && courseData.length}`}
              options={
                  {
                headerStyle: {
                  
                  fontSize: 16,
                  borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
                },
                actionsCellStyle: {
                  color: "#FF00dd",
                },
                 
                actionsColumnIndex: -1,
                
              }}
              
              style={{
                boxShadow: "none",
                width: "100%",
                boxSizing: "border-box",
                 paddingLeft: "5px",
                paddingRight: "5px",
                
                margin: "0 0",
              }}
              
              localization={{
                toolbar: {
                    searchPlaceholder: "search course"
                }
            }}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className={styles.table_btn}
                  >
                    {props.action.tooltip}
                  </button>
                ),
              }}
             />

        </div> */}
        
            
      </div>
      <div className={styles.widget}>
        <div className={styles.headerbar}>
          <button className={styles.bellContainer}>
            <BiBell />

            <div className={styles.notice_count}>2</div>
          </button>
          <div className={styles.userName}>
            <div className={styles.avatar}>
              <img src={adminpic} alt="avatar" />
            </div>
            {mystudentDetails && mystudentDetails.full_name}{" "}
            <button className={styles.logout_btn} onClick={logoutHandler}>
              <MdOutlineLogout />
            </button>
          </div>
        </div>
        <div >
          <Calendar className="react-calender" onChange={onChange} value={value} />
        </div>
       
        <div className={styles.notice_container}>
          <div className={styles.noticeTitle}>Notice</div>
          <div className={styles.notice}>
            <NotificationCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
