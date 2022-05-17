import { Alert,Button, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EditNavbar from "../../../components/navigation_";
import StudentSidebar from "../../../components/StudentSidebar";

import { editProfile, studentDetails } from "../../../redux/studentActions/studentAction";
import { EDITPROFILE_RESET } from "../../../redux/studentConstants/studentConstants";
import styles from "./styles.module.css";

const FamilyDataEdit = () => {
  const [next_of_kin_full_name, setNext_of_kin_full_name] = useState("");
  const [next_of_kin_phone_no_1, setNext_of_kin_phone_no_1] = useState("");
  const [next_of_kin_phone_no_2, setNext_of_kin_phone_no_2] = useState("");
  const [next_of_kin_address, setNext_of_kin_address] = useState("");
  const [guardian_full_name, setGuardian_full_name] = useState("");
  const [guardian_phone_no_1, setGuardian_phone_no_1] = useState("");
  const [guardian_phone_no_2, setGuardian_phone_no_2] = useState("");
  const [guardian_address, setGuardian_address] = useState("");

  const dispatch = useDispatch();
    const toast = useToast();
    const navigate = useNavigate();
  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

  const details = useSelector((state) => state.details);
  const { studentDetail } = details;

  const editProfile_ = useSelector((state) => state.editProfile_);
  const { loading,success, error } = editProfile_;

  const [msg, setMsg] = useState("");

  React.useEffect(() => {
    if (studentDetail) {
      setNext_of_kin_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.next_of_kin_full_name);
      setNext_of_kin_phone_no_1(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.next_of_kin_phone_no_1);
      setNext_of_kin_phone_no_2(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.next_of_kin_phone_no_2);
      setNext_of_kin_address(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.next_of_kin_address);
      setGuardian_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.guardian_full_name);
      setGuardian_phone_no_1(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.guardian_phone_no_1);
      setGuardian_phone_no_2(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data && studentDetail.biodata.family_data.guardian_phone_no_2);
      setGuardian_address(studentDetail && studentDetail.biodata && studentDetail.biodata.family_data &&studentDetail.biodata.family_data.guardian_address);
    }
  }, [studentDetail, dispatch]);

  

  const submitHandler = (e) => {
    e.preventDefault();
    const userdata = {
      biodata: {
        family_data : {
          next_of_kin_full_name:next_of_kin_full_name,
          next_of_kin_phone_no_1:next_of_kin_phone_no_1,
          next_of_kin_phone_no_2:next_of_kin_phone_no_2,
          next_of_kin_address:next_of_kin_address,
          guardian_full_name:guardian_full_name,
          guardian_phone_no_1:guardian_phone_no_1,
          guardian_phone_no_2:guardian_phone_no_2,
          guardian_address:guardian_address
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
            <EditNavbar photo={styles.remote} />
            <div className={styles.formContainer}>
            {msg && (
                <Alert status="success">Profile Updated Successfully</Alert>
              )}
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>Next of kin fullname</label>
                  <input
                    type="text"
                    value={next_of_kin_full_name}
                    onChange={(e) => setNext_of_kin_full_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin phone number_1</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_1}
                    onChange={(e) => setNext_of_kin_phone_no_1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin phone number_2</label>
                  <input
                    type="text"
                    value={next_of_kin_phone_no_2}
                    onChange={(e) => setNext_of_kin_phone_no_2(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Next of kin address</label>
                  <input
                    type="text"
                    value={next_of_kin_address}
                    onChange={(e) => setNext_of_kin_address(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian fullname</label>
                  <input
                    type="text"
                    value={guardian_full_name}
                    onChange={(e) => setGuardian_full_name(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian phone number_1</label>
                  <input
                    type="text"
                    value={guardian_phone_no_1}
                    onChange={(e) => setGuardian_phone_no_1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian phone number_2</label>
                  <input
                    type="text"
                    value={guardian_phone_no_2}
                    onChange={(e) => setGuardian_phone_no_2(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Guardian address</label>
                  <input
                    type="text"
                    value={guardian_address}
                    onChange={(e) => setGuardian_address(e.target.value)}
                  />
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
            </div>
          </div>
          {/* <div className={styles.leftBar}>
            <SidebarTwo />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default FamilyDataEdit;
