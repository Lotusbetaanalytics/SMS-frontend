import React, { useEffect, useState } from "react";
import Sidebar from "../../../components/Sidebar";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { getScope } from "../../../redux/action/getScopeAction";
// import { postInformation } from "../../../redux/action/noticeBoardAction";
import { useDispatch, useSelector } from "react-redux";
// import { useToast } from "@chakra-ui/react";
import axios from "axios";

function Information() {
  const dispatch = useDispatch();
  // const toast = useToast();

  const [infoTitle, setInfoTitle] = useState("");
  const [scopeDetail, setScopeDetail] = useState("");
  // const [uploadImage, setUploadImage] = useState({ myFile: "" });
  const [infoMessage, setInfoMessage] = useState("");
  const [uploadFile, setUploadFile] = useState([]);
  const [informationImage, setInformationImage] = useState([]);

  // const [isFilePicked, setIsFilePicked] = useState(false);
  // const [type, setType] = useState("text");

  // const createImage = (title, body, images, scope) =>
  //   axios.post(url, title, body, images, scope);

  // const createPost = async (post) => {
  //   try {
  //     await createImage(post);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("images", uploadFile);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    const url = "/information/information/";
    axios
      .post(url, formData, config)
      .then((response) => {
        alert("Form Uploaded Successfully!!");
      })
      .catch((err) => {
        console.log("err", err);
      });
    // createPost(infoTitle, infoMessage, uploadImage, scopeDetail);

    // const informationData = {
    //   title: infoTitle,
    //   body: infoMessage,
    //   images: uploadImage,
    //   scope: scopeDetail,
    // };
    // dispatch(postInformation(informationData, toast));
    // console.log(informationData);
  };

  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    setInformationImage([...informationImage, file]);
    setUploadFile([...file, informationImage]);

    // setFile(e.target.files[0]);
  };
  console.log(uploadFile);

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);
  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };
  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  // const onChangeHandler = async (e) => {
  //   const file = e.target.files[0];
  //   const base64 = await convertToBase64(file);
  //   setUploadImage({ ...uploadImage, myFile: base64 });
  // };

  // const reader = new FileReader();

  useEffect(() => {
    dispatch(getScope());
  }, [dispatch]);

  const scopeId = useSelector((state) => state.scopeId);
  const { getScopeId } = scopeId;

  return (
    <div className={styles.informationContainer}>
      <Sidebar />
      <Header />
      <div className={styles.noticeBoard}>
        <div className={styles.noticeBoardTitle}>
          <span>Information Board</span>
        </div>

        <div className={styles.noticeBoardContent}>
          <form onSubmit={submitHandler}>
            <div className={styles.noticeBoardForm}>
              <input
                type="text"
                onChange={(e) => setInfoTitle(e.target.value)}
                value={infoTitle}
                placeholder="Information Title"
                required={true}
              />

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

              {/* <input
                type="file"
                value={uploadImage}
                onChange={(e) => {
                  reader.readAsDataURL(e.target.files[0]);
                  reader.onload = function () {
                    console.log(reader.result);
                    localStorage.setItem(
                      "noticeInfo",
                      JSON.stringify(reader.result)
                    );
                  };
                  reader.onerror = function (error) {
                    console.log("Error: ", error);
                  };
                }}
                placeholder="Upload Image"
                // required={true}
              /> */}

              <input
                type="file"
                // value={uploadImage}
                onChange={(e) => onChangeHandler(e)}
                name="images"
                // accept=".jpeg, .png, .jpg"
              />

              <textarea
                type="text"
                onChange={(e) => setInfoMessage(e.target.value)}
                value={infoMessage}
                placeholder="Post Message"
                required={true}
                className={styles.noticeMessage}
              />
            </div>
            <div className={styles.noticeBtn}>
              <button type="submit" className={styles.stBtn}>
                Post Information
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Information;
