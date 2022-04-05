import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import BioData from "../BioData";
import AcademicHistory from "../AcademicHistory";
import HealthData from "../HealthData";
import FamilyData from "../FamilyData";

function UserDataForm() {
  const [page, setPage] = useState(0);
  const [allUserData, setAllUserData] = useState({
    user: "",
    gender: "",
    maritalStatus: "",
    religion: "",
    birthday: "",
    stateOfOrigin: "",
    localGovenrment: "",
    address: "",
    phoneNo1: "",
    phoneNo2: "",
    institution: "",
    startDate: "",
    bioData: "",
    endDate: "",
    qualificationEarned: "",
    isBioData: "",
    bloodGroup: "",
    genotype: "",
    allergies: "",
    diabetes: "",
    STIs: "",
    heartDisease: "",
    disabilities: "",
    respiratoryProblems: "",
    userBioData: "",
    nkoFullName: "",
    nkoPhoneNo1: "",
    nkoPhoneNo2: "",
    nkoAddress: "",
    guardianFullName: "",
    guardianPhoneNo1: "",
    guardianPhoneNo2: "",
    guardianAddress: "",
  });

  const formTitles = [
    "BioData",
    "Academic History",
    "Health Data",
    "Family Data",
  ];

  const displayPages = () => {
    if (page === 0) {
      return (
        <BioData allUserData={allUserData} setAllUserData={setAllUserData} />
      );
    } else if (page === 1) {
      return (
        <AcademicHistory
          allUserData={allUserData}
          setAllUserData={setAllUserData}
        />
      );
    } else if (page === 2) {
      return (
        <HealthData allUserData={allUserData} setAllUserData={setAllUserData} />
      );
    } else {
      return (
        <FamilyData allUserData={allUserData} setAllUserData={setAllUserData} />
      );
    }
  };

  return (
    <div className={styles.userDataFormContainer}>
      <Sidebar />
      <Header />
      <div className={styles.userDataForm}>
        <div className={styles.userDataFormTitle}>
          <span>{formTitles[page]}</span>
        </div>
        <div className={styles.formBody}>{displayPages()}</div>
        <div className={styles.Btn}>
          <button
            className={styles.stBtn}
            disable={page === 0}
            onClick={() => {
              setPage((currentPage) => currentPage - 1);
            }}
          >
            Prev
          </button>
          <button
            className={styles.stBtn}
            disable={page === formTitles.length - 1}
            onClick={() => {
              setPage((currentPage) => currentPage + 1);
            }}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDataForm;
