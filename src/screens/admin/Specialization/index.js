import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import {
  getDepartment,
  postSpecialization,
} from "../../../redux/action/departmentAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { getLevelAction } from "../../../redux/action/levelAction";
import { CREATE_SPECIALIZATION_RESET } from "../../../redux/constants/departmentConstants";
import SidebarNav from "../../../components/SidebarNav";

function Specialization() {
  const [departmentName, setDepartmentName] = useState("");
  const [maxLevel, setMaxLevel] = useState("");
  const [specializationName, setSpecializationName] = useState("");
  const [codeName, setCodeName] = useState("");
  const [descName, setDescName] = useState("");
  const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const specializeData = {
      department: departmentName,
      name: specializationName,
      code: codeName,
      max_level: maxLevel,
      description: descName,
      is_active: isActive,
    };
    dispatch(postSpecialization(specializeData, toast));
    dispatch({ type: CREATE_SPECIALIZATION_RESET });
    console.log(specializeData);
  };

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);

  const departmentGet = useSelector((state) => state.departmentGet);
  const { departmentid } = departmentGet;

  const postSpecializations = useSelector((state) => state.postSpecializations);
  const { loading, success } = postSpecializations;

  if (success) {
    window.location.reload();
  }

  useEffect(() => {
    dispatch(getLevelAction());
  }, [dispatch]);

  const levelGet = useSelector((state) => state.levelGet);
  const { getLevelId } = levelGet;
  console.log(getLevelId);

  return (
    <div className={styles.specializationContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.specialization}>
        <div className={styles.specializationTitle}>
          <span>Create Specialization</span>
        </div>
        <div className={styles.specializationContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.specializationForm}>
              <div className={styles.newForm}>
                <label>Deparment Name</label>
                <select
                  onChange={(e) => setDepartmentName(e.target.value)}
                  value={departmentName}
                  required={true}
                  className={styles.specializationSelect}
                >
                  <option></option>
                  {departmentid &&
                    departmentid.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Specialization Name</label>
                <input
                  type="text"
                  onChange={(e) => setSpecializationName(e.target.value)}
                  value={specializationName}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Max Level</label>
                <select
                  onChange={(e) => setMaxLevel(e.target.value)}
                  value={maxLevel}
                  required={true}
                  className={styles.specializationSelect}
                >
                  <option></option>
                  {getLevelId &&
                    getLevelId.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.code}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Specialization Code</label>
                <input
                  type="number"
                  onChange={(e) => setCodeName(e.target.value)}
                  value={codeName}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Description (optional)</label>
                <input
                  type="text"
                  onChange={(e) => setDescName(e.target.value)}
                  value={descName}
                  required={true}
                />
              </div>
            </div>
            <div className={styles.btnSpec}>
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
                  Submit
                </button>
              )}

              <div className={styles.toggleBtnContainer}>
                <div className={styles.toggleBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span className={styles.toggleRound}>
                    Publish Specialization
                  </span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
