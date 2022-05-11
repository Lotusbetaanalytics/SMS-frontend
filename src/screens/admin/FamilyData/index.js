import React, { useState } from "react";
import SidebarNav from "../../../components/SidebarNav";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postFamilyData } from "../../../redux/action/usersDataAction";

function FamilyData() {
  const [next_of_kin_full_name, setNext_of_kin_full_name] = useState("");
  const [next_of_kin_phone_no_1, setNext_of_kin_phone_no_1] = useState("");
  const [next_of_kin_phone_no_2, setNext_of_kin_phone_no_2] = useState("");
  const [next_of_kin_address, setNext_of_kin_address] = useState("");
  const [guardian_full_name, setGuardian_full_name] = useState("");
  const [guardian_phone_no_1, setGuardian_phone_no_1] = useState("");
  const [guardian_phone_no_2, setGuardian_phone_no_2] = useState("");
  const [guardian_address, setGuardian_address] = useState("");

  const dispatch = useDispatch();
  const toast = useToast();

  const submitHandler = (e) => {
    e.preventDefault();
    const familydata = {
      next_of_kin_full_name: next_of_kin_full_name,
      next_of_kin_phone_no_1: next_of_kin_phone_no_1,
      next_of_kin_phone_no_2: next_of_kin_phone_no_2,
      next_of_kin_address: next_of_kin_address,
      guardian_full_name: guardian_full_name,
      guardian_phone_no_1: guardian_phone_no_1,
      guardian_phone_no_2: guardian_phone_no_2,
      guardian_address: guardian_address,
    };
    dispatch(postFamilyData(familydata, toast));
    console.log(familydata);
  };

  const postFamily = useSelector((state) => state.postFamily);
  const { loading } = postFamily;

  return (
    <div className={styles.familyDataContainer}>
      <SidebarNav />
      <Header />

      <div className={styles.familyData}>
        <div className={styles.familyDataTitle}>
          <span>Create Family Data</span>
        </div>

        <div className={styles.familyDataContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.familyDataForm}>
              <div className={styles.newForm}>
                <label>Next of Kin Full Name</label>
                <input
                  type="text"
                  onChange={(e) => setNext_of_kin_full_name(e.target.value)}
                  value={next_of_kin_full_name}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Next of Kin Phone Number</label>
                <input
                  type="tel"
                  onChange={(e) =>
                    setNext_of_kin_phone_no_1(
                      e.currentTarget.value.slice(0, 11)
                    )
                  }
                  value={next_of_kin_phone_no_1}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Next of Kin Phone 2</label>
                <input
                  type="tel"
                  onChange={(e) =>
                    setNext_of_kin_phone_no_2(
                      e.currentTarget.value.slice(0, 11)
                    )
                  }
                  value={next_of_kin_phone_no_2}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Next of Kin Address</label>
                <input
                  type="text"
                  onChange={(e) => setNext_of_kin_address(e.target.value)}
                  value={next_of_kin_address}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Guardian Full Name</label>
                <input
                  type="text"
                  onChange={(e) => setGuardian_full_name(e.target.value)}
                  value={guardian_full_name}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Guardian Phone Number</label>
                <input
                  type="tel"
                  onChange={(e) =>
                    setGuardian_phone_no_1(e.currentTarget.value.slice(0, 11))
                  }
                  value={guardian_phone_no_1}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Guardian Phone Number 2</label>
                <input
                  type="tel"
                  onChange={(e) =>
                    setGuardian_phone_no_2(e.currentTarget.value.slice(0, 11))
                  }
                  value={guardian_phone_no_2}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Guardian Address</label>
                <input
                  type="address"
                  onChange={(e) => setGuardian_address(e.target.value)}
                  value={guardian_address}
                  // required={true}
                />
              </div>
            </div>
            <div className={styles.staffBtn}>
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
                  Create Bio-Data
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FamilyData;
