import { Button, Table, Th, Tr,Tbody, Td} from '@chakra-ui/react'
import { CircularProgress } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import LecturerHeader from '../../../components/lecturerHeader'
import LectureSidebar from '../../../components/lecturerSidebar'
import { getNoticeAction, lecturerDeleteNoticeAction} from '../../../redux/Actions/lecturer/lecturerNotice'
import tableData from '../Assesement/tableData'
import styles from "./styles.module.css"
const NoticeBank = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [editSuccessMsg,setEditsuccessMsg] = useState(false)
    const [deleteSuccessMsg,setDeletesuccessMsg] = useState(false)

    const questionBank = () => {
        navigate("/lecturer/notification")
    }
    const deleteHandler = (id) => {
        dispatch(lecturerDeleteNoticeAction(id))
    } 

    const editHandler = (id) =>{
        navigate(`/lecturer/notification/${id}`)
        console.log(id)
    } 



    const lecturerDeleteNotice = useSelector((state) => state.lecturerDeleteNotice);
    const { loading:deleteLoading, success:deleteSuccess, } = lecturerDeleteNotice;

    


     const userEmail = JSON.parse(localStorage.getItem("lecturerDetails"));
    const lecturerEmail = userEmail && userEmail.email
    console.log(lecturerEmail)

    useEffect(()=>{
        dispatch(getNoticeAction(lecturerEmail))
      },[dispatch])
  
      const lecturerGetNotice = useSelector((state) => state.lecturerGetNotice);
    const { loading, success,error,getNotice } = lecturerGetNotice;

   

  return (
    <div className="page_container">
    <LectureSidebar notification={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment History"} />
      {loading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
        {deleteLoading && (
              <CircularProgress isIndeterminate color='green.300' />
        )}
        {editSuccessMsg && (
              <div> Notice Deleted successfully </div>
        )}
         {deleteSuccessMsg && (
              <div> Notice Deleted successfully </div>
        )}
      <div className={styles.dropDown}>
                <div className={styles.dropDown_container}>
                    <button className={styles.blue} onClick={questionBank}>Create Notification</button>
                </div>
       </div>
      <div className={styles.white_container}>
       <Table varient="striped" colorScheme="gray" size="md">
            <Tr>
              <Th>Title</Th>
              <Th>Message</Th>
              <Th>Time Created</Th>
              <Th>Action</Th>
              <Th>Action</Th>
            </Tr>
            {getNotice &&
              getNotice.map((item) => (
                <Tbody>
                  <Tr key={item.id}>
                  <Td>{item.title}</Td>
                    <Td>{item.message}</Td>
                    <Td>{item.timestamp}</Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="whatsapp"
                        borderRadius="10"
                        width={"full"}
                        size="sm"
                        key={item._id}
                        onClick={() => editHandler(item.id)}
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="red"
                        borderRadius="10"
                        size="sm"
                        key={item._id}
                        onClick={() => deleteHandler(item.id)}
                      >
                        Delete
                      </Button>
                    </Td>
                    </Tr>
                </Tbody>
              ))}
          </Table>
        </div>
      </div>
      </div>
  )
}

export default NoticeBank