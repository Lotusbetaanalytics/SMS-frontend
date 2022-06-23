import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LecturerHeader from "../../../components/lecturerHeader";
import LectureSidebar from "../../../components/lecturerSidebar";
import { studentDetails } from "../../../redux/Actions/studentActions/studentAction";
import styles from "./styles.module.css";
import adminpic from "../../../assets/profile.jpg";
import { lecturerDetailsAction } from "../../../redux/Actions/lecturer/lecturerDetail";
const LecturerProfile = () => {
  const navigate = useNavigate();
  const dispatch = useNavigate();

  const lecturerLogin = JSON.parse(localStorage.getItem("lecturerInfo"));
  useEffect(() => {
    dispatch(lecturerDetailsAction());
  }, [dispatch]);

  const lecturerDetails = useSelector((state) => state.lecturerDetails);
  const { lecturerDetail, success } = lecturerDetails;
  console.log(lecturerDetail);

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
  //   const [institution, setInstitution] = useState("");
  //   const [start_date, setStart_date] = useState("");
  //   const [end_date, setEnd_date] = useState("");
  //   const [qualification_earned, setQualification_earned] = useState("");
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

  const editHandler = () => {
    navigate("/lecturer/profile/edit");
  };
  // const [msg,setMsg] = useState("")

  React.useEffect(() => {
    if (success) {
      setFirst_name(lecturerDetail && lecturerDetail.first_name);
      setLast_name(lecturerDetail && lecturerDetail.last_name);
      setMiddle_name(lecturerDetail && lecturerDetail.middle_name);
      setEmail(lecturerDetail && lecturerDetail.email);
      setSpecialization(lecturerDetail && lecturerDetail.specialization.name);
      setMarital_status(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.marital_status
      );
      setGender(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.gender
      );
      setReligion(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.religion
      );
      setBirthday(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.birthday
      );
      setNationality(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.nationality
      );
      setState_of_origin(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.state_of_origin
      );
      setLocal_govt(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.local_govt
      );
      setAddress(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.address
      );
      setPhone_no_1(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.phone_no_1
      );
      setPhone_no_2(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.phone_no_2
      );
      //  setInstitution(lecturerDetail && lecturerDetail.biodata && lecturerDetail.biodata.academic_history[0] && lecturerDetail.biodata.academic_history[0].institution);
      //   setStart_date(lecturerDetail && lecturerDetail.biodata && lecturerDetail.biodata.academic_history[0] && lecturerDetail.biodata.academic_history[0].start_date);
      //   setEnd_date(lecturerDetail && lecturerDetail.biodata && lecturerDetail.biodata.academic_history[0] && lecturerDetail.biodata.academic_history[0].end_date);
      //   setQualification_earned(lecturerDetail && lecturerDetail.biodata && lecturerDetail.biodata.academic_history[0] && lecturerDetail.biodata.academic_history[0].qualification_earned);
      setNext_of_kin_full_name(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.next_of_kin_full_name
      );
      setNext_of_kin_phone_no_1(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.next_of_kin_phone_no_1
      );
      setNext_of_kin_phone_no_2(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.next_of_kin_phone_no_2
      );
      setNext_of_kin_address(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.next_of_kin_address
      );
      setGuardian_full_name(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.guardian_full_name
      );
      setGuardian_phone_no_1(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.guardian_phone_no_1
      );
      setGuardian_phone_no_2(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.guardian_phone_no_2
      );
      setGuardian_address(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.family_data.guardian_address
      );
      setBlood_group(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.blood_group
      );
      setGenotype(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.genotype
      );
      setAllergies(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.allergies
      );
      setDiabetes(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.diabetes
      );
      setSTIs(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.STIs
      );
      setHeart_disease(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.heart_disease
      );
      setDisabilities(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.disabilities
      );
      setRespiratory_problems(
        lecturerDetail &&
          lecturerDetail.biodata &&
          lecturerDetail.biodata.health_data &&
          lecturerDetail.biodata.health_data.respiratory_problems
      );
    }
  }, [success, lecturerDetail]);

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
            <div className={styles.content}>
              <div className={styles.info}>
                <div className={styles.info_title}>First Name</div>
                <div className={styles.info_body}>{first_name}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Middle Name</div>
                <div className={styles.info_body}>{middle_name}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Last Name</div>
                <div className={styles.info_body}>{last_name}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Email</div>
                <div className={styles.info_body}>{email}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>specialization</div>
                <div className={styles.info_body}>{specialization}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.info_title}>Marital Status</div>
                <div className={styles.info_body}>{marital_status}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Gender</div>
                <div className={styles.info_body}>{gender}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Religion</div>
                <div className={styles.info_body}>{religion}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Birthday</div>
                <div className={styles.info_body}>{birthday}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Nationality</div>
                <div className={styles.info_body}>{nationality}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>State of origin</div>
                <div className={styles.info_body}>{state_of_origin}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Local Address</div>
                <div className={styles.info_body}>{local_govt}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.info_title}>Phone Number 1</div>
                <div className={styles.info_body}>{phone_no_1}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Phone Number 2</div>
                <div className={styles.info_body}>{phone_no_2}</div>
              </div>

              <div className={styles.info}>
                <div className={styles.info_title}>Address</div>
                <div className={styles.info_body}>{address}</div>
              </div>
              {/* <div className={styles.info}>
                        <div className={styles.info_title}>Institution</div>
                        <div className={styles.info_body}>{institution}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Start Date</div>
                        <div className={styles.info_body}>{start_date}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>End Date</div>
                        <div className={styles.info_body}>{end_date}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>qualification_earned</div>
                        <div className={styles.info_body}>{qualification_earned}</div>
                    </div> */}
              <div className={styles.info}>
                <div className={styles.info_title}>Next of kin full name</div>
                <div className={styles.info_body}>{next_of_kin_full_name}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>
                  Next of kin phone number 1
                </div>
                <div className={styles.info_body}>{next_of_kin_phone_no_1}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>
                  Next of kin phone number 2
                </div>
                <div className={styles.info_body}>{next_of_kin_phone_no_2}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Next of kin address</div>
                <div className={styles.info_body}>{next_of_kin_address}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Guardian full name</div>
                <div className={styles.info_body}>{guardian_full_name}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Guardian Phone number</div>
                <div className={styles.info_body}>{guardian_phone_no_1}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Guardian phone number 2</div>
                <div className={styles.info_body}>{guardian_phone_no_2}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Guardian address</div>
                <div className={styles.info_body}>{guardian_address}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Blood Group</div>
                <div className={styles.info_body}>{blood_group}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Genotype</div>
                <div className={styles.info_body}>{genotype}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Allergies</div>
                <div className={styles.info_body}>{allergies}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Diabetes</div>
                <div className={styles.info_body}>{diabetes}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>STIs</div>
                <div className={styles.info_body}>{STIs}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Heart Disease</div>
                <div className={styles.info_body}>{heart_disease}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Disabilities</div>
                <div className={styles.info_body}>{disabilities}</div>
              </div>
              <div className={styles.info}>
                <div className={styles.info_title}>Respiratory Problems</div>
                <div className={styles.info_body}>{respiratory_problems}</div>
              </div>
            </div>
            <div className={styles.btnContainer}>
              <button className={styles.brown} onClick={editHandler}>
                Edit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LecturerProfile;
