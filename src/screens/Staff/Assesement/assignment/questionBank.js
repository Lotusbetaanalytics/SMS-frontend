import { Button, Table, Th, Tr,Tbody, Td} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LecturerHeader from '../../../../components/lecturerHeader'
import LectureSidebar from '../../../../components/lecturerSidebar'
import tableData from '../tableData'
import styles from "./styles.module.css"
const AssignmentQuestionBank = () => {
    const navigate = useNavigate();
    const questionBank = () => {
        navigate("/lecturer/assessment/assignment")
    }
    const deleteHandler = (id) =>{
        console.log(id)
    } 
  return (
    <div className="page_container">
    <LectureSidebar assessment={"focus"} />
    <div className="right_container2">
      <LecturerHeader title={"Assignment History"} />
      <div className={styles.dropDown}>
                <div>
                  <select>
                    <option>Assignments</option>
                    <option value="Yes">GTC204</option>
                    <option value="No">GTC399</option>
                  </select>
                </div>
                <div className={styles.dropDown_container}>
                    <button className={styles.blue} onClick={questionBank}>Create Question</button>
                </div>
       </div>
      <div className={styles.white_container}>
       <Table varient="striped" colorScheme="gray" size="md">
            <Tr>
              <Th>Title</Th>
              <Th>Question</Th>
              <Th>Assignment_Deadline</Th>
              <Th>Action</Th>
              <Th>Action</Th>
            </Tr>
            {tableData &&
              tableData.map((item) => (
                <Tbody>
                  <Tr key={item.id}>
                  <Td>{item.title}</Td>
                    <Td>{item.question}</Td>
                    <Td>{item.deadline}</Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="green"
                        borderRadius="10"
                        width={"full"}
                        size="sm"
                        key={item._id}
                        onClick={() => deleteHandler(item.id)}
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

export default AssignmentQuestionBank