import React, { useEffect } from "react";
import HeaderNav from "../../components/HeaderNav";
import Sidebar from "../../components/Sidebar";
import styles from "./styles.module.css";
import { FaUserGraduate } from "react-icons/fa";
import { totalStudent } from "../../redux/action/studentAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Table, Tbody, Td, Th, Tr } from "@chakra-ui/react";
import { BiArrowBack } from "react-icons/bi";
import { BsPersonFill } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { BsPersonXFill } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { BsFillPersonDashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";

function ManageStudent() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent } = totalStudentNo;

  const postNewStudent = useSelector((state) => state.postNewStudent);
  const { loading } = postNewStudent;

  const backHandler = () => {
    navigate("/admin/dashboard");
  };

  const handlerDelete = () => {};

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <div className={styles.profile}>
        <HeaderNav title="Students" />
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
              {loading ? (
                <Button
                  isLoading
                  loadingText="Loading..."
                  colorScheme="green"
                  variant="outline"
                  style={{ height: "2rem" }}
                />
              ) : (
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={backHandler}
                >
                  <BiArrowBack />
                  Back
                </button>
              )}
            </div>
          </div>
        </div>
        <div className={styles.statsContainer}>
          <div className={styles.profileBox}>
            <div className={styles.pageTitle}>
              <span>Student Details</span>
            </div>
            <div className={styles.viewTable}>
              <Table varient="striped" colorScheme="gray" size="md">
                <Tr>
                  <Th>First Name</Th>
                  <Th>Last Name</Th>
                  <Th>Matric No</Th>
                  <Th>Email</Th>
                  <Th>Action</Th>
                </Tr>
                {allStudent &&
                  allStudent.map((item, i) => (
                    <Tbody key={i}>
                      <Tr key={item.id}>
                        <Td>{item.user.first_name}</Td>
                        <Td>{item.user.last_name}</Td>
                        <Td>{item.matric_no}</Td>
                        <Td>{item.user.email}</Td>
                        <Td>
                          <Button
                            className="chakar_btn"
                            // colorScheme="yellow"
                            borderRadius="10"
                            type="submit"
                          >
                            <Link to={`/viewstudentsinfo/${item.id}`}>
                              <GrView />
                            </Link>
                          </Button>
                          <Button
                            className="chakar_btn"
                            // colorScheme="red"
                            borderRadius="10"
                            key={item._id}
                            onClick={() => handlerDelete(item.id)}
                          >
                            <MdDeleteForever />
                          </Button>
                        </Td>
                      </Tr>
                    </Tbody>
                  ))}
              </Table>
            </div>
          </div>
          <div className={styles.profileBox2}>
            <div className={styles.pageTitle2}>
              <span>Statistics</span>
            </div>
            <div className={styles.profileGridCard}>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon1}>
                  <BsPersonFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>Newly Created Students</h2>
                  <h3>38</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon2}>
                  <BsPersonXFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>Recently Deleted Students</h2>
                  <h3>12</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon1}>
                  <BsPersonCheckFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>All Created Students</h2>
                  <h3>129</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
              <div className={styles.profileEachCard}>
                <div className={styles.profileIcon2}>
                  <BsFillPersonDashFill />
                </div>
                <div className={styles.profileContentCard}>
                  <h2>All Deleted Students</h2>
                  <h3>53</h3>
                </div>
                <div className={styles.profileCardIcon}>
                  <FaPlay />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageStudent;
