import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Table, Tbody, Td, Th, Tr, Button } from "@chakra-ui/react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { totalStudent } from "../../../redux/action/getAllUsersAction";
import { useDispatch, useSelector } from "react-redux";
import { deleteStudentId } from "../../../redux/action/createStudentAction";

function ViewstudentDetails() {
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      dispatch(deleteStudentId(id));
      window.location.reload(false);
    }
    console.log(id);
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
                <Tr key={item.id}>
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
                      onClick={() => handlerDelete(item.id)}
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
