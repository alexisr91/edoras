import React from 'react'
import styles from './movies.module.css'



export default function Movies(props) {
  const {data} = props

  return (
    <div className={styles.movieDashboard}>
        {data.docs.map((movie,index) => {

          const keys = Object.keys(movie).filter(element => {
            if( element == 'name' || element == '_id'){
              return false
            }
              return true
          })
          
          return(
            <div key={index}>
              <h2>{movie.name}</h2>
              {keys.map(title => {
                return(
                <div key ={title} className={styles.keyVal}>
                  <p>{title}: {movie[title]}</p>
                </div>
                ) 
              })}
            </div>
          )
        })}

    </div>
  )
}
