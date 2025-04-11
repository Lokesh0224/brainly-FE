import axios from 'axios'
import { useEffect, useState } from 'react'
import { BACKEND_URL } from '../config'


export function useContent(){
    const [contents, setContents]= useState([])
    async function fetchContents(){
        const response= await axios.get(`${BACKEND_URL}/api/v1/content`,{
            headers: {
                "Authorization": localStorage.getItem("token")
            }
        })
        setContents(response.data.content)
    }
    useEffect(()=>{
        fetchContents()
        let interval =setInterval(()=>{
            fetchContents()
        }, 10*1000)

        return ()=>{
            clearInterval(interval)
        }
        
        
    }, [])
    return {contents, fetchContents}
}