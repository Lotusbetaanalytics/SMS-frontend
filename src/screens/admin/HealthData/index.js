import React, { useState } from "react";
import SidebarNav from "../../../components/SidebarNav";
// import { useNavigate } from "react-router";
import Haeder from "../../../components/Header";
import styles from "./styles.module.css";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postHealthData } from "../../../redux/action/usersDataAction";

function HealthData() {
  const [blood_group, setBlood_group] = useState("");
  const [genotype, setGenotype] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [STIs, setSTIs] = useState("");
  const [heart_disease, setHeart_disease] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [respiratory_problems, setRespiratory_problems] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const healthdata = {
      blood_group: blood_group,
      genotype: genotype,
      allergies: allergies,
      diabetes: diabetes,
      STIs: STIs,
      heart_disease: heart_disease,
      disabilities: disabilities,
      respiratory_problems: respiratory_problems,
    };
    dispatch(postHealthData(healthdata, toast));
    console.log(healthdata);
  };

  const postHealth = useSelector((state) => state.postHealth);
  const { loading } = postHealth;

  return (
    <div className={styles.healthDataContainer}>
      <SidebarNav />
      <Haeder />
      <div className={styles.healthData}>
        <div className={styles.healthDataTitle}>
          <span>Create Health Data</span>
        </div>
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

              <div className={styles.newForm}>
                <label>Blood Group</label>
                <input
                  type="text"
                  onChange={(e) => setBlood_group(e.target.value)}
                  value={blood_group}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Genotype</label>
                <input
                  type="text"
                  onChange={(e) => setGenotype(e.target.value)}
                  value={genotype}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Allergies</label>
                <select
                  onChange={(e) => setAllergies(e.target.value)}
                  value={allergies}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Diabetes</label>
                <select
                  onChange={(e) => setDiabetes(e.target.value)}
                  value={diabetes}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>STIs</label>
                <select
                  onChange={(e) => setSTIs(e.target.value)}
                  value={STIs}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Heart Disease</label>
                <select
                  onChange={(e) => setHeart_disease(e.target.value)}
                  value={heart_disease}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Disabilities</label>
                <select
                  onChange={(e) => setDisabilities(e.target.value)}
                  value={disabilities}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Respiratory Problems</label>
                <select
                  onChange={(e) => setRespiratory_problems(e.target.value)}
                  value={respiratory_problems}
                  // required={true}
                  className={styles.healthDataSelect}
                >
                  <option></option>
                  <option>Yes</option>
                  <option>No</option>
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
                  Create Health Data
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HealthData;
