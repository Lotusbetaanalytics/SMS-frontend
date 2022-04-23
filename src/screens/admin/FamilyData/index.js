import React, { useState } from "react";
// import Sidebar from "../../../components/Sidebar";
// import Header from "../../../components/Header";
import styles from "./styles.module.css";

function FamilyData({ allUserData, setAllUserData }) {
  const submitHandler = () => {};

  return (
    <div className={styles.familyDataContainer}>
      {/* <Sidebar />
      <Header /> */}

      <div className={styles.familyData}>
        {/* <div className={styles.familyDataTitle}>
          <span>Create Family Data</span>
        </div> */}

        <div className={styles.familyDataContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.familyDataForm}>
              {/* <select
                onChange={(e) => setUserBioData(e.target.value)}
                value={userBioData}
                required={true}
                className={styles.familyDataSelect}
              >
                <option>Bio Data..</option>
                <option>1</option>
              </select> */}

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    next_of_kin_full_name: e.target.value,
                  })
                }
                value={allUserData.next_of_kin_full_name}
                placeholder="Next of Kin Full Name"
                required={true}
              />

              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    next_of_kin_phone_no_1: e.currentTarget.value.slice(0, 11),
                  })
                }
                value={allUserData.next_of_kin_phone_no_1}
                placeholder="Next of Kin Phone Number"
                required={true}
              />

              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    next_of_kin_phone_no_2: e.currentTarget.value.slice(0, 11),
                  })
                }
                value={allUserData.next_of_kin_phone_no_2}
                placeholder="Next of Kin Phone Number 2"
                required={true}
              />

              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    next_of_kin_address: e.target.value,
                  })
                }
                value={allUserData.next_of_kin_address}
                placeholder="Next of Kin Address"
                required={true}
              />
              <input
                type="text"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    guardian_full_name: e.target.value,
                  })
                }
                value={allUserData.guardian_full_name}
                placeholder="Guardian Full Name"
                required={true}
              />
              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    guardian_phone_no_1: e.currentTarget.value.slice(0, 11),
                  })
                }
                value={allUserData.guardian_phone_no_1}
                placeholder="Guardian Phone Number"
                required={true}
              />

              <input
                type="tel"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    guardian_phone_no_2: e.currentTarget.value.slice(0, 11),
                  })
                }
                value={allUserData.guardian_phone_no_2}
                placeholder="Guardian Phone Number 2"
                required={true}
              />

              <input
                type="address"
                onChange={(e) =>
                  setAllUserData({
                    ...allUserData,
                    guardian_address: e.target.value,
                  })
                }
                value={allUserData.guardian_address}
                placeholder="Guardian Address"
                required={true}
              />
            </div>

            {/* <button type="submit" className={styles.stBtn}>
              Submit
            </button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default FamilyData;
