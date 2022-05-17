import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./styles.module.css"

function EditNavbar(props) {
  return <div className={styles.navbar}>
         <ul>
             <li className={props.basic}><Link to= "/student/profile/basicInfo" > Basic Information</Link>  </li>
             <li className={props.emergency} ><Link to="/student/profile/biodata" > Bio Data</Link> </li>
             <li className={props.official}> <Link to="/student/profile/academyhistory" >Academy History</Link></li>
             <li className={props.account}><Link to="/student/profile/healthdata"> Health Data </Link></li>
             <li className={props.photo}><Link to="/student/profile/familydata" >Family Data</Link></li>
         </ul>
        </div>;
}

export default EditNavbar;
