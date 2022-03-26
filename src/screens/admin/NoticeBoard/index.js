import React, { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Haeder from "../../../components/Header";
import Sidebar from "../../../components/Sidebar";
import { getScope } from "../../../redux/action/getScopeAction";
import { postNotice } from "../../../redux/action/noticeBoardAction";
import { POST_NOTICE_RESET } from "../../../redux/constants/noticeBoardConstants";
import styles from "./styles.module.css";

function NoticeBoard() {
  const [noticeTitle, setNoticeTitle] = useState("");
  const [noticeMessage, setNoticeMessage] = useState("");
  const [scopeDetail, setScopeDetail] = useState("");
  // const [sourceDetail, setSourceDetail] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  //   const scopeData = JSON.parse(localStorage.getItem("getScopeInfo"));
  //   const dataScope = scopeData;
  //   console.log(dataScope);

  const submitHandler = (e) => {
    e.preventDefault();
    const noticeData = {
      title: noticeTitle,
      message: noticeMessage,
      // source: sourceDetail,
      scope: scopeDetail,
    };
    dispatch(postNotice(noticeData, toast));
    dispatch({ type: POST_NOTICE_RESET });
  };

  useEffect(() => {
    dispatch(getScope());
  }, [dispatch]);

  const scopeId = useSelector((state) => state.scopeId);
  const { getScopeId } = scopeId;
  console.log(getScopeId);

  return (
    <div className={styles.noticeBoardContainer}>
      <Sidebar />
      <Haeder />

      <div className={styles.noticeBoard}>
        <div className={styles.noticeBoardTitle}>
          <span>Notice Board</span>
        </div>

        <div className={styles.noticeBoardContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.noticeBoardForm}>
              <input
                type="text"
                onChange={(e) => setNoticeTitle(e.target.value)}
                value={noticeTitle}
                placeholder="Notice Title"
                required={true}
              />

              <select
                onChange={(e) => setScopeDetail(e.target.value)}
                value={scopeDetail}
                required={true}
                className={styles.noticeBoardSelect}
              >
                <option>Scope..</option>
                {getScopeId &&
                  getScopeId.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.description}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                onChange={(e) => setNoticeMessage(e.target.value)}
                value={noticeMessage}
                placeholder="Post Message"
                required={true}
                className={styles.noticeMessage}
              />

              {/* <select
                onChange={(e) => setSourceDetail(e.target.value)}
                value={sourceDetail}
                required={true}
                className={styles.noticeBoardSelect}
              >
                <option>Author By..</option>
              </select> */}
            </div>
            <div className={styles.noticeBtn}>
              <button type="submit" className={styles.stBtn}>
                Post Notice
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default NoticeBoard;
