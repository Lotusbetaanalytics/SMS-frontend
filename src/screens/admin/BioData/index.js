import React, { useState } from "react";
import data from "../../../data";
import Header from "../../../components/Header";
import SidebarNav from "../../../components/SidebarNav";
import styles from "./styles.module.css";
import { Button, useToast } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { postUsersData } from "../../../redux/action/usersDataAction";

function BioData() {
  const [gender, setGender] = useState("");
  const [marital_status, setMarital_Status] = useState("");
  const [religion, setReligion] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [state_of_origin, setState_of_orgin] = useState("");
  const [local_govt, setLocal_Govt] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no_1, setPhone_no_1] = useState("");
  const [phone_no_2, setPhone_no_2] = useState("");
  // const [isActive, setIsActive] = useState(false);

  const dispatch = useDispatch();
  const toast = useToast();

  const [type, setType] = useState("text");

  // const handleClick = () => {
  //   setIsActive(!isActive);
  // };
  // console.log(isActive);

  const submitHandler = (e) => {
    e.preventDefault();
    const biodata = {
      marital_status: marital_status,
      religion: religion,
      birthday: birthday,
      nationality: nationality,
      state_of_origin: state_of_origin,
      local_govt: local_govt,
      address: address,
      phone_no_1: phone_no_1,
      phone_no_2: phone_no_2,
    };
    dispatch(postUsersData(biodata, toast));
    console.log(biodata);
  };

  const postBioDataInfo = useSelector((state) => state.postBioDataInfo);
  const { loading } = postBioDataInfo;

  const countryData = data;

  return (
    <div className={styles.bioDataContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.bioData}>
        <div className={styles.bioDataTitle}>
          <span>Create Bio-Data</span>
        </div>
        <div className={styles.bioDataContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.bioDataForm}>
              {/* <input
                type="text"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, user: e.target.value })
                }
                value={allUserData.user}
                placeholder="User"
                required={true}
              /> */}

              <div className={styles.newForm}>
                <label>Gender</label>
                <select
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  // required={true}
                  className={styles.bioDataSelect}
                >
                  <option></option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Martial Status</label>
                <select
                  onChange={(e) => setMarital_Status(e.target.value)}
                  value={marital_status}
                  // required={true}
                  className={styles.bioDataSelect}
                >
                  <option></option>
                  <option>Single</option>
                  <option>Married</option>
                  <option>Divorced</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Religion</label>
                <select
                  onChange={(e) => setReligion(e.target.value)}
                  value={religion}
                  // required={true}
                  className={styles.bioDataSelect}
                >
                  <option></option>
                  <option>Christianity</option>
                  <option>Islam</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.newForm}>
                <label>Date of Birth</label>
                <input
                  type={type}
                  onChange={(e) => setBirthday(e.target.value)}
                  value={birthday}
                  // required={true}
                  onFocus={() => setType("date")}
                  onBlur={() => setType("text")}
                />
              </div>

              <div className={styles.newForm}>
                <label>Select Country</label>
                <select
                  onChange={(e) => setNationality(e.target.value)}
                  value={nationality}
                  // required={true}
                  className={styles.bioDataSelect}
                >
                  <option></option>
                  {countryData &&
                    countryData.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.label}
                      </option>
                    ))}
                </select>
              </div>

              <div className={styles.newForm}>
                <label>State of Orgin</label>
                <input
                  type="text"
                  onChange={(e) => setState_of_orgin(e.target.value)}
                  value={state_of_origin}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Local Government</label>
                <input
                  type="text"
                  onChange={(e) => setLocal_Govt(e.target.value)}
                  value={local_govt}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Permanent Address</label>
                <input
                  type="address"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Phone Number</label>
                <input
                  type="tel"
                  onChange={(e) =>
                    setPhone_no_1(e.currentTarget.value.slice(0, 11))
                  }
                  value={phone_no_1}
                  // required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Phone Number 2</label>
                <input
                  type="tel"
                  onChange={(e) => setPhone_no_2(e.target.value.slice(0, 11))}
                  value={phone_no_2}
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
              {/* <div className={styles.toggleBtnContainer}>
                <div className={styles.toggleBtn} onChange={handleClick}>
                  <input
                    type="checkbox"
                    value={isActive}
                    disable={isActive ? "false" : "true"}
                  />
                  <span className={styles.toggleRound}>Publish Bio-Data</span>
                </div>
              </div> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BioData;
