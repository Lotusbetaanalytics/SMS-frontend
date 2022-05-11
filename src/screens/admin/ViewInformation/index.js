import React, { useEffect } from "react";
import { Table, Tbody, Td, Th, Tr, Button } from "@chakra-ui/react";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import SidebarNav from "../../../components/SidebarNav";
import { Link } from "react-router-dom";
import { getInformation } from "../../../redux/action/getScopeAction";
import { useDispatch, useSelector } from "react-redux";

function ViewInformation() {
  const dispatch = useDispatch();

  const handlerDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this ?")) {
      //   dispatch(deleteStaffId(id));
      window.location.reload(false);
    }
    console.log(id);
  };

  useEffect(() => {
    dispatch(getInformation());
  }, [dispatch]);

  const getInfoImage = useSelector((state) => state.getInfoImage);
  const { getInfoId } = getInfoImage;
  console.log(getInfoId);

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
            <Th>Title</Th>
            <Th>Body</Th>
            <Th>Scope</Th>
            <Th>Source</Th>
            <Th>Action</Th>
          </Tr>
          {getInfoId &&
            getInfoId.map((item, i) => (
              <Tbody key={item.id}>
                <Td>{item.title}</Td>
                <Td>{item.body}</Td>
                <Td>{item.scope}</Td>
                <Td>{item.soucre}</Td>
                <Td>
                  <Button
                    className="chakar_btn"
                    colorScheme="teal"
                    borderRadius="10"
                    type="submit"
                  >
                    <Link to={`/informationImage/${item.id}`}>Add Image</Link>
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
              </Tbody>
            ))}
        </Table>
      </div>
    </div>
  );
}

export default ViewInformation;
