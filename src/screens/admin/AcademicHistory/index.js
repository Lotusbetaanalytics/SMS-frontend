import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { postUsersData } from "../../../redux/action/usersDataAction";
import SidebarNav from "../../../components/SidebarNav";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postAcademicData } from "../../../redux/action/usersDataAction";
// import { useNavigate } from "react-router";

function AcademicHistory() {
  const [institution, setInstitution] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [qualification_earned, setQualification_earned] = useState("");
  const [type, setType] = useState("text");

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const academicdata = {
      institution: institution,
      start_date: start_date,
      end_date: end_date,
      qualification_earned: qualification_earned,
    };
    dispatch(postAcademicData(academicdata, toast));
    console.log(academicdata);
  };

  const postAcademic = useSelector((state) => state.postAcademic);
  const { loading } = postAcademic;

  return (
    <div className={styles.academicHistoryContainer}>
      <SidebarNav />
      <Header />

      <div className={styles.academicHistory}>
        <div className={styles.academicHistoryTitle}>
          <span>Create Academic History</span>
        </div>

        <div className={styles.academicHistoryContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.academicHistoryForm}>
              {/* <select
                onChange={(e) => setBioData(e.target.value)}
                value={bioData}
                required={true}
                className={styles.academicHistorySelect}
              >
                <option>Bio Data..</option>
                <option>1</option>
              </select> */}

              <div className={styles.newForm}>
                <label>Institution</label>
                <input
                  type="text"
                  onChange={(e) => setInstitution(e.target.value)}
                  value={institution}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Start Date</label>
                <input
                  type={type}
                  onChange={(e) => setStart_date(e.target.value)}
                  value={start_date}
                  // required={true}
                  onFocus={() => setType("date")}
                  onBlur={() => setType("text")}
                />
              </div>

              <div className={styles.newForm}>
                <label>End Data</label>
                <input
                  type={type}
                  onChange={(e) => setEnd_date(e.target.value)}
                  value={end_date}
                  required={true}
                  onFocus={() => setType("date")}
                  onBlur={() => setType("text")}
                />
              </div>

              <div className={styles.newForm}>
                <label>Qualification Earned</label>
                <select
                  onChange={(e) => setQualification_earned(e.target.value)}
                  value={qualification_earned}
                  required={true}
                  className={styles.academicHistorySelect}
                >
                  <option></option>
                  <option>JSSCE</option>
                  <option>SSCE</option>
                  <option>Bachelors</option>
                  <option>Others</option>
                </select>
              </div>
            </div>
            <div className={styles.staffBtn}>
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
                <button type="submit" className={styles.stBtn}>
                  Create Academic History
                </button>
              )}
            </div>

            {/* <button
              type="button"
              className={styles.stBtn}
              onClick={handleClick}
            >
              Next
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default AcademicHistory;
