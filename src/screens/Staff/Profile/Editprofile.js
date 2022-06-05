import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LecturerHeader from "../../../components/lecturerHeader";
import LectureSidebar from "../../../components/lecturerSidebar";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import styles from "./styles.module.css";
import adminpic from "../../../assets/profile.jpg";
import Input from "../../../components/Input";
import { EDITPROFILE_RESET } from "../../../redux/Constants/ProfileConstants/profileConstants";
import { Button, toast } from "@chakra-ui/react";
import { editProfile } from "../../../redux/Actions/ProfileActions/profile";
const EditLecturerProfile = () => {
  const navigate = useNavigate();
  const dispatch = useNavigate();

  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));
  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);
  

  const details = useSelector((state) => state.details);
  const { studentDetail, success } = details;

  const [first_name, setFirst_name] = useState("");
  const [middle_name, setMiddle_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [specialization, setSpecialization] = useState("");
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
  const [institution, setInstitution] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [qualification_earned, setQualification_earned] = useState("");
  const [next_of_kin_full_name, setNext_of_kin_full_name] = useState("");
  const [next_of_kin_phone_no_1, setNext_of_kin_phone_no_1] = useState("");
  const [next_of_kin_phone_no_2, setNext_of_kin_phone_no_2] = useState("");
  const [next_of_kin_address, setNext_of_kin_address] = useState("");
  const [guardian_full_name, setGuardian_full_name] = useState("");
  const [guardian_phone_no_1, setGuardian_phone_no_1] = useState("");
  const [guardian_phone_no_2, setGuardian_phone_no_2] = useState("");
  const [guardian_address, setGuardian_address] = useState("");
  const [blood_group, setBlood_group] = useState("");
  const [genotype, setGenotype] = useState("");
  const [allergies, setAllergies] = useState("");
  const [diabetes, setDiabetes] = useState("");
  const [STIs, setSTIs] = useState("");
  const [heart_disease, setHeart_disease] = useState("");
  const [disabilities, setDisabilities] = useState("");
  const [respiratory_problems, setRespiratory_problems] = useState("");
  const [msg,setMsg] = useState("");

  const editProfile_ = useSelector((state) => state.editProfile_);
  const {loading,success:isSuccess,error} = editProfile_

  const submitHandler = (e) => {
    e.preventDefault();
    const userdata = {first_name,
        middle_name,
        last_name,
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
            academic_history: [
                {
                  institution:institution,
                  start_date:start_date,
                  end_date:end_date,
                  qualification_earned:qualification_earned
                }
              ],
            family_data : {
                next_of_kin_full_name:next_of_kin_full_name,
                next_of_kin_phone_no_1:next_of_kin_phone_no_1,
                next_of_kin_phone_no_2:next_of_kin_phone_no_2,
                next_of_kin_address:next_of_kin_address,
                guardian_full_name:guardian_full_name,
                guardian_phone_no_1:guardian_phone_no_1,
                guardian_phone_no_2:guardian_phone_no_2,
                guardian_address:guardian_address
              },
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
      dispatch(editProfile(userdata))   
  };
  if (isSuccess) {
    setMsg(true)
    dispatch({type:EDITPROFILE_RESET})
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

  React.useEffect(() => {
    if (success) {
      setFirst_name(studentDetail && studentDetail.first_name);
      setLast_name(studentDetail && studentDetail.last_name);
      setMiddle_name(studentDetail && studentDetail.middle_name);
      setEmail(studentDetail && studentDetail.email);
      setSpecialization(studentDetail && studentDetail.specialization);
      setMarital_status(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.bioda.marital_status
      );
      setGender(
        studentDetail && studentDetail.biodata && studentDetail.biodata.gender
      );
      setReligion(
        studentDetail && studentDetail.tata && studentDetail.bioda.religion
      );
      setBirthday(
        studentDetail && studentDetail.biodata && studentDetail.biodata.birthday
      );
      setNationality(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.nationality
      );
      setState_of_origin(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.state_of_origin
      );
      setLocal_govt(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.local_govt
      );
      setAddress(
        studentDetail && studentDetail.biodata && studentDetail.biodata.address
      );
      setPhone_no_1(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.phone_no_1
      );
      setPhone_no_2(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.phone_no_2
      );
      setInstitution(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.academic_history[0] &&
          studentDetail.biodata.academic_history[0].institution
      );
      setStart_date(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.academic_history[0] &&
          studentDetail.biodata.academic_history[0].start_date
      );
      setEnd_date(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.academic_history[0] &&
          studentDetail.biodata.academic_history[0].end_date
      );
      setQualification_earned(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.academic_history[0] &&
          studentDetail.biodata.academic_history[0].qualification_earned
      );
      setNext_of_kin_full_name(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.next_of_kin_full_name
      );
      setNext_of_kin_phone_no_1(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.next_of_kin_phone_no_1
      );
      setNext_of_kin_phone_no_2(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.next_of_kin_phone_no_2
      );
      setNext_of_kin_address(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.next_of_kin_address
      );
      setGuardian_full_name(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.guardian_full_name
      );
      setGuardian_phone_no_1(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.guardian_phone_no_1
      );
      setGuardian_phone_no_2(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.guardian_phone_no_2
      );
      setGuardian_address(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.guardian_address
      );
      setBlood_group(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.blood_group
      );
      setGenotype(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.genotype
      );
      setAllergies(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.allergies
      );
      setDiabetes(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.diabetes
      );
      setSTIs(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.STIs
      );
      setHeart_disease(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.heart_disease
      );
      setDisabilities(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.diabetes
      );
      setRespiratory_problems(
        studentDetail &&
          studentDetail.biodata &&
          studentDetail.biodata.health_data &&
          studentDetail.biodata.health_data.respiratory_problems
      );
    }
  }, [success, studentDetail]);

  return (
    <div className="page_container">
      <LectureSidebar profile={"focus"} />
      <div className="right_container2">
        <LecturerHeader title={"Profile"} />
        <div className={styles.info_container}>
          <div className={styles.left}>
            <div className={styles.image_container}>
              <img src={adminpic} alt="avatar" />
            </div>
          </div>
          <div className={styles.right}>
          <div className={styles.editContainer}>
                <div className={styles.editinfo}>
                    <Input
                    label={"First Name"}
                     type={"text"}
                     value={first_name}
                     onChange={(e) => setFirst_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Middle Name"}
                     type="text"
                     value={middle_name}
                     onChange={(e) => setMiddle_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    type="text"
                    label={"Last Name"}
                    disabled
                    value={last_name}
                    onChange={(e) => setLast_name(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Email"}
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Specialization"}
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    readOnly/>
                </div>
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
                    type="type"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"State of Origin"}
                    type="text"
                    value={state_of_origin}
                    onChange={(e) => setState_of_origin(e.target.value)}
                  />
                </div>
                <div className={styles.editinfo}>
                  <Input
                    label={"Nationality"}
                    type="text"
                    value={nationality}
                    onChange={(e) => setNationality(e.target.value)}
                  />
                </div>
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
                   
                  />
                  </div>
                  <div className={styles.editinfo}>
                  <Input
                    label={"Phone Number 2"}
                    type="number"
                    value={phone_no_2}
                    onChange={(e) => setPhone_no_2(e.target.value)}
                   
                  />
                  </div>
                  <div className={styles.editinfo}>
                    <Input
                    label={"Institution"}
                    type="text"
                    value={institution}
                    onChange={(e) => setStart_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"Start Date"}
                    type="date"
                    value={start_date}
                    onChange={(e) => setStart_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                    <Input
                    label={"End date"}
                    type="date"
                    value={end_date}
                    onChange={(e) => setEnd_date(e.target.value)}
                    />
                </div>
                <div className={styles.editinfo}>
                <label>Qualification Earn</label>
                  <select
                    onChange={(e) => setQualification_earned(e.target.value)}
                    value={qualification_earned}
                  >
                    <option>Select</option>
                    <option value="JSSCE">JSSCE</option>
                    <option value="SSCE">SSCE</option>
                    <option value="Bachelors">Bachelors</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
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
                  label={"Next of kin phone number "}
                  type="text"
                  value={next_of_kin_phone_no_1}
                  onChange={(e) => setNext_of_kin_phone_no_1(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
              <Input
                  label={"Next of kin phone number 2"}
                  type="text"
                  value={next_of_kin_phone_no_2}
                  onChange={(e) => setNext_of_kin_phone_no_2(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Next of kin address"}
                  type="textarea"
                  value={next_of_kin_address}
                  onChange={(e) => setNext_of_kin_address(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian full name"}
                  type="text"
                  value={guardian_full_name}
                  onChange={(e) => setGuardian_full_name(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian phone number"}
                  type="text"
                  value={guardian_phone_no_1}
                  onChange={(e) => setGuardian_phone_no_1(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
                <Input
                  label={"Guardian phone number 2"}
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
                <div className={styles.editinfo}>
              <Input
                  label={"Blood Group"}
                  type="type"
                  value={blood_group}
                  onChange={(e) => setBlood_group(e.target.value)}
                />
              </div>
              <div className={styles.editinfo}>
              <Input
                  label={"Genotype"}
                  type="type"
                  value={genotype}
                  onChange={(e) => setGenotype(e.target.value)}
     
                />
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
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                  
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
            {loading? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
                <button className={styles.brown} onClick={submitHandler}>upload</button>
            )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditLecturerProfile;
