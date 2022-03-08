import React from "react";
import styles from "./styles.module.css";

function Search({ type, onChange, value, placeholder, name, icon }) {
  return (
    <div className={styles.searchContainer}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        required={true}
        icon={icon}
      />
    </div>
  );
}

export default Search;
