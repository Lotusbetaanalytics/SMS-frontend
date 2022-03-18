import { Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";
import {
  editProfile,
  studentDetails,
} from "../../../redux/studentActions/studentAction";
import styles from "./styles.module.css";

const AcademicHistoryEdit = () => {
  const [institution, setInstitution] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [qualification_earned, setQualification_earned] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  const details = useSelector((state) => state.details);
  const { success, studentDetail } = details;
  console.log(studentDetail)

  React.useEffect(() => {
    if (success) {
      console.log("my student", studentDetail);
      setInstitution(studentDetail.biodata.academic_history[0].institution);
      setStart_date(studentDetail.biodata.academic_history[0].start_date);
      setEnd_date(studentDetail.biodata.academic_history[0].end_date);
      setQualification_earned(studentDetail.biodata.academic_history[0].qualification_earned);
    }
  }, [success]);

  const editProfile_ = useSelector((state) => state.editProfile_);
  const { loading, error } = editProfile_;

  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    const userdata = {
      biodata: {
        academic_history: [
          {
            institution:institution,
            start_date:start_date,
            end_date:end_date,
            qualification_earned:qualification_earned
          }
        ]
    }
  }
    dispatch(editProfile(userdata));
  };
  if (error) {
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  }

  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar official={styles.remote} />
            <div className={styles.formContainer}>
              <form>
                <div className={styles.inputContainer_}>
                  <label>Institution</label>
                  <input
                    type="text"
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Start date</label>
                  <input
                    type="text"
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>End date</label>
                  <input
                    type="date"
                    value={end_date}
                    onChange={(e) => setEnd_date(e.target.value)}
                    disabled
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Qualification Earn</label>
                  <input
                    type="text"
                    value={qualification_earned}
                    onChange={(e) => setQualification_earned(e.target.value)}
                  />
                </div>
              </form>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isFullWidth
                  style={{ height: "5rem" }}
                />
              ) : (
                <button
                  onClick={submitHandler}
                  className={`${styles.btn} ${styles.lilac}`}
                >
                  Save information
                </button>
              )}
              <Link to="/student/profile/healthdata">
                {" "}
                <div className={`${styles.btn} ${styles.purple}`}>
                  Health Data
                </div>
              </Link>
            </div>
          </div>
          <div className={styles.leftBar}>
            <SidebarTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicHistoryEdit;
