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
              {/* <input
                type="text"
                onChange={(e) =>
                  setAllUserData({ ...allUserData, user: e.target.value })
                }
                value={allUserData.user}
                placeholder="User"
                required={true}
              /> */}
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
                    marital_status: e.target.value,
                  })
                }
                value={allUserData.marital_status}
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
                <option>Christianity</option>
                <option>Islam</option>
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
                  setAllUserData({
                    ...allUserData,
                    nationality: e.target.value,
                  })
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
                    state_of_origin: e.target.value,
                  })
                }
                value={allUserData.state_of_origin}
                placeholder="State of Origin"
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    local_govt: e.target.value,
                  })
                }
                value={allUserData.local_govt}
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
                  setAllUserData({
                    ...allUserData,
                    phone_no_1: e.currentTarget.value.slice(0, 11),
                  })
                }
                value={allUserData.phone_no_1}
                placeholder="Phone Number"
                required={true}
              />
              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    phone_no_2: e.target.value.slice(0, 11),
                  })
                }
                value={allUserData.phone_no_2}
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
