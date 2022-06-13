import { Alert, Button, useToast } from "@chakra-ui/react";
import styles from "../styles.module.css"
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SearchWidget from "../../../../components/Input/Search";
import StudentSidebar from "../../../../components/Sidebar";
import { editProfile } from "../../../../redux/Actions/ProfileActions/profile";
import { studentDetails } from "../../../../redux/Actions/studentActions/studentAction";
import { EDITPROFILE_RESET } from "../../../../redux/Constants/ProfileConstants/profileConstants";
import Input from "../../../../components/Input";
import NaijaStates from 'naija-state-local-government';

const Editbiodata = () => {
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
  const toast = useToast;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/");
    }
  }, [studentLogin, navigate, dispatch]);

  const { success: isSuccess, studentDetail } = useSelector(
    (state) => state.details
  );

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
  }, [isSuccess]);

  const [msg, setMsg] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
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
    toast({
      title: "Error",
      description: error,
      status: "error",
      duration: 9000,
      isClosable: true,
    });
    dispatch({ type: EDITPROFILE_RESET });
  }
  const nextHandler = () => {
    navigate("/student/profile/academy")
}
const backHandler = () => {
  navigate("/student/profile/basic")
}

 

console.log(NaijaStates.all());
const statesSelect =  NaijaStates.states()
console.log(state_of_origin)
// const selectLGA = NaijaStates.lgas(state_of_origin)
// console.log(NaijaStates.states());
// console.log(NaijaStates.lgas())

  return (
    <div className="page_container">
      <StudentSidebar profile={"active"}/>
      <div className="right_container">
        <SearchWidget />
        <div className="message_container">
          {msg && <Alert status="success">Profile Updated Successfully</Alert>}
        </div>
        <div className="right_content_container">
          <div className={styles.profile_bg}>
            <div >
              <div className={styles.header}>
                <div className={styles.header_title}>Biodata Information</div>
              </div>
              <div className={styles.editContainer2}>
                <div className={styles.editinfo}>
                  <label>Marital Status</label>
                  <select onChange={(e) => setMarital_status(e.target.value)}
                    value={marital_status}>
                    <option>Select</option>
                    <option value="Single">Single</option>
                    <option value="Married">Married</option>
                    <option value="Divorced">Divorced</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.editinfo}>
                  <label>Gender</label>

                  <select onChange={(e) => setGender(e.target.value)}
                  value={gender}>
                    <option>Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
                <div className={styles.editinfo}>
                <label>Religion</label>
                  <select
                    onChange={(e) => setReligion(e.target.value)}
                  >
                    <option>Select</option>
                    <option value="Christianity">Christianity</option>
                    <option value="Islam">Islam</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Birthday"}
                    type="date"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Nationality"}
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                    disabled
                  />
                </div>
                <div className={styles.editinfo}>
                  <label>State of Origin</label>

                  <select onChange={(e) => setState_of_origin(e.target.value)}
                  value={state_of_origin}>
                     {statesSelect && statesSelect.map((item,i) =>(
                        <option key={i} value={item}>{item}
                            
                        </option>
                    ))}
                   
                  </select>
                </div>
                {/* <div className={styles.editinfo}>
                  <label>Local Government</label>

                  <select onChange={(e) => setState_of_origin(e.target.value)}
                  value={state_of_origin}>
                     {selectLGA && selectLGA.map((item,i) =>(
                        <option key={i} value={item}>{item}
                            
                        </option>
                    ))}
                   
                  </select>
                </div> */}
                <div className={styles.editinfo}>
                  <Input
                    label={"Local Government"}
                    type="text"
                    value={local_govt}
                    onChange={(e) => setLocal_govt(e.target.value)}
                  />
                  </div>
                  <div className={styles.editinfo}>
                  <Input
                    label={"Address"}
                    type="textarea"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                  </div>
                  <div className={styles.editinfo}>
                  <Input
                    label={"Phone Number 1"}
                    type="number"
                    value={phone_no_1}
                    onChange={(e) => setPhone_no_1(e.target.value)}
                    readOnly
                  />
                  </div>
                  <div className={styles.editinfo}>
                  <Input
                    label={"Phone Number 2"}
                    type="number"
                    value={phone_no_2}
                    onChange={(e) => setPhone_no_2(e.target.value)}
                    readOnly
                  />
                  </div>
              </div>
            </div>

            <div className={styles.btnContainer}>
            <div>
                    <button className={styles.linear} onClick={backHandler}>Basic Information</button>
                    </div>
                    <div>
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
                Academic data
              </button>
                    </div>
             
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editbiodata;
