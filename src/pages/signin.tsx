import { Button } from "../components/button"
import { Input } from "../components/input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"
export function Signin(){

    const emailRef= useRef<HTMLInputElement>()
    const PasswordRef= useRef<HTMLInputElement>()
    const navigate= useNavigate()

    async function signin(){

        const email= emailRef.current?.value 
        const password= PasswordRef.current?.value
        const response= await axios.post(`${BACKEND_URL}${"/api/v1/signin"}`, //axios(url, data, config)
            {
                email, 
                password
            }
        )
        const jwt = response.data.token
        localStorage.setItem("token", jwt)
        navigate("/dashboard")
    }

    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className= 'bg-white rounded-xl border min-w-48 p-8'>

            <Input ref= {emailRef}placeholder="Email"/>
            <Input ref= {PasswordRef}placeholder="Password"/>
            <div className="flex justify-center pb-2 pr-2 pl-2 ">
            <Button onClick={signin}loading ={false} variant="primary" size="md" title='Signin' fullWidth={true}/>
            </div>
        </div> 

    </div>
}
