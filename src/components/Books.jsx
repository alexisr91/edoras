import React from 'react'
import styles from './movies.module.css'

export default function Books(props) {
  const {data} = props
  return (
    <div className={styles.movieDashboard}>
      {data.docs.map((book, index ) => {
        // render the datas API info
        return (
          <div key ={index}>
            <h2>{index + 1}: {book.name}</h2>
          </div>
        )
      })}
    </div>
  )
}
