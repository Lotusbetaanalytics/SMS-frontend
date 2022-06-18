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
import styles from "../styles.module.css"
const EditHealthdata = () => {
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
      setBlood_group(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.blood_group );
       setGenotype(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.genotype);
       setAllergies(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.allergies);
      setDisabilities(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.disabilities);
      setSTIs(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.STIs);
      setHeart_disease(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.heart_disease);
      setDiabetes(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
      setRespiratory_problems(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.respiratory_problems);
    }
  }, [studentDetail,dispatch]);

  
  

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

  const nextHandler = () => {
    navigate("/student/profile/family")
}
const backHandler = () =>{
  navigate("/student/profile/academy")
}
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
      <SearchWidget/>
      <div className="message_container">
        {msg && <Alert status="success">Profile Updated Successfully</Alert>}
      </div>
      <div className="right_content_container">
        <div className={styles.profile_bg}>
            <div className={styles.header}>
              <div className={styles.header_title}>Health Information</div>
            </div>
            <div className={styles.editContainer2}>
              <div className={styles.editinfo}>
              <label>Blood Group</label>
                <select
                  onChange={(e) => setBlood_group(e.target.value)}
                  value={blood_group}
                >
                  <option>Select</option>
                  <option value="A RhD positive (A+)">A RhD positive (A+)</option>
                  <option value="A RhD negative (A-)">A RhD negative (A-)</option>
                  <option value="B RhD positive (B+)">B RhD positive (B+)</option>
                  <option value="B RhD negative (B-)">B RhD negative (B-)</option>
                  <option value="O RhD positive (O+)">O RhD positive (O+)</option>
                  <option value="O RhD negative (O-)">O RhD negative (O-) (B-)</option>
                  <option value="AB RhD positive (AB+)">AB RhD positive (AB+)</option>
                  <option value="AB RhD negative (AB-)">AB RhD negative (AB-)</option>
                  
                </select>
              </div>
              <div className={styles.editinfo}>
              <label>Genotype</label>
                <select
                  onChange={(e) => setGenotype(e.target.value)}
                  value={genotype}
                >
                  <option>Select</option>
                  <option value="AA">AA</option>
                  <option value="AB">AB</option>
                  <option value="BB">BB</option>
                  <option value="BO">BO</option>
                  <option value="OO">OO</option>
                  <option value="AO">AO</option>
                  
                </select>
                </div>
              <div className={styles.editinfo}>
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
              <div className={styles.editinfo}>
              <label>Diabetes</label>
                <select
                  onChange={(e) => setDiabetes(e.target.value)}
                  value={diabetes}
                >
                  <option>Select</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                  
                </select>
              </div>
              <div className={styles.editinfo}>
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
              <div className={styles.editinfo}>
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
              <div className={styles.editinfo}>
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
                <div className={styles.editinfo}>
                <label>Respiratory Problem</label>
                <select
                  onChange={(e) => setRespiratory_problems(e.target.value)}
                  value={respiratory_problems}
                >
                  <option>Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
                </select>
                </div>
            </div>
          

          <div className={styles.btnContainer}>
            <div>
            <button className={styles.linear} onClick={backHandler}>Academic history</button>
            </div>
            <div>
            {loading ? (
              <Button
              isLoading
              loadingText="Updating..."
              colorScheme="teal"
              variant="outline"
              style={{ height: "3rem" }}
              />
            ) : (
              <button className={styles.brown} onClick={submitHandler}>
                Update
              </button>
            )}
            <button className={styles.linear} onClick={nextHandler}>
              Family data
            </button>
            </div>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditHealthdata