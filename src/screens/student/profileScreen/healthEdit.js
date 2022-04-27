import { Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";
import SidebarTwo from "../../../components/StudentSidebar/sidebar";
import {
  editProfile,
  studentDetails,
} from "../../../redux/studentActions/studentAction";
import { EDITPROFILE_RESET } from "../../../redux/studentConstants/studentConstants";
import styles from "./styles.module.css";

const HealthDataEdit = () => {
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
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  // const details = useSelector((state) => state.details);
  // const { studentDetail } = details;

  

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

const details = useSelector((state) => state.details);
  const { studentDetail } = details;
  console.log(studentDetail)

  useEffect(() => {
    if  (studentDetail) {
      setBlood_group(studentDetail.biodata.health_data.blood_group );
       setGenotype(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.genotype);
       setAllergies(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.allergies);
      setDiabetes(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
      setSTIs(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.STIs);
      setHeart_disease(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.heart_disease);
      setDiabetes(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
      setRespiratory_problems(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.respiratory_problems);
    }
  }, [dispatch]);

  console.log(blood_group)
  

  const editProfile_ = useSelector((state) => state.editProfile_);
  const { loading,success, error } = editProfile_;

  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const userdata = {
      biodata: {
        health_data : {
          blood_group:blood_group,
          genotype:genotype,
          allergies:allergies,
          diabetes:diabetes,
          STIs:STIs,
          heart_disease:heart_disease,
          disabilities:disabilities,
          respiratory_problems:respiratory_problems,
        }
    }
  }
  dispatch(editProfile(userdata));
  };
  if (success) {
    dispatch(studentDetails());
    setMsg(true);
    dispatch({ type: EDITPROFILE_RESET });
  }

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
            <EditNavbar account={styles.remote} />
            <div className={styles.formContainer}>
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>blood Group</label>
                  <input
                    type="text"
                    value={blood_group}
                    onChange={(e) => setBlood_group(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Genotype</label>
                  <input
                    type="text"
                    value={genotype}
                    onChange={(e) => setGenotype(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Allergies</label>
                  <select
                    onChange={(e) => setAllergies(e.target.value)}
                    value={allergies}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className={styles.inputContainer_}>
                  <label>Diabetes</label>
                  <select
                    onChange={(e) => setDiabetes(e.target.value)}
                    value={diabetes}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className={styles.inputContainer_}>
                  <label>STIs</label>
                  <select
                    onChange={(e) => setSTIs(e.target.value)}
                    value={STIs}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className={styles.inputContainer_}>
                  <label>Heart Disease</label>
                  <select
                    onChange={(e) => setHeart_disease(e.target.value)}
                    value={heart_disease}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className={styles.inputContainer_}>
                  <label>Disabilities</label>
                  <select
                    onChange={(e) => setDisabilities(e.target.value)}
                    value={disabilities}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
                </div>
                <div className={styles.inputContainer_}>
                  <label>Respiratory_problems</label>
                  <select
                    onChange={(e) => setRespiratory_problems(e.target.value)}
                    value={respiratory_problems}
                  >
                    <option>Select</option>
                    <option value="Yes">Yes</option>
                    <option value="No">No</option>
                  </select>
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
              <Link to="/student/profile/familydata">
                <div className={`${styles.btn} ${styles.purple}`}>
                  Family Data
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

export default HealthDataEdit;
