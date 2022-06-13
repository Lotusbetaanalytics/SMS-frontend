import React, { useEffect, useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import HeaderNav from "../../components/HeaderNav";
import Sidebar from "../../components/Sidebar";
import { totalStudent } from "../../redux/action/studentAction";
import { BiArrowBack } from "react-icons/bi";
import styles from "./styles.module.css";
import Modal from "../../components/Modal";
import {
  editStudentId,
  getStudentId,
} from "../../redux/action/editStudentIdAction";
import { Button, useToast } from "@chakra-ui/react";
import { EDIT_STUDENTBYID_RESET } from "../../redux/constants/editStudentIdConstant";
import { getSpecialization } from "../../redux/action/userProfileDataAction";

const ManageViewStudent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  let { id } = useParams();

  const [openModal, setOpenModal] = useState(false);

  const [first_Name, setFirst_Name] = useState("");
  const [middle_Name, setMiddle_Name] = useState("");
  const [last_Name, setLast_Name] = useState("");
  const [email, setEmail] = useState("");
  const [matric_no, setMatric_no] = useState("");
  const [student_id, setStudent_id] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [isActive, setIsActive] = useState("");

  React.useEffect(() => {
    dispatch(
      getStudentId(
        id,
        setFirst_Name,
        setMiddle_Name,
        setLast_Name,
        setEmail,
        setMatric_no,
        setStudent_id,
        setSpecialization,
        setIsActive,
        onChangeHandler
      )
    );
  }, [id, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      user: {
        first_name: first_Name,
        middle_name: middle_Name,
        last_name: last_Name,
        email: email,
        specialization: specialization,
      },
      is_active: isActive,
      matric_no: matric_no,
      student_id: student_id,
    };
    dispatch(editStudentId(id, data));
    console.log(data);
  };
  console.log(id);

  const onChangeHandler = (e) => {
    setFirst_Name(e.target.value);
    setMiddle_Name(e.target.value);
    setLast_Name(e.target.value);
    setEmail(e.target.value);
    setMatric_no(e.target.value);
    setStudent_id(e.target.value);
    setSpecialization(e.target.value);
    setIsActive(e.target.value);
  };

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const [studentInfo, setStudentInfo] = React.useState();

  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent = [], success: student } = totalStudentNo;
  const data = allStudent.filter((x) => x.id === parseInt(id));

  React.useEffect(() => {
    if (student) {
      setStudentInfo(data && data);
    }
  }, [student]);
  console.log(studentInfo && studentInfo[0].user.first_name);

  const backHandler = () => {
    navigate("/admin/managestudent");
  };

  useEffect(() => {
    dispatch(getSpecialization());
  }, [dispatch]);

  const getSpecilize = useSelector((state) => state.getSpecilize);
  const { specializationid } = getSpecilize;
  // console.log(specializationid);

  const editStudent = useSelector((state) => state.editStudent);
  const { success, error, loading } = editStudent;

  if (success) {
    toast({
      title: "Notification",
      description: "Update Successful",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: EDIT_STUDENTBYID_RESET });
  }

  if (error) {
    toast({
      title: "Notification",
      description: "Error Updating",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: EDIT_STUDENTBYID_RESET });
  }

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <div className={styles.profile}>
        <HeaderNav title="View Students" />
        <div className={styles.profileHeader}>
          <div className={styles.staffCount}>
            <div className={styles.staffDetails}>
              <div className={styles.staffIcon}>
                <FaUserGraduate />
                <h2>Students</h2>
              </div>
              <h1>|</h1>
              <h4>{allStudent && allStudent.length}</h4>
            </div>
          </div>
          <div className={styles.profileContent}>
            <div className={styles.submitButton}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={backHandler}
              >
                <BiArrowBack />
                Back
              </button>
            </div>
          </div>
        </div>
        <div className={styles.profileBox}>
          <div className={styles.gridBox}>
            <div className={styles.eachGridBox}>
              <header>First Name</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].user.first_name}
                </p>
              </span>
            </div>
            <div className={styles.eachGridBox}>
              <header>Middle Name</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].user.middle_name}
                </p>
              </span>
            </div>

            <div className={styles.eachGridBox}>
              <header>Last Name</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].user.last_name}
                </p>
              </span>
            </div>

            <div className={styles.eachGridBox}>
              <header>Matric No</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].matric_no}
                </p>
              </span>
            </div>

            <div className={styles.eachGridBox}>
              <header>Email</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].user.email}
                </p>
              </span>
            </div>
            <div className={styles.eachGridBox}>
              <header>Specialization</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].specialization.name}
                </p>
              </span>
            </div>
            <div className={styles.eachGridBox}>
              <header>Student Identification Number</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].student_id}
                </p>
              </span>
            </div>
            <div className={styles.eachGridBox}>
              <header>Active Student</header>
              <span className={styles.titleContainer}>
                <p className={styles.titleName}>
                  {studentInfo && studentInfo[0].is_active.toString()}
                </p>
              </span>
            </div>
          </div>
          <div className={styles.editModal}>
            <button
              className={styles.editBtn}
              onClick={() => {
                setOpenModal(true);
              }}
            >
              Edit Details
            </button>
          </div>
          {openModal && (
            <Modal
              onClose={() => setOpenModal(false)}
              isVisible={true}
              size="md"
              content={
                <div className={styles.noticeInputField}>
                  <span>Edit Students Details</span>
                  <div className={styles.inputBox}>
                    <label>First Name</label>
                    <input
                      type="text"
                      onChange={(e) => setFirst_Name(e.target.value)}
                      value={first_Name}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <label>Middle Name</label>
                    <input
                      type="text"
                      onChange={(e) => setMiddle_Name(e.target.value)}
                      value={middle_Name}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <label>Last Name</label>
                    <input
                      type="text"
                      onChange={(e) => setLast_Name(e.target.value)}
                      value={last_Name}
                      required={true}
                    />
                  </div>

                  <div className={styles.inputBox}>
                    <label>Email Address</label>
                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <label>Martic No.</label>
                    <input
                      type="number"
                      onChange={(e) => setMatric_no(e.target.value)}
                      value={matric_no}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <label>Specialization</label>
                    <select
                      onChange={(e) => setSpecialization(e.target.value)}
                      value={specialization}
                      required={true}
                      className={styles.newStudentSelect}
                    >
                      <option></option>
                      {specializationid &&
                        specializationid.map((item, i) => (
                          <option key={i} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div className={styles.inputBox}>
                    <label>Student ID</label>
                    <input
                      type="text"
                      onChange={(e) => setStudent_id(e.target.value)}
                      value={student_id}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    <label>Active Student</label>
                    <input
                      type="text"
                      onChange={(e) => setIsActive(e.target.value)}
                      value={isActive}
                      required={true}
                    />
                  </div>
                  <div className={styles.inputBox}>
                    {loading ? (
                      <Button
                        isLoading
                        loadingText="Validating Credentials..."
                        colorScheme="green"
                        variant="outline"
                        style={{ height: "5rem" }}
                      />
                    ) : (
                      <button
                        className={styles.modalBtn}
                        onClick={submitHandler}
                      >
                        Upadate
                      </button>
                    )}
                  </div>
                </div>
              }
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ManageViewStudent;
