import React, { useState } from "react";
import HeaderNav from "../../components/HeaderNav";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";
import { RiHealthBookFill } from "react-icons/ri";
import { BiArrowBack } from "react-icons/bi";
import { Button, Center, CircularProgress, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postHealthData } from "../../redux/action/userProfileDataAction";
import { HEALTH_DATA_RESET } from "../../redux/constants/userProfileDataConstant";
import { Link } from "react-router-dom";

function HealthData() {
  const dispatch = useDispatch();
  const toast = useToast();

  const [blood_group, setBlood_group] = useState("");
  const [genotype, setGenotype] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [STIs, setSTIs] = useState("");
  const [heart_disease, setHeart_disease] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [respiratory_problems, setRespiratory_problems] = useState("");

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
    dispatch(postHealthData(healthdata));
    console.log(healthdata);
  };

  const postHealth = useSelector((state) => state.postHealth);
  const { loading, success, error } = postHealth;

  if (success) {
    toast({
      title: "Notification",
      description: "Health Credentials Created",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: HEALTH_DATA_RESET });
  }

  if (error) {
    toast({
      title: "Notification",
      description: "Invalid Credentials",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: HEALTH_DATA_RESET });
  }

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <div className={styles.profile}>
        <HeaderNav title="Health Data" />

        <div className={styles.profileBox}>
          <div className={styles.profileHeader}>
            <div className={styles.staffCount}>
              <div className={styles.staffDetails}>
                <div className={styles.staffIcon}>
                  <RiHealthBookFill />
                </div>
                <h1>|</h1>
              </div>
              <div className={styles.titleProfile}>
                <p>Create Health Data</p>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.submitButton}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  // onClick={cancelHandler}
                >
                  <BiArrowBack />
                  Cancel
                </button>

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
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            {loading ? (
              <Center>
                <CircularProgress isIndeterminate color="red.500" />
              </Center>
            ) : (
              <div className={styles.inputField}>
                <div className={styles.inputBox}>
                  <label>Blood Group</label>
                  <input
                    type="text"
                    onChange={(e) => setBlood_group(e.target.value)}
                    value={blood_group}
                    // required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Genotype</label>
                  <input
                    type="text"
                    onChange={(e) => setGenotype(e.target.value)}
                    value={genotype}
                    // required={true}
                  />
                </div>
                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
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

                <div className={styles.inputBox}>
                  <button>
                    <Link to="/admin/academicdata">
                      <p>Next</p>
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HealthData;
