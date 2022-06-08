import { Button, Table, Th, Tr,Tbody, Td} from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import LecturerHeader from '../../../../components/lecturerHeader'
import LectureSidebar from '../../../../components/lecturerSidebar'
import styles from "../assignment/styles.module.css"
import tableData2 from "../../Assesement/tabledata2"
const TestqustionBank = () => {
    const navigate = useNavigate();
    const questionBank = () => {
        navigate("/lecturer/assessment/test/")
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
       <Table varient="striped" colorScheme="gray" size="md" maxWidth={"100"}>
            <Tr maxWidth={"100"}>
              <Th>Course_Title</Th>
              <Th>Course_Code</Th>
              <Th>Test_Description</Th>
              <Th>Test_Question</Th>
              <Th>Options_one</Th>
              <Th>Options_two</Th>
              <Th>Options_three</Th>
              <Th>Options_four</Th>
              
              <Th>Correct_Answer</Th>
              <Th>Deadline</Th>
              <Th>Action</Th>
              <Th>Action</Th>
            </Tr>
            {tableData2 &&
              tableData2.map((item) => (
                <Tbody maxWidth={"100"}>
                  <Tr key={item.id}>
                  <Td>{item.course_title}</Td>
                  <Td>{item.course_code}</Td>
                  <Td>{item.test_description}</Td>
                  <Td>{item.question}</Td>
                  {item.options.map((item)=>(
                     <Td>{item.option}</Td> 
                  ))}

                   
                    <Td>{item.correct_answer}</Td>
                    <Td>{item.deadline}</Td>
                    <Td>
                    <Button
                        className="chakar_btn"
                        colorScheme="green"
                        borderRadius="10"
                        width={"full"}
                        size="sm"
                        key={item.id}
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
                        key={item.id}
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

export default TestqustionBank