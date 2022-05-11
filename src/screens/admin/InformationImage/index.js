import React, { useState } from "react";
import SidebarNav from "../../../components/SidebarNav";
import Header from "../../../components/Header";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { informationImage } from "../../../redux/action/noticeBoardAction";
import { Button } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

export const InformationImage = () => {
  const [information, setInformation] = useState("");
  const [images, setImages] = useState(null);
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  let { id } = useParams();
  console.log(id);

  // useEffect(() => {
  //   dispatch(postimage(id, formData))
  // })

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id", id);
    // formData.append("information", information);
    formData.append("image", images);
    formData.append("description", description);
    dispatch(informationImage(formData));
    console.log(formData);
  };
  const onChangeHandler = (e) => {
    const file = e.target.files[0];
    setImages(file);
  };
  const postImageInfo = useSelector((state) => state.postImageInfo);
  const { loading } = postImageInfo;

  return (
    <div>
      <div>
        <div className={styles.informationContainer}>
          <SidebarNav />
          <Header />
          <div className={styles.noticeBoard}>
            <div className={styles.noticeBoardTitle}>
              <span>Information Board</span>
            </div>

            <div className={styles.noticeBoardContent}>
              <form onSubmit={submitHandler}>
                <div className={styles.noticeBoardForm}>
                  {/* <div className={styles.newForm}>
                    <label>Information ID</label>
                    <select
                      onChange={(e) => setInformation(e.target.value)}
                      value={information}
                      required={true}
                      className={styles.noticeBoardSelect}
                    >
                      <option>2</option>
                      <option></option>
                    </select>
                  </div> */}

                  <div className={styles.newForm}>
                    <label>Image</label>
                    <input
                      type="file"
                      onChange={(e) => onChangeHandler(e)}
                      name="images"
                    />
                  </div>

                  <div className={styles.newForm}>
                    <label>Description</label>
                    <textarea
                      type="text"
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      placeholder="Description"
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
      </div>
    </div>
  );
};
