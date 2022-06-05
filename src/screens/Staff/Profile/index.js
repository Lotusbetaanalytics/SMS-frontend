import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import LecturerHeader from '../../../components/lecturerHeader'
import LectureSidebar from '../../../components/lecturerSidebar'
import { studentDetails } from '../../../redux/Actions/studentActions/studentAction'
import styles from "./styles.module.css"
import adminpic from "../../../assets/profile.jpg";
const LecturerProfile = () => {
    const navigate = useNavigate();
    const dispatch = useNavigate();
    const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));
    useEffect(() => {
        dispatch(studentDetails())
      }, [dispatch]);

    const details = useSelector((state) => state.details);
  const { studentDetail,success } = details;
    
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
  
  const editHandler = () =>{
      navigate("/lecturer/profile/edit")
  }  
    // const [msg,setMsg] = useState("")

    React.useEffect(() => {
        if (success) {
     setFirst_name( studentDetail && studentDetail.first_name);
     setLast_name( studentDetail && studentDetail.last_name);
     setMiddle_name( studentDetail && studentDetail.middle_name);
     setEmail(studentDetail &&  studentDetail.email);
     setSpecialization(studentDetail && studentDetail.specialization);
     setMarital_status(  studentDetail && studentDetail.biodata && studentDetail.bioda.marital_status);
     setGender( studentDetail && studentDetail.biodata && studentDetail.biodata.gender);
     setReligion(  studentDetail && studentDetail.tata && studentDetail.bioda.religion);
     setBirthday(  studentDetail && studentDetail.biodata && studentDetail.biodata.birthday);
     setNationality( studentDetail && studentDetail.biodata && studentDetail.biodata.nationality);
     setState_of_origin(  studentDetail && studentDetail.biodata && studentDetail.biodata.state_of_origin);
     setLocal_govt(   studentDetail && studentDetail.biodata && studentDetail.biodata.local_govt);
     setAddress(  studentDetail && studentDetail.biodata && studentDetail.biodata.address);
     setPhone_no_1(  studentDetail && studentDetail.biodata && studentDetail.biodata.phone_no_1);
     setPhone_no_2(  studentDetail && studentDetail.biodata && studentDetail.biodata.phone_no_2);
     setInstitution(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].institution);
      setStart_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].start_date);
      setEnd_date(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].end_date);
      setQualification_earned(studentDetail && studentDetail.biodata && studentDetail.biodata.academic_history[0] && studentDetail.biodata.academic_history[0].qualification_earned);
      setNext_of_kin_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_full_name) ;
  setNext_of_kin_phone_no_1(studentDetail && studentDetail.biodata &&studentDetail.biodata.next_of_kin_phone_no_1);
  setNext_of_kin_phone_no_2(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_phone_no_2);
  setNext_of_kin_address(studentDetail && studentDetail.biodata && studentDetail.biodata.next_of_kin_address);
  setGuardian_full_name(studentDetail && studentDetail.biodata && studentDetail.biodata.guardian_full_name);
  setGuardian_phone_no_1(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_phone_no_1);
  setGuardian_phone_no_2(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_phone_no_2);
  setGuardian_address(studentDetail && studentDetail.biodata &&studentDetail.biodata.guardian_address);
  setBlood_group(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.blood_group );
        setGenotype(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.genotype);
        setAllergies(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.allergies);
       setDiabetes(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
       setSTIs(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.STIs);
       setHeart_disease(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.heart_disease);
       setDisabilities(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.diabetes);
       setRespiratory_problems(studentDetail && studentDetail.biodata && studentDetail.biodata.health_data && studentDetail.biodata.health_data.respiratory_problems);
    }
}, [success,studentDetail]);
    
      
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
                    <div className={styles.info}>
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
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of kin full name</div>
                        <div className={styles.info_body}>{next_of_kin_full_name}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of kin phone number 1</div>
                        <div className={styles.info_body}>{next_of_kin_phone_no_1}</div>
                    </div>
                    <div className={styles.info}>
                        <div className={styles.info_title}>Next of kin phone number 2</div>
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
                    <button className={styles.brown} onClick={editHandler}>Edit</button>
                </div>
          </div>
        </div>
      </div>
    </div> 
  )
}

export default LecturerProfile