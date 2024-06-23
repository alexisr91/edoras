import React, {useState, useEffect} from 'react'
import useFetchData from '../hooks/useFetchData'
import styles from './dashboard.module.css'
import Options from './Options'
import Books from './Books'
import Movies from './Movies'
import Characters from './Characters'
import Loading from './Loading'

// Composants
export default function Dashboard() {

    // Define the use state, 1st argument is the name of the state, the 2nd is the set for the variable 
    const [selection,setSelection] = useState(null) // default value at false
    const {data,loading, error} = useFetchData(selection)

  const questions = [
    'character',
    'movie',
    'book',
  ]
    // Event Handler
    function handleClick(clickedButton){
      return () => {
        setSelection(clickedButton)
      }
    }
    console.log('I\'m selecting', selection)

    const dataRender = {
      // Don't forget to import our variables 
      'book': <Books data = {data}/>, 
      'character': <Characters data={data}/>, 
      'movie': <Movies data = {data}/>, 
    }

  
  return (
    <div className={styles.dashboard}>
        <div className={styles.layout}>
            <h1>SONS OF EDORAS</h1>
            <Options selection={selection} setSelection=
            {handleClick} />
            {loading && (
                <Loading />
            )}
           {(data && !loading) && (
              dataRender[selection]
            )}
        </div>
    </div>
  )
}
