import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import adminpic from "../../assets/adminpic.png";
import { RiArrowDownSFill } from "react-icons/ri";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import class1 from "../../assets/class1.png";
import { useDispatch, useSelector } from "react-redux";
import { getNotice } from "../../redux/action/noticeBoardAction";
import { userDetails } from "../../redux/action/userAction";

function WidgetPost() {
  const dispatch = useDispatch();

  const [calDate, setCalDate] = useState(new Date());

  function onChange() {
    setCalDate(calDate);
  }

  useEffect(() => {
    dispatch(userDetails());
  }, [dispatch]);
  const userDetail = useSelector((state) => state.userDetail);
  const { username } = userDetail;

  useEffect(() => {
    dispatch(getNotice());
  }, [dispatch]);

  const noticeGet = useSelector((state) => state.noticeGet);
  const { allNotice } = noticeGet;

  return (
    <div className={styles.widgetPostContainer}>
      <div className={styles.widgetHeader}>
        <img src={adminpic} alt="User" />
        <div className={styles.widgetUserName}>
          <div className={styles.widgetUser}>
            <h5>{username && username.first_name}</h5>
            <h5>{username && username.last_name}</h5>
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
        <Calendar
          onChange={onChange}
          value={calDate}
          className={styles.calendarCon}
        />
      </div>
      <div className={styles.noticeContainer}>
        <div className={styles.noticeTitle}>
          <h3>Notice Board</h3>
        </div>
        {allNotice &&
          allNotice.map((item, i) => (
            <div key={i} className={styles.noticeCards}>
              <div className={styles.noticeGrid}>
                <div className={styles.noticeContent}>
                  <img src={class1} alt="Notice" />
                </div>
                <div className={styles.noticeTitles}>
                  <div className={styles.noticeAnnoces}>{item.title}</div>
                  <div className={styles.noticeUser}>{item.message}</div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default WidgetPost;
