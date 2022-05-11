import React, { useEffect, useState } from "react";
// import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { createNewFaculty } from "../../../redux/action/facultyAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, useToast } from "@chakra-ui/react";
import { totalStaff } from "../../../redux/action/getAllUsersAction";
// import { CREATE_FACULTY_RESET } from "../../../redux/constants/facultyConstants";
import SidebarNav from "../../../components/SidebarNav";

function Faculty() {
  const [faculty_Name, setFaculty_Name] = useState("");
  const [faculty_Code, setFaculty_Code] = useState("");
  const [deanOfFaculty, setDeanOfFaculty] = useState("");
  const [description, setDescription] = useState("");
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  console.log(isActive);

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const facultyData = {
      name: faculty_Name,
      code: faculty_Code,
      description: description,
      dean: deanOfFaculty,
      is_active: isActive,
    };
    dispatch(createNewFaculty(facultyData, toast));
    console.log(facultyData);
  };

  const postNewFaculty = useSelector((state) => state.postNewFaculty);
  const { loading, success } = postNewFaculty;

  if (success) {
    window.location.reload();
  }

  useEffect(() => {
    dispatch(totalStaff());
  }, [dispatch]);

  const totalStaffNo = useSelector((state) => state.totalStaffNo);
  const { allStaff } = totalStaffNo;

  console.log(allStaff);

  return (
    <div className={styles.createFacultyContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.newFaculty}>
        <div className={styles.newFacultyTitle}>
          <span>Create New Faculty</span>
        </div>
        <div className={styles.newFacultyContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.newFacultyForm}>
              <div className={styles.newForm}>
                <label>Faculty</label>
                <input
                  type="text"
                  onChange={(e) => setFaculty_Name(e.target.value)}
                  value={faculty_Name}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Faculty Code</label>
                <input
                  type="text"
                  onChange={(e) =>
                    setFaculty_Code(e.currentTarget.value.slice(0, 11))
                  }
                  value={faculty_Code}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Dean of Faculty</label>
                <select
                  onChange={(e) => setDeanOfFaculty(e.target.value)}
                  value={deanOfFaculty}
                  required={true}
                  className={styles.newFacultySelect}
                >
                  <option></option>
                  {allStaff &&
                    allStaff.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.user.full_name}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Description (optional)</label>
                <input
                  type="text"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
            </div>

            <div className={styles.facultyBtn}>
              {loading ? (
                <Button
                  isLoading
                  loadingText="Validating Credentials..."
                  colorScheme="teal"
                  variant="outline"
                  isFullWidth
                  style={{ height: "5rem" }}
                />
              ) : (
                <button type="submit" className={styles.stBtn}>
                  Create Faculty
                </button>
              )}

              <div className={styles.facultyRadioContainer}>
                <div className={styles.radioBtn}>
                  <input
                    onChange={handleClick}
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span className={styles.toggleRound}>Publish Faculty</span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
