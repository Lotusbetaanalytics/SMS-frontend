import styles from "./styles.module.css";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { studentDetails, studentNoticeAction } from "../../../redux/Actions/studentActions/studentAction";
import StudentSidebar from "../../../components/Sidebar";
import SearchWidget from "../../../components/Input/Search";
import adminpic from "../../../assets/profile.jpg";

const NoticeChild = () => {
  const dispatch = useDispatch();
  const {id} = useParams()

  useEffect(() => {
    dispatch(studentNoticeAction(id));
  }, [dispatch]);

  const noticeById = useSelector((state) => state.noticeById);
    const { noticeBoard } = noticeById;
    console.log(noticeBoard)
    
    

  return (
    <div className="page_container">
      <StudentSidebar dashboard={"active"} />
      <div className="right_container">
        <SearchWidget />
        <div className="right_content_Notice">
          <div className={styles.profile_bg}>
            <div>
              <div className={styles.header}>
                <div className={styles.header_title}>Notice Board</div>
              </div>
              
                     <div className={styles.noticeContainer}> 
                     
                     <div className={styles.content}>
                         <div className={styles.contentHeader}>
                             {noticeBoard&&noticeBoard.title}
                         </div>
                         <div className={styles.newsContent}>
                         {noticeBoard&&noticeBoard.message}
                         </div>
                         <div className={styles.footer}>
                         <div className={styles.source}>  Source : {noticeBoard&&noticeBoard.source}</div>
                           <div>{noticeBoard&&noticeBoard.timestamp}</div>
                           </div>
                     </div> 
                   </div>
        
             
              
            </div>

          </div>
          
        </div>
      </div>
    </div>
  );
};

export default NoticeChild;
