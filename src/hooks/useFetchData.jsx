import React, {useState, useEffect} from 'react'


export default function Dashboard(selection) {
    const [data,setData] = useState(null)
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(null)

    // API THE ONE LOTR
    const apiURL = 'https://the-one-api.dev/v2'
    const APITOKEN = import.meta.env.VITE_API_KEY


    let options = {
        headers : {
            'method' : 'GET',
            'Authorization': `Bearer ${APITOKEN}`
        }
    }

    useEffect(() => {
        if(!selection){
            return
        }
        console.log(data);
        setLoading(true)
        async function fetchData(){
            const url = apiURL + '/' + selection
            try{

                const res = await fetch(url, options)
                const jsonData = await res.json()
                setData(jsonData)
            }catch(err){
                setError(err,message)
            }finally{
                setLoading(false)
            }
        }

        fetchData()
    }, [selection])
        return{data,error,loading}
}
