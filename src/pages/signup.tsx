import { Button } from "../components/button"
import { Input } from "../components/input"

export function Signup(){
    return <div className="h-screen w-screen bg-gray-200 flex justify-center items-center">
        <div className= 'bg-white rounded border min-w-48'>
            <Input placeholder="Username" />
            <Input placeholder="Email"/>
            <Input placeholder="Password"/>
            <div className="flex justify-center pb-2 pr-2 pl-2 ">
            <Button variant="primary" size="md" title='Signup' fullWidth={true}/>
            </div>


        </div> 

    </div>
}
