import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import {
  getDepartment,
  postSpecialization,
} from "../../../redux/action/departmentAction";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { getLevelAction } from "../../../redux/action/levelAction";
import { CREATE_SPECIALIZATION_RESET } from "../../../redux/constants/departmentConstants";

function Specialization() {
  const [departmentName, setDepartmentName] = useState("");
  const [maxLevel, setMaxLevel] = useState("");
  const [specializationName, setSpecializationName] = useState("");
  const [codeName, setCodeName] = useState("");
  const [descName, setDescName] = useState("");
  const [isActive, setIsActive] = useState("");

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
      isActive: isActive,
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

  useEffect(() => {
    dispatch(getLevelAction());
  }, [dispatch]);

  const levelGet = useSelector((state) => state.levelGet);
  const { getLevelId } = levelGet;
  console.log(getLevelId);

  return (
    <div className={styles.specializationContainer}>
      <Sidebar />
      <Header />
      <div className={styles.specialization}>
        <div className={styles.specializationTitle}>
          <span>Create Specialization</span>
        </div>
        <div className={styles.specializationContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.specializationForm}>
              <select
                onChange={(e) => setDepartmentName(e.target.value)}
                value={departmentName}
                required={true}
                className={styles.specializationSelect}
              >
                <option>Department..</option>
                {departmentid &&
                  departmentid.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.name}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                onChange={(e) => setSpecializationName(e.target.value)}
                value={specializationName}
                placeholder="Name"
                required={true}
              />
              <select
                onChange={(e) => setMaxLevel(e.target.value)}
                value={maxLevel}
                required={true}
                className={styles.specializationSelect}
              >
                <option>Max Level..</option>
                {getLevelId &&
                  getLevelId.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.code}
                    </option>
                  ))}
              </select>
              <input
                type="number"
                onChange={(e) => setCodeName(e.target.value)}
                value={codeName}
                placeholder="Code"
                required={true}
              />
              <input
                type="text"
                onChange={(e) => setDescName(e.target.value)}
                value={descName}
                placeholder="Description (optional)"
                required={true}
              />

              <div className={styles.specializationCheckbox}>
                <div className={styles.checkboxDiv}>
                  <input
                    onChange={handleClick}
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                    className={styles.checkInput}
                  />
                  <label>Publish</label>
                </div>
              </div>
              <div className={styles.btnSpec}>
                <button type="submit" className={styles.stBtn}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Specialization;
