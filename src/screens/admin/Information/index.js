import React, { useEffect, useState } from "react";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { getScope } from "../../../redux/action/getScopeAction";
import { useDispatch, useSelector } from "react-redux";
// import { useToast } from "@chakra-ui/react";
// import axios from "axios";
import SidebarNav from "../../../components/SidebarNav";
import { Link } from "react-router-dom";
import { postInformation } from "../../../redux/action/noticeBoardAction";
import { useToast } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";

function Information() {
  const dispatch = useDispatch();
  // const toast = useToast();

  const [infoTitle, setInfoTitle] = useState("");
  const [scopeDetail, setScopeDetail] = useState("");
  const [infoMessage, setInfoMessage] = useState("");
  // const [uploadFile, setUploadFile] = useState([]);
  // const [image, setImage] = useState([]);
  // const [fileUpload, setFileUpload] = useState([]);

  const reader = new FileReader();
  const toast = useToast();

  const submitHandler = async (e) => {
    e.preventDefault();
    // console.log(image);
    // const images = { image };
    const formData = new FormData();
    formData.append("title", infoTitle);
    formData.append("body", infoMessage);
    // formData.append("images", image);
    formData.append("scope", scopeDetail);
    // console.log(images);

    dispatch(postInformation(formData, toast));

    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    // console.log(userInfo);
    // const accessToken = userInfo.access;
    // console.log(accessToken);

    // try {
    //   const res = await axios.post(
    //     "/information/information/",
    //     { ...formData },
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         Authorization: `Bearer ${accessToken}`,
    //       },
    //     }
    //   );
    //   console.log(res.data);
    // } catch (err) {
    //   console.log(err);
    // }

    const informationData = {
      information: {
        title: infoTitle,
        body: infoMessage,
        scope: scopeDetail,
      },

      // images: uploadFile,
    };
    console.log(informationData);
  };

  const postInfo = useSelector((state) => state.postInfo);
  const { loading } = postInfo;

  // const onChangeHandler = (e) => {
  //   reader.readAsBinaryString(e.target.files[0]);
  //   reader.onload = () => {
  //     setImage([...image, reader.result]);

  //   };
  // };

  useEffect(() => {
    dispatch(getScope());
  }, [dispatch]);

  const scopeId = useSelector((state) => state.scopeId);
  const { getScopeId } = scopeId;

  return (
    <div className={styles.informationContainer}>
      <SidebarNav />
      <Header />
      <div className={styles.noticeBoard}>
        <Link to="/informationimage">
          <div className={styles.noticeBoardTitle}>
            <span>View Information Image</span>
          </div>
        </Link>

        <div className={styles.noticeBoardContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.noticeBoardForm}>
              <div className={styles.newForm}>
                <label>Information Title</label>
                <input
                  type="text"
                  onChange={(e) => setInfoTitle(e.target.value)}
                  value={infoTitle}
                  required={true}
                />
              </div>

              <div className={styles.newForm}>
                <label>Scope</label>
                <select
                  onChange={(e) => setScopeDetail(e.target.value)}
                  value={scopeDetail}
                  required={true}
                  className={styles.noticeBoardSelect}
                >
                  <option>Scope..</option>
                  {getScopeId &&
                    getScopeId.map((item, i) => (
                      <option key={i} value={item.id}>
                        {item.description}
                      </option>
                    ))}
                </select>
              </div>

              {/* <div className={styles.newForm}>
                <label>Image</label>
                <input
                  type="file"
                  onChange={(e) => onChangeHandler(e)}
                  name="images"
                />
              </div> */}

              <div className={styles.newForm}>
                <label>Post Message</label>
                <textarea
                  type="text"
                  onChange={(e) => setInfoMessage(e.target.value)}
                  value={infoMessage}
                  placeholder="Post Message"
                  required={true}
                  className={styles.noticeMessage}
                />
              </div>
            </div>
            <div className={styles.noticeBtn}>
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
                  Post Information
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Information;
