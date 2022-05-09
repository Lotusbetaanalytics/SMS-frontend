import { Alert, Button, ButtonGroup, useToast } from "@chakra-ui/react";
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

const BioDataEdit = () => {
  const [marital_status, setMarital_status] = useState("");
  const [gender, setGender] = useState("");
  const [religion, setReligion] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [state_of_origin, setState_of_origin] = useState("");
  const [local_govt, setLocal_govt] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no_1, setPhone_no_1] = useState("");
  const [phone_no_2, setPhone_no_2] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(studentDetails());
    console.log("this")
  }, [dispatch]);

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

 useEffect(() => {
  if (!studentLogin) {
    navigate("/student/login")
  }
}, [studentLogin,navigate,dispatch]);

  const {loading:isLoading, success:isSuccess, studentDetail} = useSelector((state) => state.details);
  // const {biodata } = studentDetail;
  
  const editProfile_ = useSelector((state) => state.editProfile_);
  const { loading, success, error } = editProfile_;

  React.useEffect(() => {
    // console.log(studentDetail.biodata)
    if (isSuccess && studentDetail.biodata) {
      setMarital_status(studentDetail.biodata.marital_status);
      setGender(studentDetail.biodata.gender);
      setReligion(studentDetail.biodata.religion);
      setBirthday(studentDetail.biodata.birthday);
      setNationality(studentDetail.biodata.nationality);
      setState_of_origin(studentDetail.biodata.state_of_origin);
      setLocal_govt(studentDetail.biodata.local_govt);
      setAddress(studentDetail.biodata.address);
      setPhone_no_1(studentDetail.biodata.phone_no_1);
      setPhone_no_2(studentDetail.biodata.phone_no_2);
    } 
    },[isSuccess]);


  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let birtDate = new Date(birthday)
    birtDate = birtDate.setDate()
    const userdata = {
      biodata: {
        marital_status: marital_status,
        gender: gender,
        religion: religion,
        birthday: birthday,
        nationality: nationality,
        state_of_origin: state_of_origin,
        local_govt: local_govt,
        address: address,
        phone_no_1: phone_no_1,
        phone_no_2: phone_no_2,
      },
    };
    dispatch(editProfile(userdata));
  };
  if (success) {
    dispatch(studentDetails());
    setMsg(true);
    dispatch({ type: EDITPROFILE_RESET });
  }
  if (error) {
    toast ({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    })
    dispatch({type:EDITPROFILE_RESET});
  }

  return (
    <div>
      <div>
        <div className={styles.layout}>
          <div className={styles.Sidebar}>
            <StudentSidebar profile={styles.remote} />
          </div>
          <div className={styles.editContainer}>
            <EditNavbar emergency={styles.remote} />
            
            <div className={styles.formContainer}>
              {msg && (
                <Alert status="success">Profile Updated Successfully</Alert>
              )}
              <form onSubmit={submitHandler}>
                <div className={styles.inputContainer_}>
                  <label>Marital Status</label>
                  <input
                    type="text"
                    value={marital_status}
                    onChange={(e) => setMarital_status(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Gender</label>

                  <select
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className={styles.inputContainer_}>
                  <label>Religion</label>
                  <input
                    type="text"
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Birthday</label>
                  <input
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>State_of origin</label>
                  <input
                    type="text"
                    value={state_of_origin}
                    onChange={(e) => setState_of_origin(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Nationality</label>
                  <textarea
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Local Government</label>
                  <textarea
                    type="text"
                    value={local_govt}
                    onChange={(e) => setLocal_govt(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Address</label>
                  <input
                    type="textarea"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Phone Number</label>
                  <input
                    type="textarea"
                    value={phone_no_1}
                    onChange={(e) => setPhone_no_1(e.target.value)}
                  />
                </div>
                <div className={styles.inputContainer_}>
                  <label>Phone Number 2</label>
                  <input
                    type="textarea"
                    value={phone_no_2}
                    onChange={(e) => setPhone_no_2(e.target.value)}
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
              <Link to="/student/profile/biodataEdit">
                {" "}
                <div className={`${styles.btn} ${styles.purple}`}>
                  Academic History
                </div>
              </Link>
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

export default BioDataEdit;
