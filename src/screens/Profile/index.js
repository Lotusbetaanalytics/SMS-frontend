import React, { useState } from "react";
import HeaderNav from "../../components/HeaderNav";
import Sidebar from "../../components/Sidebar";
import personlog from "../../assets/personlog.png";
import styles from "./styles.module.css";
import { BsFillCameraFill } from "react-icons/bs";
import { BiArrowBack } from "react-icons/bi";
import data from "../../data";
// import { Link } from "react-router-dom";
import { postUsersData } from "../../redux/action/userProfileDataAction";
import { useDispatch, useSelector } from "react-redux";
import { Button, Center, CircularProgress, useToast } from "@chakra-ui/react";
import { USERS_DATA_RESET } from "../../redux/constants/userProfileDataConstant";
import { Link, useNavigate } from "react-router-dom";

function Profile() {
  const [gender, setGender] = useState("");
  const [marital_status, setMarital_status] = useState("");
  const [religion, setReligion] = useState("");
  const [birthday, setBirthday] = useState("");
  const [nationality, setNationality] = useState("");
  const [state_of_origin, setState_of_origin] = useState("");
  const [local_govt, setLocal_govt] = useState("");
  const [permanent_address, setPermanent_address] = useState("");
  const [address, setAddress] = useState("");
  const [phone_no_1, setPhone_no_1] = useState("");
  const [phone_no_2, setPhone_no_2] = useState("");
  // const [cancel, setCancel] = useState(false);
  const [type, setType] = useState("text");

  const countryData = data;

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

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
    dispatch(postUsersData(biodata));
    console.log(biodata);
  };

  const postBioDataInfo = useSelector((state) => state.postBioDataInfo);
  const { loading, success, error } = postBioDataInfo;

  if (success) {
    toast({
      title: "Notification",
      description: "Profile Created Successfully",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: USERS_DATA_RESET });
  }

  if (error) {
    toast({
      title: "Notification",
      description: "Invalid Credentials",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
    dispatch({ type: USERS_DATA_RESET });
  }

  const cancelHandler = () => {
    navigate("/admin/dashboard");
  };

  return (
    <div className={styles.profileContainer}>
      <Sidebar />
      <div className={styles.profile}>
        <HeaderNav title="Profile" />

        <div className={styles.profileBox}>
          <div className={styles.profileHeader}>
            <div className={styles.cameraButton}>
              <img src={personlog} alt="" />
              <BsFillCameraFill />
              <div className={styles.titleProfile}>
                <p>Bio Data</p>
              </div>
            </div>
            <div className={styles.profileContent}>
              <div className={styles.submitButton}>
                <button
                  type="button"
                  className={styles.cancelButton}
                  onClick={cancelHandler}
                >
                  <BiArrowBack />
                  Cancel
                </button>

                {loading ? (
                  <Button
                    isLoading
                    loadingText="Validating Credentials..."
                    colorScheme="whatsapp"
                    variant="outline"
                    isfullWidth
                    style={{ height: "5rem" }}
                  />
                ) : (
                  <button
                    type="submit"
                    className={styles.subButton}
                    onClick={submitHandler}
                  >
                    Submit
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className={styles.inputContainer}>
            {loading ? (
              <Center>
                <CircularProgress isIndeterminate color="purple.500" />
              </Center>
            ) : (
              <div className={styles.inputField}>
                <div className={styles.inputBox}>
                  <label>Marital Status</label>
                  <select
                    value={marital_status}
                    onChange={(e) => setMarital_status(e.target.value)}
                    required={true}
                  >
                    <option></option>
                    <option>Single</option>
                    <option>Married</option>
                    <option>Divorced</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.inputBox}>
                  <label>Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    required={true}
                  >
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className={styles.inputBox}>
                  <label>Religion</label>
                  <select
                    value={religion}
                    onChange={(e) => setReligion(e.target.value)}
                    required={true}
                  >
                    <option></option>
                    <option>Christianity</option>
                    <option>Islam</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className={styles.inputBox}>
                  <label>Date of Birth</label>
                  <input
                    type={type}
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                    required={true}
                    onFocus={() => setType("date")}
                    onBlur={() => setType("text")}
                  />
                </div>

                <div className={styles.inputBox}>
                  <label>Select Country</label>
                  <select
                    onChange={(e) => setNationality(e.target.value)}
                    value={nationality}
                    required={true}
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

                <div className={styles.inputBox}>
                  <label>State Of Origin</label>
                  <input
                    type="text"
                    value={state_of_origin}
                    onChange={(e) => setState_of_origin(e.target.value)}
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Local Government</label>
                  <input
                    type="text"
                    value={local_govt}
                    onChange={(e) => setLocal_govt(e.target.value)}
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Permanent Address</label>
                  <input
                    type="text"
                    value={permanent_address}
                    onChange={(e) => setPermanent_address(e.target.value)}
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Address</label>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Phone No. 1</label>
                  <input
                    type="tel"
                    value={phone_no_1}
                    onChange={(e) =>
                      setPhone_no_1(e.currentTarget.value.slice(0, 11))
                    }
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <label>Phone No. 2</label>
                  <input
                    type="tel"
                    value={phone_no_2}
                    onChange={(e) =>
                      setPhone_no_2(e.currentTarget.value.slice(0, 11))
                    }
                    required={true}
                  />
                </div>
                <div className={styles.inputBox}>
                  <button>
                    <Link to="/admin/healthdata">
                      <p>Next</p>
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
