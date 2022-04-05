import React, { useEffect } from "react";
import styles from "./styles.module.css";
import {
  Table,
  Tbody,
  Td,
  Th,
  Tr,
  Button,
  CircularProgress,
  Center,
  AlertIcon,
  Alert,
} from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Link, useParams } from "react-router-dom";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import { useDispatch, useSelector } from "react-redux";

function ViewstudentDetails() {
  const dispatch = useDispatch();

  let { id } = useParams();

  const handlerDelete = (_id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      //   dispatch(deleteViewCandidateI(id));
      //   window.location.reload(false);
    }
    console.log(_id);
  };

  useEffect(() => {
    dispatch(totalStudent());
  }, [dispatch]);

  const totalStudentNo = useSelector((state) => state.totalStudentNo);
  const { allStudent } = totalStudentNo;

  return (
    <div className={styles.viewContainer}>
      <Sidebar />
      <Header />

      <div className={styles.viewBack}>
        <Link to="/admin/newstudent">
          <button>Back</button>
        </Link>
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
                <Tr key={item._id}>
                  <Td>{item.user.first_name}</Td>
                  <Td>{item.user.last_name}</Td>
                  <Td>{item.matric_no}</Td>
                  <Td>{item.user.email}</Td>
                  <Td>
                    <Button
                      className="chakar_btn"
                      colorScheme="teal"
                      borderRadius="10"
                      type="submit"
                    >
                      <Link to={`/viewstudentsinfo/${item.id}`}>View More</Link>
                    </Button>
                    <Button
                      className="chakar_btn"
                      colorScheme="red"
                      borderRadius="10"
                      key={item._id}
                      onClick={() => handlerDelete(item._id)}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            ))}
        </Table>
      </div>
    </div>
  );
}

export default ViewstudentDetails;
