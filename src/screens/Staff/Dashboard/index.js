import React, { useState } from "react";
import Card3 from "../../../components/cards/card3";
import LecturerHeader from "../../../components/lecturerHeader";
import LectureSidebar from "../../../components/lecturerSidebar";
import styles from "./styles.module.css";
import Calendar from "react-calendar";
import { AiOutlineFileMarkdown } from "react-icons/ai";
import NotificationCard from "../../../components/cards/notificationCard";
const LecturerDashboard = () => {
    const [value, onChange] = useState(new Date());
  return (
    <div className="page_container">
      <LectureSidebar dashboard={"focus"} />
      <div className="right_container2">
        <LecturerHeader title={"Dashboard"} />
        <div className={styles.info_container}>
          <div className={styles.left}>
           
            <div className={styles.infoheader}>
              <div className={styles.salutation}>
                <h1>Hi Jane</h1>
                <p>its nice seeing you again</p>
              </div>
              <div className={styles.infoBtn}>
                <div>
                  <select>
                    <option>Assignments</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div>
                  <select>
                    <option>Tests</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
              </div>
            </div>
            <div className={styles.card_container}>
                  <Card3 number={"20"}
                label={"Submitted Assignment"}
                bgColor={"rgba(4, 87, 22, 0.24)"}
                labelColor={"#045716"}
                iconColor={"rgba(4, 87, 22, 1)"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={"10"}
                label={"Passed Assignments"}
                bgColor={"rgba(82, 69, 159, 0.24)"}
                labelColor={"#52459F"}
                iconColor={"rgba(82, 69, 159, 1)"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={"60"}
                label={"Failed Assigment"}
                bgColor={"rgba(203, 84, 1, 0.24)"}
                labelColor={"#CB5401"}
                iconColor={"#CB5401"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={"23"}
                label={"Submitted Test"}
                bgColor={"rgba(4, 42, 98, 0.24)"}
                labelColor={"#042A62"}
                iconColor={"#042A62"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={"32"}
                label={"Passed Test"}
                bgColor={"rgba(52, 26, 37, 0.24)"}
                labelColor={"#A71616"}
                iconColor={"#A71616"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 
             <Card3 number={"43"}
                label={"Failed Test"}
                bgColor={"rgba(52, 26, 37, 0.24)"}
                labelColor={"#341A25"}
                iconColor={"#341A25"}
                icon={<AiOutlineFileMarkdown />}
                bgkColor={"white"}
            /> 

            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.reactCalender}>
                <Calendar onChange={onChange} value={value} />
            </div>

            <div  className={styles.notice_container}>
          <div className={styles.noticeTitle}>New Notification</div>
          <div className={styles.notice}><NotificationCard/></div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerDashboard;
