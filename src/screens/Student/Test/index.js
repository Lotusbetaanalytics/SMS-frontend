import { Alert } from "@chakra-ui/react";
import MaterialTable from "material-table";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchWidget from "../../../components/Input/Search";
import StudentSidebar from "../../../components/Sidebar";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import { getTestquestion } from "../../../redux/Actions/studentActions/testQuestion";
import styles from "./styles.module.css"
const TestList = () => {
    const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data,setData] = useState("");


  const myDetail = JSON.parse(localStorage.getItem("studentDetails"));
  const studentDetail = myDetail;
//   const details = useSelector((state) => state.details);
//   const {studentDetail,loading} = details;
//   console.log(studentDetail)

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));
 

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

  const registeredCourse = studentDetail && studentDetail.student[0].registered_quizes;
  
 
  const testHandler = (rowData) =>{
    localStorage.setItem("quiz_takers", JSON.stringify(rowData.id));
    dispatch(getTestquestion(rowData.id))
    navigate(`/student/test/${rowData.id}`)
    console.log(rowData.id)
    
  }
  useEffect(() => {
    dispatch(studentDetails())
    setData(registeredCourse&&registeredCourse )
    }, [dispatch]);
   const [msg,setMsg] = useState("");

   const columns=[
    {
        title: "Course Title",
        field: "quiz.name",
        type:"string"
    },
    {
      title: "Course code",
      field: "id",
      type:"string"
    },
    {
      title: "Status",
      field: "quiz.is_completed",
      type:"string"
    },
    
    
  ]
  return (
    <div className="page_container">
    <StudentSidebar test={"active"}/>
    <div className="right_container">
      <SearchWidget />
      <div className='message_container'>
          {msg && (
              <Alert status="success">
                Profile Updated Successfully
              </Alert>
              )}
               
          </div>
      <div className="right_content_container">
        <div className={styles.profile_bg}>
          <div className={styles.flex}>
            <div className={styles.header}>
              <div className={styles.header_title}>Test</div>
            </div>
            <div className={styles.tableContainer}>
            <MaterialTable
              columns={columns}
             
              data={data }
              title={`Available Test: ${data.length}`}
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
              actions={[
                {
                  icon: "visibility",
                  iconProps: {
                    style: { fontSize: "20px", color: "gold", marginLeft:"auto"},
                  },
                  tooltip: "Attempt",
    
                  onClick: (event, rowData) => {
                     testHandler(rowData);
                  },
                },
              ]}
              localization={{
                toolbar: {
                    searchPlaceholder: "search course"
                }
            }}
              components={{
                Action: (props) => (
                  <button
                    onClick={(event) => props.action.onClick(event, props.data)}
                    className={styles.material_btn}
                  >
                    {props.action.tooltip}
                  </button>
                ),
              }}
             />
            </div>
          </div>

         
        </div>
      </div>
    </div>
  </div>
);

}

export default TestList