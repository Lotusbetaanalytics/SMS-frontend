import React, { useState } from "react";
// import Sidebar from "../../../components/Sidebar";
// import Header from "../../../components/Header";
import styles from "./styles.module.css";
// import { useNavigate } from "react-router";

function AcademicHistory({ allUserData, setAllUserData }) {
  const [type, setType] = useState("text");

  const submitHandler = () => {};

  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/user/healthdata");
  // }

  return (
    <div className={styles.academicHistoryContainer}>
      {/* <Sidebar />
      <Header /> */}

      <div className={styles.academicHistory}>
        {/* <div className={styles.academicHistoryTitle}>
          <span>Create Academic History</span>
        </div> */}

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

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    institution: e.target.value,
                  })
                }
                value={allUserData.institution}
                placeholder="Institution"
                required={true}
              />

              <input
                type={type}
                onChange={(e) =>
                  setAllUserData({ ...allUserData, start_date: e.target.value })
                }
                value={allUserData.start_date}
                placeholder="Start Date"
                required={true}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
              />

              <input
                type={type}
                onChange={(e) =>
                  setAllUserData({ ...allUserData, end_date: e.target.value })
                }
                value={allUserData.end_date}
                placeholder="End Date"
                required={true}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
              />

              <select
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    qualification_earned: e.target.value,
                  })
                }
                value={allUserData.qualification_earned}
                required={true}
                className={styles.academicHistorySelect}
              >
                <option>Qualification Earned..</option>
                <option>JSSCE</option>
                <option>SSCE</option>
                <option>Bachelors</option>
                <option>Others</option>
              </select>
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
