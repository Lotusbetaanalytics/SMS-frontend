import { Alert, CircularProgress } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { forwardRef } from 'react';
import MaterialTable from "material-table";
import styles from "./styles.module.css"
import StudentSidebar from '../../../components/Sidebar';
import SearchWidget from '../../../components/Input/Search';

import { studentDetails } from '../../../redux/Actions/studentActions/studentAction';
import { useDispatch, useSelector } from 'react-redux';
import { addCourseAction } from '../../../redux/Actions/courseAction/courseAction';
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
import { useNavigate } from 'react-router-dom';
const Result = () => {
    
  const dispatch = useDispatch();
    const [msg,setMsg] = useState("");
    const [error,setError] = useState("")

    useEffect(() => {
      dispatch(studentDetails());
    }, []);

    const details = useSelector((state) => state.details);
    const { loading,studentDetail } = details;

    const mystudentDetails = studentDetail;
    const academicData =
      mystudentDetails && mystudentDetails.student[0].results;
    
    const resultBank = academicData&& academicData
  console.log(resultBank)

  const Session =
      mystudentDetails && mystudentDetails.student[0].academic_data && mystudentDetails.student[0].academic_data.session.year;
    
     
    const columns=[
        {
          title: "Course",
          field: "course.name",
          type:"string"
        },
        {
          title: "Code",
          field: "course.code",
          
        },
        {
          title: "Unit",
          field: "course.unit",
          type:"number"
        },
        {
            title: "Session",
            field: "session",
            type:"number"
          },
        {
          title: "Semester",
          field: "semester",
          type:"number"
        },
        {
            title: "Score",
            field: "score",
            type:"number"
          },
          {
            title: "Grade",
            field: "grade",
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
    <StudentSidebar courses = {"active"}/>
    <div className="right_container">
      <SearchWidget />
      <div className='message_container'>
     
        {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
         
              
          </div>
      <div className="right_content_container">
        <div className={styles.profile_bg}>
           
            <div className={styles.tableContainer}>
            <div className={styles.header}>
              <div className={styles.header_title}>Results</div>
            </div>
             <MaterialTable
              columns={columns}
              icons={tableIcons}
              data={resultBank}
              title={`${Session & Session} Results`}
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
                exportButton:true
                
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
             
             />
            
             
            </div>
          </div>
        </div>
      </div>
    </div>
);

}

export default Result