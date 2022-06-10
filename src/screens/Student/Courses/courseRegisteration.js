import { Alert, CircularProgress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { forwardRef } from 'react';
import SearchWidget from '../../../components/Input/Search';
import StudentSidebar from '../../../components/Sidebar';
import MaterialTable from "material-table";
import styles from "./styles.module.css"
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
import data from '../../../components/data';
import { useDispatch, useSelector } from 'react-redux';
import { studentDetails } from '../../../redux/Actions/studentActions/studentAction';
import { deleteCourse, deleteCourseAction } from '../../../redux/Actions/courseAction/courseAction';
import { STUDENT_DETAILS_REQUEST } from '../../../redux/Constants/studentConstants/studentConstants';
import { DELETE_COURSE_RESET } from '../../../redux/Constants/courseRegisteration/courseRegisteration';

const RegisteredCourses = () => {
  const dispatch = useDispatch();
    const [msg,setMsg] = useState("");

    const deleteCourse_ = useSelector((state) => state.deleteCourse_);
    const {loading:deleteLoading, success:deleteSuccess } = deleteCourse_;

    const handleAssign = (rowData) => {
        console.log(rowData);
        const id = rowData.id
        console.log(id)
        dispatch(deleteCourseAction(id))
        if (deleteSuccess) {
          setMsg(true)
          dispatch({type:DELETE_COURSE_RESET})
          
        }
      };

      useEffect(() => {
        dispatch(studentDetails());
      }, []);

      const details = useSelector((state) => state.details);
      const { studentDetail,loading } = details;
      const mystudentDetails = studentDetail;

      const registered_courses =
    mystudentDetails && mystudentDetails.student[0].course_registrations;
      console.log(registered_courses)

      const courseData = registered_courses && registered_courses 
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
    <div className="page_container">
    <StudentSidebar courses={"active"} />
    <div className="right_container">
      <SearchWidget />
      <div className='message_container'>
      {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
         {deleteLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
         {msg && (
              <div>Course Dropped Successfully</div>
        )}
          </div>
      <div className="right_content_container">
        <div className={styles.profile_bg}>
          <div className={styles.flex}>
           
            <div className={styles.tableContainer}>
            <div className={styles.header}>
              <div className={styles.header_title}>Registered Courses</div>
            </div>
             <MaterialTable
              columns={columns}
              icons={tableIcons}
              data={courseData}
              title={`Registered Courses: ${courseData && courseData.length}`}
              options={
                  {
                headerStyle: {
                  
                  fontSize: 16,
                  borderBottom: "1px solid rgba(196, 196, 196, 0.32)",
                },
                actionsCellStyle: {
                  color: "#FF00dd",
                },
                // filtering:true,
                actionsColumnIndex: -1,
                exportButton: true
                
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
                  tooltip: "Drop",
    
                  onClick: (event, rowData) => {
                     handleAssign(rowData);
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
      </div>
    </div>
  </div>
);

}

export default RegisteredCourses