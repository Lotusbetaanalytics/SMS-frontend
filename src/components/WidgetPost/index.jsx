import React, { useState } from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import class1 from "../../assets/class1.png";
import bonding from "../../assets/bonding.png";

function WidgetPost() {
  const [calDate, setCalDate] = useState(new Date());

  function onChange() {
    setCalDate(calDate);
  }

  return (
    <div className={styles.widgetPostContainer}>
      <div className={styles.widgetHeader}>
        <img src={adminpic} alt="User" />
        <div className={styles.widgetUserName}>
          <div className={styles.widgetUser}>
            <h5>Fonsus Ali</h5>
            <div className={styles.widgetIcondrop}>
              <RiArrowDownSFill />
            </div>
          </div>
        </div>
        <div className={styles.widgetNotify}>
          <MdOutlineNotificationsActive />
          <p className={styles.colorNotify}></p>
        </div>
      </div>
      <div className={styles.widgetCalendarContainer}>
        <Calendar onChange={onChange} value={calDate} />
      </div>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeTitle}>
          <h3>Notice Board</h3>
        </div>
        <div className={styles.noticeCards}>
          <div className={styles.noticeContent}>
            <img src={class1} alt="Notice" />
          </div>
          <div className={styles.noticeTitles}>
            <div className={styles.noticeAnnoces}>Notice on closing hour</div>
            <div className={styles.noticeUser}>By Lanre</div>
          </div>
        </div>
        <div className={styles.noticeCards}>
          <div className={styles.noticeContent}>
            <img src={bonding} alt="Notice" />
          </div>
          <div className={styles.noticeTitles}>
            <div className={styles.noticeAnnoces}>Agenda for Team bonding</div>
            <div className={styles.noticeUser}>By Abidoye</div>
          </div>
        </div>
        <div className={styles.noticeCards}>
          <div className={styles.noticeContent}>
            <img src={class1} alt="Notice" />
          </div>
          <div className={styles.noticeTitles}>
            <div className={styles.noticeAnnoces}>
              Department form closing Date
            </div>
            <div className={styles.noticeUser}>By Fonsus</div>
          </div>
        </div>
        <div className={styles.noticeCards}>
          <div className={styles.noticeContent}>
            <img src={bonding} alt="Notice" />
          </div>
          <div className={styles.noticeTitles}>
            <div className={styles.noticeAnnoces}>
              Get together for Students
            </div>
            <div className={styles.noticeUser}>By Jude</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WidgetPost;
