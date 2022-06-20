import React, { useEffect } from "react";
import HeaderNav from "../../components/HeaderNav";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FaPlay } from "react-icons/fa";
import { BsPersonCheckFill, BsPersonFill } from "react-icons/bs";
import { getCourse } from "../../redux/action/courseAction";
import { ImBook } from "react-icons/im";

function CourseHomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCourse());
  }, [dispatch]);

  const courseGet = useSelector((state) => state.courseGet);
  const { getCourseId } = courseGet;

  const postNewCourse = useSelector((state) => state.postNewCourse);
  const { loading } = postNewCourse;

  const nextHandler = () => {
    navigate("/admin/course");
  };
  const manageHandler = () => {
    navigate("/admin/managecourse");
  };

  const percentage = 2;
  const percentage2 = 19;
  const percentage3 = 39;
  const percentage4 = 0;

  // window.scroll({
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // });

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <div className={styles.profile}>
        <HeaderNav title="Course" />
        <div className={styles.profileHeader}>
          <div className={styles.staffCount}>
            <div className={styles.staffDetails}>
              <div className={styles.staffIcon}>
                <ImBook />
                <h2>Course</h2>
              </div>
              <h1>|</h1>
              <h4>{getCourseId && getCourseId.count}</h4>
            </div>
          </div>
          <div className={styles.profileContent}>
            <div className={styles.submitButton}>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Loading..."
                  colorScheme="green"
                  variant="outline"
                  style={{ height: "2rem" }}
                />
              ) : (
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={nextHandler}
                >
                  Create Course
                </button>
              )}

              {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isfullWidth
                  style={{ height: "5rem" }}
                />
              ) : (
                <button
                  type="submit"
                  className={styles.subButton}
                  onClick={manageHandler}
                >
                  Manage Course
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.profileBox}>
            <div className={styles.pageTitle}>
              <span>Analytics</span>
            </div>
            <div className={styles.profileGridBox}>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Art</h6>
                  <h5>2</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Economics</h6>
                  <h5>12</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage2}
                    text={`${percentage2}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Bio Chemistry</h6>
                  <h5>3</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage3}
                    text={`${percentage3}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Human Hospitality</h6>
                  <h5>7</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage4}
                    text={`${percentage4}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Agriculture</h6>
                  <h5>10</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachBox}>
                <div className={styles.statsBox}>
                  <h6>Science</h6>
                  <h5>4</h5>
                </div>
                <h1>|</h1>
                <div className={styles.statsRating}>
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                  />
                </div>
                <div className={styles.statsIcon}>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.profileBox2}>
            <div className={styles.pageTitle2}>
              <span>Statistics</span>
            </div>
            <div className={styles.profileGridCard}>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon1}>
                  <BsPersonFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>Newly Created Course</h2>
                  <h3>7</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon1}>
                  <BsPersonCheckFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>All Created Course</h2>
                  <h3>50</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseHomePage;
