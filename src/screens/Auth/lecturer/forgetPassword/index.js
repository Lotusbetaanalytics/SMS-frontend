import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Input from '../../../../components/Input'
import styles from "../styles.module.css"
import girl from "../../../../assets/Ellipse 44bc.png"
import { Link } from 'react-router-dom'
const LecturerForgetPassword = () => {
    const [email, setEmail] = useState("");
    const loading = false 
  return (
    <div className={styles.page_Container}>
        <div className={styles.left}>
            <div className={styles.header}>
            <h1>Reset Password</h1>
            <p>Let's help you recover you password</p>
            </div>
           
            <div className={styles.center_div}> 
            <form  >
          <Input
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
         
          {loading ? (
              <Button
              isLoading
              loadingText="Validating Credentials..."
              colorScheme="teal"
              variant="outline"
              isFullWidth
              style={{ height: "5rem" }}
            />):(
              <button type="submit"  className={styles.blue_}>
                Login
              </button>
            )}
          </form>
          <Link to="/lecturer/login"><p>Remember password ?</p></Link>
            </div>
        </div>
        <div className={styles.right}>

            <div className={styles.imageContainer}><img src={girl} alt="girl" /></div>
        </div>
    </div>
  )
}

export default LecturerForgetPassword