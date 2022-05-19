import React, { useState } from 'react'
import styles from './styles.module.css'
import { AiOutlineSearch } from 'react-icons/ai'

const SearchWidget = ({ title }) => {
  const [search, setSearch] = useState("")
  return (
    <div className={styles.pageTitle}>
      <div className={styles.search}>
      <AiOutlineSearch />
        <input type="text" placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
        
      </div>
    </div>
  )
}

export default SearchWidget