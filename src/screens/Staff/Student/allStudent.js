import { Button, Table, Th, Tr, Tbody, Td, useToast } from "@chakra-ui/react";
import { CircularProgress } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forwardRef } from "react";
import MaterialTable from "material-table";
import LecturerHeader from "../../../components/lecturerHeader";
import LectureSidebar from "../../../components/lecturerSidebar";
import { lecturerCourseAction } from "../../../redux/Actions/lecturer/lecturerCourses";
import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";
import tableData from "../Assesement/tableData";
import styles from "./styles.module.css";
import { getStudentAction } from "../../../redux/Actions/lecturer/lecturerGetStudent";

const AllStudent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const toast = useToast();

  const [course, setCourse] = useState("");

  const getId = JSON.parse(localStorage.getItem("lecturerDetails"));
  const id = getId.staff[0].id;
  console.log(id);

  useEffect(() => {
    dispatch(lecturerCourseAction(id));
  }, [dispatch]);

  const lecturerCourse = useSelector((state) => state.lecturerCourse);
  const { lecturerCourses, loading } = lecturerCourse;

  const mycourses =
    lecturerCourses &&
    lecturerCourses.specialization &&
    lecturerCourses.specialization.courses;
  console.log(mycourses);

  const lecturerGetStudent = useSelector((state) => state.lecturerGetStudent);
  const { getStudent, loading: isLoading } = lecturerGetStudent;

  const columns = [
    {
      title: "Matric Number",
      field: "student.matric_no",
      type: "string",
    },
    {
      title: "Course Name",
      field: "course.name",
      type: "string",
      cellStyle: {
        width: 400,
        maxWidth: 400,
      },
      headerStyle: {
        width: 400,
        maxWidth: 400,
      },
    },
    {
      title: "Code",
      field: "course.code",
      type: "string",
    },
    {
      title: "Semester",
      field: "semester.semester",
      type: "number",
    },
  ];

  const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => (
      <ChevronRight {...props} ref={ref} />
    )),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => (
      <ChevronLeft {...props} ref={ref} />
    )),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => (
      <ArrowDownward {...props} ref={ref} />
    )),
    ThirdStateCheck: forwardRef((props, ref) => (
      <Remove {...props} ref={ref} />
    )),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  };

  const handleAssign = (rowData) => {
    console.log(rowData);
  };

  const courseHandler = (e) => {
    setCourse(e.target.value);
    console.log(course, "this is it");
    const courseName = course;

    dispatch(getStudentAction(courseName));
  };
  console.log(getStudent);
  
  const assignmentPage = () => {
    navigate("/lecturer/student/assignment");
  };
  const testPage = () => {
    navigate("/lecturer/student/test");
  };
  const allStudent = () => {
    navigate("/lecturer/student/student");
  };
  const deleteHandler = (id) => {
    console.log(id);
  };
  return (
    <div className="page_container">
      <LectureSidebar student={"focus"} />
      <div className="right_container2">
        <LecturerHeader title={"Assignment History"} />
        {loading && <CircularProgress isIndeterminate color="green.300" />}
        {isLoading && <CircularProgress isIndeterminate color="green.300" />}
        <div className={styles.dropDown}>
          <div className={styles.dropDown_container}>
            <button className={`${styles.left_Curve} ${styles.white}`} onClick={assignmentPage}>
              Assignment
            </button>
            <button className={styles.white} onClick={testPage}>
              Test
            </button>
            <button className={`${styles.right_Curve} ${styles.green}`} onClick={allStudent}>
             My Student
            </button>
          </div>
          <div>
            <select onChange={courseHandler} value={course}>
              {/* <option>Select Assignment</option> */}
              {mycourses &&
                mycourses.map((item, i) => (
                  <option key={i} value={item.name}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>
        <div className={styles.white_container}>
          <MaterialTable
            columns={columns}
            icons={tableIcons}
            data={getStudent && getStudent}
            title={`Total Number of student ${getStudent && getStudent.length}`}
            options={{
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
            actions={[
              {
                icon: "visibility",
                iconProps: {
                  style: { fontSize: "20px", color: "gold" },
                },
                tooltip: "add",

                onClick: (event, rowData) => {
                  handleAssign(rowData);
                },
              },
            ]}
            localization={{
              toolbar: {
                searchPlaceholder: "search course",
              },
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
        </div>
      </div>
    </div>
  );
};

export default AllStudent;
