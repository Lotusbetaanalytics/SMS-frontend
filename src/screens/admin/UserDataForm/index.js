import React, { useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import BioData from "../BioData";
import AcademicHistory from "../AcademicHistory";
import HealthData from "../HealthData";
import FamilyData from "../FamilyData";
import { useDispatch } from "react-redux";
import { postUsersData } from "../../../redux/action/usersDataAction";
import { useToast } from "@chakra-ui/react";

function UserDataForm() {
  const dispatch = useDispatch();
  const toast = useToast();

  const [page, setPage] = useState(0);
  const [allUserData, setAllUserData] = useState({
    user: "",
    gender: "",
    marital_status: "",
    religion: "",
    birthday: "",
    state_of_origin: "",
    local_govt: "",
    address: "",
    phone_no_1: "",
    phone_no_2: "",
    academic_history: {
      institution: "",
      start_date: "",
      bioData: "",
      end_date: "",
      qualification_earned: "",
    },
    health_data: {
      isBioData: "",
      blood_group: "",
      genotype: "",
      allergies: "",
      diabetes: "",
      STIs: "",
      heart_disease: "",
      disabilities: "",
      respiratory_problems: "",
    },
    family_data: {
      userBioData: "",
      next_of_kin_full_name: "",
      next_of_kin_phone_no_1: "",
      next_of_kin_phone_no_2: "",
      next_of_kin_address: "",
      guardian_full_name: "",
      guardian_phone_no_1: "",
      guardian_phone_no_2: "",
      guardian_address: "",
    },
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
              if (page === formTitles.length - 1) {
                alert("Are you sure you want to Submit");
                dispatch(postUsersData(allUserData, toast));
                console.log(allUserData);
              } else {
                setPage((currentPage) => currentPage + 1);
              }
            }}
          >
            {page === formTitles.length - 1 ? "Submit" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserDataForm;
