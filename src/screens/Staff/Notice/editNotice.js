import { CircularProgress,useToast } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from "./styles.module.css"
import { getNoticeByIdAction, lecturerEditNoticeAction, lecturerGetScopeAction, lecturerPostNoticeAction } from '../../../redux/Actions/lecturer/lecturerNotice';
import LecturerHeader from '../../../components/lecturerHeader';
import LectureSidebar from '../../../components/lecturerSidebar';
import Input from '../../../components/Input';
import { EDIT_NOTICE_RESET, POST_NOTICE_RESET } from '../../../redux/Constants/lecturer/notice';


const LecturerEditNotice = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const toast = useToast();
    const [title,setTitle] = useState("");
    const [message,setMessage] = useState("");
    const [msg,setMsg] = useState("")

    useEffect(()=>{
      dispatch(lecturerGetScopeAction())
    },[dispatch])

    const { id } = useParams();

    useEffect(()=>{
        dispatch(getNoticeByIdAction(id))
      },[dispatch])

   
  const lecturerGetScope = useSelector((state) => state.lecturerGetScope);
  const { loading:isLoading,error:isError,getScope } = lecturerGetScope;

  const scoreDescription = getScope && getScope.results && getScope.results[2].description 
  console.log(scoreDescription);

  const scope = getScope && getScope.results && getScope.results[2].id
  console.log(scope)

  const lecturerEditNotice = useSelector((state) => state.lecturerEditNotice);
    const { loading,error,success, } = lecturerEditNotice;

  const lecturerGetNoticeById = useSelector((state) => state.lecturerGetNoticeById);
    const { getNoticeById,success:getByidSuccess } = lecturerGetNoticeById;

    useEffect(()=>{
        if (getByidSuccess)
        setTitle(getNoticeById && getNoticeById.title)
        setMessage(getNoticeById && getNoticeById.message) 
      },[getByidSuccess,getNoticeById])

      const userEmail = JSON.parse(localStorage.getItem("lecturerDetails"));
      const source = userEmail&&userEmail.id
        console.log(source)

    const submitHandler = (e) => {
        e.preventDefault();

        const noticeData = {
          title: title,
          message: message,
          source:source,
          scope: scope,
         
        };
        if (!message || !title || !scope  ) {
            setMsg(true)
          } else {
        dispatch(lecturerEditNoticeAction(noticeData,id));
          }
        }

    if (success) {
        setTitle("")
        setMessage("")
      toast ({
        title: "Success",
        description: success,
        status: "success",
        duration: 9000,
        isClosable: true,
      })
      dispatch({ type: EDIT_NOTICE_RESET });
    }
    if (error) {
      toast ({
        title: "Error",
        description: error,
        status: "error",
        duration: 9000,
        isClosable: true,
      })
     
    }
    const questionBank = () => {
        navigate("/lecturer/notification/history")
    }
    const createTestHandler = () => {
        navigate("/lecturer/notification")
    }
  

  return (
    <div className="page_container">
        <LectureSidebar notification={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment"} />
       {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
        {msg && 
        <div>All notification fields are required</div>}
        {/* {isLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )} */}
        {/* {msg && (
              <div> all field are required </div>
        )}  */}
      <div className={styles.info_container}>
        <div className={styles.left}>
          <button className={styles.green} onClick={questionBank}>History</button>
          <button className={styles.blue} onClick={createTestHandler}>Create Notification</button>
          </div>
       
        <div className={styles.right}>
        <div className={styles.editContainer}>
                <h1>Notification</h1>     
                <div className={styles.editinfo}>
                  <Input
                    label={"Notice Scope"}
                    type="type"
                    value={scoreDescription}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
                
                <div className={styles.editinfo}>
                  <Input
                    label={"Title"}
                    type="type"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

               
                
                <div className={styles.editinfo}>
                    <label>Message</label>
                  <textarea
                    
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
               
                
                <div className={styles.editinfo}>
                <div className={styles.btn_container}>
                    <button className={styles.blue} onClick={submitHandler}>Create</button>
                </div>
                </div>
               
         </div>
        </div>
        </div>
      </div>
      </div>
  )
}

export default LecturerEditNotice;