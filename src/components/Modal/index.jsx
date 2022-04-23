import React, { useState } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getStudentId } from "../../redux/action/getUsersIdAction";
import styles from "./styles.module.css";
import { editStudentId } from "../../redux/action/editUserDetailsAction";
import { Alert, AlertIcon, Center, CircularProgress } from "@chakra-ui/react";

function Modal({ closeModal }) {
  const [editFirstName, setEditFirstName] = useState("");
  const [editLastName, setEditLastName] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editMatric_no, setEditMatric_no] = useState("");

  const dispatch = useDispatch();

  const { id } = useParams();

  React.useEffect(() => {
    dispatch(
      getStudentId(
        id,
        setEditFirstName,
        setEditLastName,
        setEditEmail,
        setEditMatric_no,
        onChangeHandler
      )
    );
  }, [id, dispatch]);
  // console.log();

  const submitHandler = (e) => {
    e.preventDefault();
    const data = {
      user: {
        first_name: editFirstName,
        last_name: editLastName,
        email: editEmail,
      },

      matric_no: editMatric_no,
    };
    dispatch(editStudentId(id, data));
  };
  console.log(id);

  const editStudent = useSelector((state) => state.editStudent);
  const { success, error, loading } = editStudent;

  const onChangeHandler = (e) => {
    setEditFirstName(e.target.value);
    setEditLastName(e.target.value);
    setEditEmail(e.target.value);
    setEditMatric_no(e.target.value);
  };

  return (
    <div className={styles.modalContainer}>
      <div className={styles.modalContent}>
        <div className={styles.modalCancelButton}>
          <button onClick={() => closeModal(false)}>X</button>
        </div>
        <div className={styles.title}>Edit Student Details</div>
        <div className={styles.body}>
          {error && (
            <Alert status="error">
              <AlertIcon />
              {error}
            </Alert>
          )}
          {success && (
            <Alert status="success">
              <AlertIcon />
              Form Edited Successfully
            </Alert>
          )}

          {loading ? (
            <Center>
              <CircularProgress isIndeterminate color="purple.300" />
            </Center>
          ) : (
            <form onSubmit={submitHandler}>
              <div className={styles.modalForm}>
                <label>First Name</label>
                <input
                  type="text"
                  onChange={(e) => setEditFirstName(e.target.value)}
                  value={editFirstName}
                  placeholder="First Name"
                  required={true}
                />

                <label>Last Name</label>
                <input
                  type="text"
                  onChange={(e) => setEditLastName(e.target.value)}
                  value={editLastName}
                  placeholder="Last Name"
                  required={true}
                />

                <label>Matric No.</label>
                <input
                  type="number"
                  onChange={(e) => setEditMatric_no(e.target.value)}
                  value={editMatric_no}
                  placeholder="Matric No."
                  required={true}
                />

                <label>Email</label>
                <input
                  type="text"
                  onChange={(e) => setEditEmail(e.target.value)}
                  value={editEmail}
                  placeholder="Email"
                  required={true}
                />
              </div>
              <div className={styles.footer}>
                <button className={styles.stBtn} type="submit">
                  Update
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default Modal;
