import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { Table, Tbody, Td, Th, Tr, Button } from "@chakra-ui/react";
import Header from "../../../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { totalStaff } from "../../../redux/action/getAllUsersAction";
import { deleteStaffId } from "../../../redux/action/staffAction";
import SidebarNav from "../../../components/SidebarNav";

function ViewStaffDetails() {
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      dispatch(deleteStaffId(id));
      window.location.reload(false);
    }
    console.log(id);
  };

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);

  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff } = totalStaffNo;

  return (
    <div className={styles.viewContainer}>
      <SidebarNav />
      <Header />

      <div className={styles.viewBack}>
        <Link to="/">
          <button>Back</button>
        </Link>
      </div>

      <div className={styles.viewTable}>
        <Table varient="striped" colorScheme="gray" size="md">
          <Tr>
            <Th>First Name</Th>
            <Th>Last Name</Th>
            <Th>Email</Th>
            <Th>Staff ID No</Th>
            <Th>Action</Th>
          </Tr>
          {allStaff &&
            allStaff.map((item, i) => (
              <Tbody key={i}>
                <Tr key={item._id}>
                  <Td>{item.user.first_name}</Td>
                  <Td>{item.user.last_name}</Td>
                  <Td>{item.user.email}</Td>
                  <Td>{item.employee_id}</Td>
                  <Td>
                    <Button
                      className="chakar_btn"
                      colorScheme="teal"
                      borderRadius="10"
                      type="submit"
                    >
                      <Link to={`/viewstaffsinfo/${item.id}`}>View More</Link>
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

export default ViewStaffDetails;
