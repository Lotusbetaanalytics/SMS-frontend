import styles from "./styles.module.css";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import StudentSidebar from "../../../components/Sidebar";
import SearchWidget from "../../../components/Input/Search";
import adminpic from "../../../assets/profile.jpg";

const StudentNotice = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  const details = useSelector((state) => state.details);
    const { studentDetail } = details;
    const mystudentDetails = studentDetail;
    
    const academicData = mystudentDetails && mystudentDetails.student[0].information;
    console.log(academicData)

  return (
    <div className="page_container">
      <StudentSidebar profile={"active"} />
      <div className="right_container">
        <SearchWidget />
        <div className="right_content_Notice">
          <div className={styles.profile_bg}>
            <div>
              <div className={styles.header}>
                <div className={styles.header_title}>Notice Board</div>
              </div>
              {academicData &&academicData.map((item,i)=>(
                     <div className={styles.noticeContainer} key={i}> 
                     <div className={styles.imageContainer}>
                        {item.images.map((img,x)=>(
                            <div key={x.id}>
                                <img src={img.image} />
                            </div>
                            
                        ))}
                         
                     </div>
                     <div className={styles.content}>
                         <div className={styles.contentHeader}>
                             {item.title}
                         </div>
                         <div className={styles.newsContent}>
                         {item.body}
                         </div>
                         <div className={styles.footer}> {item.timestamp}</div>
                     </div> 
                   </div>
              ))}
             
              
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default StudentNotice;
