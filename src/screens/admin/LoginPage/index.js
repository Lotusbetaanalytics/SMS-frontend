import React, { useState } from "react";
import Circle from "../../../components/Circle";
import Input from "../../../components/Input";
import styles from "./styles.module.css";

function LoginPage() {

  const [name,setName] = useState("")
  return <div className={styles.pageContainer}>
      <div className={styles.topCircle}>
      <Circle/> 
      </div>
      <Input
      type={"text"}
      placeholder={"Name"}
      onChange={(e) => setName(e.target.value)}
      value={name}
      />
    <div className={styles.downCircle}>
    <Circle/>
    </div>

    </div>;
}

export default LoginPage;
