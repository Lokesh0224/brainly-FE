import { useRef} from "react"
import { Button } from "../components/button"
import { Input } from "../components/input"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export function Signup(){
    const usernameRef= useRef<HTMLInputElement>()
    const emailRef= useRef<HTMLInputElement>()
    const PasswordRef= useRef<HTMLInputElement>()
    const navigate= useNavigate()

    async function signup(){
        const username= usernameRef.current?.value 
        const email= emailRef.current?.value 
        const password= PasswordRef.current?.value
        await axios.post(`${BACKEND_URL}${"/api/v1/signup"}`, //axios(url, data, config)
            {
                username, 
                email, 
                password
            }
        )
        alert("You have signed up!") 
        navigate("/signin")

        


    }
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className= 'bg-white rounded-xl border min-w-48 p-8'>
            <Input ref= {usernameRef} placeholder="Username" />
            <Input ref= {emailRef} placeholder="Email"/>
            <Input ref= {PasswordRef}placeholder="Password"/>
            <div className="flex justify-center pb-2 pr-2 pl-2 ">
            <Button onClick={signup} loading ={false} variant="primary" size="md" title='Signup' fullWidth={true}/>
            </div>


        </div> 

    </div>
}
