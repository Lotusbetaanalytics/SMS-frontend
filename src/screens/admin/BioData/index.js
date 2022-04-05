import React, { useState } from "react";
import data from "../../../data";
import styles from "./styles.module.css";

function BioData({ allUserData, setAllUserData }) {
  const [type, setType] = useState("text");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  const countryData = data;

  return (
    <div className={styles.bioDataContainer}>
      {/* <Sidebar />
      <Header /> */}
      <div className={styles.bioData}>
        {/* <div className={styles.bioDataTitle}>
          <span>Create BioData</span>
        </div> */}
        <div className={styles.bioDataContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.bioDataForm}>
              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, user: e.target.value })
                }
                value={allUserData.user}
                placeholder="User"
                required={true}
              />
              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, gender: e.target.value })
                }
                value={allUserData.gender}
                required={true}
                className={styles.bioDataSelect}
              >
                <option>Gender..</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    maritalStatus: e.target.value,
                  })
                }
                value={allUserData.maritalStatus}
                required={true}
                className={styles.bioDataSelect}
              >
                <option>Marital Status..</option>
                <option>Single</option>
                <option>Married</option>
                <option>Divorced</option>
                <option>Other</option>
              </select>

              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, religion: e.target.value })
                }
                value={allUserData.religion}
                required={true}
                className={styles.bioDataSelect}
              >
                <option>Religion..</option>
                <option>Christian</option>
                <option>Muslim</option>
                <option>Other</option>
              </select>

              <input
                type={type}
                onChange={(e) =>
                  setAllUserData({ ...allUserData, birthday: e.target.value })
                }
                value={allUserData.birthday}
                placeholder="Date of Birth"
                required={true}
                onFocus={() => setType("date")}
                onBlur={() => setType("text")}
              />

              <select
                onChange={(e) =>
                  setAllUserData({ ...allUserData, country: e.target.value })
                }
                value={allUserData.country}
                required={true}
                className={styles.bioDataSelect}
              >
                <option>Select Country...</option>
                {countryData &&
                  countryData.map((item, i) => (
                    <option key={i} value={item.id}>
                      {item.label}
                    </option>
                  ))}
              </select>

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    stateOfOrigin: e.target.value,
                  })
                }
                value={allUserData.stateOfOrigin}
                placeholder="State of Origin"
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    localGovenrment: e.target.value,
                  })
                }
                value={allUserData.localGovenrment}
                placeholder="Local Government"
                required={true}
              />
              <input
                type="address"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, address: e.target.value })
                }
                value={allUserData.address}
                placeholder="Permanent Address"
                required={true}
              />
              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, phoneNo1: e.target.value })
                }
                value={allUserData.phoneNo1}
                placeholder="Phone Number"
                required={true}
              />
              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, phoneNo2: e.target.value })
                }
                value={allUserData.phoneNo2}
                placeholder="Phone Number 2"
                required={true}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default BioData;
