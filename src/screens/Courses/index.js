import { Alert } from '@chakra-ui/react';
import React, { useState } from 'react'
import SearchWidget from '../../components/Input/Search';
import StudentSidebar from '../../components/Sidebar';
import MaterialTable from "material-table";
import styles from "./styles.module.css"
import data from "../../data"
import tableIcons from '../../components/materialTable';
const AvailableCourses = () => {
    const [msg,setMsg] = useState("");
    const handleAssign = (id) => {
        console.log(id);
        
      };
    const columns=[
        {
            title: "id",
            field: "id",
            type:"string"
        },
        {
          title: "course code",
          field: "course_code",
          type:"string"
        },
        {
          title: "unit course",
          field: "unit",
          type:"string"
        },
        {
          title: "session",
          field: "session",
          type:"string"
        },
        
        
      ]
    const submitHandler =() =>{
    }
  return (
    <div className="page_container">
    <StudentSidebar courses = {"active"}/>
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
              <div className={styles.header_title}>Course Registeration</div>
            </div>
            <div className={styles.tableContainer}>
             <MaterialTable
              columns={columns}
              icons={tableIcons}
              data={data}
              title={`Available Courses: ${data.length}`}
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

export default AvailableCourses