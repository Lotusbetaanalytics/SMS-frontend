import { Alert, Button, useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from '../../../../components/Input';
import SearchWidget from '../../../../components/Input/Search';
import StudentSidebar from '../../../../components/Sidebar';
import { editProfile } from '../../../../redux/Actions/ProfileActions/profile';
import { studentDetails } from '../../../../redux/Actions/studentActions/studentAction';
import { EDITPROFILE_RESET } from '../../../../redux/Constants/ProfileConstants/profileConstants';
import styles from "../styles.module.css";
const Editfamilydata = () => {

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

  const nextHandler = () => {
    navigate("/student/profile/basic")
}

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
    <div className="page_container">
    <StudentSidebar profile={"active"} />
    <div className="right_container">
      <SearchWidget />
      <div className="message_container">
        {msg && <Alert status="success">Profile Updated Successfully</Alert>}
      </div>
      <div className="right_content_container">
        <div className={styles.profile_bg}>
          <div>
            <div className={styles.header}>
              <div className={styles.header_title}>Family Information</div>
            </div>
            <div className={styles.editContainer2}>
              <div className={styles.editinfo}>
              <Input
                  label={"Next of kin full name"}
                  type="text"
                  value={next_of_kin_full_name}
                  onChange={(e) => setNext_of_kin_full_name(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
              <Input
                  label={"Next of Kin Phone Number "}
                  type="text"
                  value={next_of_kin_phone_no_1}
                  onChange={(e) => setNext_of_kin_phone_no_1(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
              <Input
                  label={"Next of Kin Phone Number 2"}
                  type="text"
                  value={next_of_kin_phone_no_2}
                  onChange={(e) => setNext_of_kin_phone_no_2(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Next of Kin Address"}
                  type="textarea"
                  value={next_of_kin_address}
                  onChange={(e) => setNext_of_kin_address(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian Full Name"}
                  type="text"
                  value={guardian_full_name}
                  onChange={(e) => setGuardian_full_name(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian Phone Number"}
                  type="text"
                  value={guardian_phone_no_1}
                  onChange={(e) => setGuardian_phone_no_1(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian Phone Number 2"}
                  type="text"
                  value={setGuardian_phone_no_2}
                  onChange={(e) => setGuardian_phone_no_2(e.target.value)}
                />
                </div>
                <div className={styles.editinfo}>
                <Input
                  label={"Guardian Address"}
                  type="textarea"
                  value={guardian_address}
                  onChange={(e) => setGuardian_address(e.target.value)}
                />
                </div>
                
            </div>
          </div>

          <div className={styles.btnContainer}>
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
              <button className={styles.brown} onClick={submitHandler}>
                Update
              </button>
            )}
            <button className={styles.linear} onClick={nextHandler}>
              Basic data
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Editfamilydata