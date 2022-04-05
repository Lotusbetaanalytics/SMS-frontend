import React, { useState } from "react";
// import { useNavigate } from "react-router";
// import Haeder from "../../../components/Header";
// import Sidebar from "../../../components/Sidebar";
import styles from "./styles.module.css";

function HealthData({ allUserData, setAllUserData }) {
  const submitHandler = () => {};

  // let navigate = useNavigate();
  // function handleClick() {
  //   navigate("/user/familydata");
  // }

  return (
    <div className={styles.healthDataContainer}>
      {/* <Sidebar />
      <Haeder /> */}
      <div className={styles.healthData}>
        {/* <div className={styles.healthDataTitle}>
          <span>Create Health Data</span>
        </div> */}
        <div className={styles.healthDataContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.healthDataForm}>
              {/* <select
                onChange={(e) => setIsBioData(e.target.value)}
                value={isBioData}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Bio Data..</option>
                <option>1</option>
              </select> */}

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, bloodGroup: e.target.value })
                }
                value={allUserData.bloodGroup}
                placeholder="Blood Group"
                required={true}
              />

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, genotype: e.target.value })
                }
                value={allUserData.genotype}
                placeholder="Genotype"
                required={true}
              />

              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, allergies: e.target.value })
                }
                value={allUserData.allergies}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Allergies..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, diabetes: e.target.value })
                }
                value={allUserData.diabetes}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Diabetes..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, STIs: e.target.value })
                }
                value={allUserData.STIs}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>STIs..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    heartDisease: e.target.value,
                  })
                }
                value={allUserData.heartDisease}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Heart Disease..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    disabilities: e.target.value,
                  })
                }
                value={allUserData.disabilities}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Disabilities..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    respiratoryProblems: e.target.value,
                  })
                }
                value={allUserData.respiratoryProblems}
                required={true}
                className={styles.healthDataSelect}
              >
                <option>Respiratory Problems..</option>
                <option>Yes</option>
                <option>No</option>
              </select>

              {/* <button
                type="button"
                className={styles.stBtn}
                onClick={handleClick}
              >
                Next
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HealthData;
