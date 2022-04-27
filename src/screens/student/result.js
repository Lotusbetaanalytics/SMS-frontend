import {
  Center,
  CircularProgress,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import StudentSidebar from "../../components/StudentSidebar";
import SidebarTwo from "../../components/StudentSidebar/sidebar";
import { studentDetails } from "../../redux/studentActions/studentAction";

import styles from "./styles.module.css";

const Result = () => {
  const dispatch = useDispatch();

  const details = useSelector((state) => state.details);

  const { studentDetail, loading } = details;
  const mystudentDetails = studentDetail;

  console.log(mystudentDetails);

  const academicData =
    mystudentDetails && mystudentDetails.student[0].academic_data;
  console.log(academicData);
  const academic = mystudentDetails && mystudentDetails.student[0].result;
  console.log(academic);

  useEffect(() => {
    dispatch(studentDetails());
  }, [dispatch]);

  const navigate = useNavigate();
  const studentLogin = JSON.parse(localStorage.getItem("studentInfo"));

  useEffect(() => {
    if (!studentLogin) {
      navigate("/student/login");
    }
  }, [studentLogin, dispatch]);

  return (
    <div className={styles.studentDashboard}>
      <div className={styles.Sidebar}>
        <StudentSidebar result={styles.remote} />
      </div>
      <div className={styles.info}>
        {loading ? (
          <Center>
            <CircularProgress isIndeterminate color="purple.300" />
          </Center>
        ) : (
          <div className={styles.flexy}>
            <Table size="sm" variant="striped" colorScheme="gray">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>Course</Th>
                  <Th>Session</Th>
                  <Th>Semester</Th>
                  <Th>Grade</Th>
                </Tr>
              </Thead>
              <Tbody>
                {mystudentDetails &&
                  mystudentDetails.student[0].results.map((item, i) => (
                    <Tr key={item.id}>
                      <Td>{item.course.code}</Td>
                      <Td>{item.course.name}</Td>
                      <Td>{item.session.year}</Td>
                      <Td>{item.semester.semester}</Td>
                      <Td>{item.grade}</Td>
                      
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </div>
        )}
      </div>

      <div className={styles.leftBar}>
        <SidebarTwo />
      </div>
    </div>
  );
};

export default Result;
