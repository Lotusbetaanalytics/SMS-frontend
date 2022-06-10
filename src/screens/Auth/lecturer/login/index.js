import { Alert, Button, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Input from '../../../../components/Input'
import styles from "../styles.module.css"
import girl from "../../../../assets/Ellipse 44bc.png"
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { lecturerLoginAction } from '../../../../redux/Actions/auth'
const LecturerLogin = () => {
    const dispatch = useDispatch()
  const navigate = useNavigate()
  const toast = useToast();
  const [msg,setMsg] = useState("");
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    

    const submitHandler = (e) => {
      e.preventDefault();
      if (!email || !password) {
        setMsg(true)
      } else {
        dispatch(lecturerLoginAction(email,password))
        
      }
    }
    const lecturerLogin = useSelector((state) => state.lecturerLogin);
    const {loading,error,userInfo} = lecturerLogin
    
    if (error) {
        toast ({
          title: "Error",
          description: error,
          status: "error",
          duration: 9000,
          isClosable: true,
        })
      }

    useEffect(()=>{
        if (userInfo){
          navigate("/lecturer/dashboard")
        }

      },[userInfo,navigate,dispatch])
   
  return (
    <div className={styles.page_Container}>
        {msg && (
        <Alert status="warning">
           Input your email and password
        </Alert>
      )}
        <div className={styles.left}>
            <div className={styles.header}>
            <h1>Welcome Back !</h1>
            <p>Its nice seeing you</p>
            </div>
           
            <div className={styles.center_div}> 
        <form >
          <Input
          type={"email"}
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          />
          <Input
          type={"password"}
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          value={password}
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
              <button type="submit" onClick={submitHandler}   className={styles.blue_}>
                Login
              </button>
            )}
          </form>
         <Link to="/lecturer/forgetpassword"><p>Forget password ?</p></Link>
            </div>
        </div>
        <div className={styles.right}>

            <div className={styles.imageContainer}><img src={girl} alt="girl" /></div>
        </div>
    </div>
  )
}

export default LecturerLogin