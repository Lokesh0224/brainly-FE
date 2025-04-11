import { CrossIcon } from './icons/CrossIcon'
import { Button } from './button'
import { Input } from './input'
import axios from 'axios'
import { BACKEND_URL } from '../config'
import {useRef, useState} from 'react'

enum ContentType{
    Youtube="youtube", 
    Twitter='twitter'
}

export function CreateContentModal({open, onClose}){

    const titleRef= useRef<HTMLInputElement>()
    const linkRef= useRef<HTMLInputElement>()
    const [type, setType]= useState(ContentType.Youtube)

    
    async function addContent(){
        const title= titleRef.current?.value
        const link = linkRef.current?.value 
        await axios.post(`${BACKEND_URL}/api/v1/content`, 
            {
                link, 
                title, 
                type
            }, {
                headers:{"Authorization": localStorage.getItem("token")}
            }
        )

        onClose()
        

    }

    return <div>
        
        {open && <div>
            <div className='w-screen h-screen bg-slate-500 fixed top-0 left-0 opacity-60 flex justify-center'>
            
            </div>
            <div className='w-screen h-screen  fixed top-0 left-0  flex justify-center item-center'>

                <div className='flex flex-col justify-center'>
                    <span className='bg-white opacity-100 p-4 rounded fixed'>
                        <div className='flex justify-end'>
                            <div onClick={onClose} className='cursor-pointer'><CrossIcon/>
                            </div>
                            
                        </div>  
                        <div>
                            <Input ref={titleRef} placeholder={"Title"}/>
                            <Input ref= {linkRef} placeholder={"Link"}/>
                        </div>
                        <div>
                            <h1>
                                Type
                            </h1>
                                <div className="flex justify-center p-2">
                                <Button title="Youtube" variant={ type===ContentType.Youtube ? "primary":"secondary"}onClick={()=>{
                                    setType(ContentType.Youtube)
                                }}/>
                                <Button title="Twitter" variant={ type===ContentType.Twitter ? "primary":"secondary"}onClick={()=>{
                                    setType(ContentType.Twitter)
                                }}/>
                            </div>
                        
                        </div>
                        <div className='flex justify-center'>
                            <Button onClick={addContent} variant='primary' title='Submit'/>
                            
                        </div>
                    </span>
                
                </div>
            </div>
            
        </div>}
    </div>
}

{/* <div className='flex flex-col justify-center'>
                <span className='bg-white opacity-100 p-4 rounded'>
                    <div className='flex justify-end'>
                        <div onClick={onClose} className='cursor-pointer'><CrossIcon/>
                        </div>
                        
                    </div>  
                    <div>
                        <Input ref={titleRef} placeholder={"Title"}/>
                        <Input ref= {linkRef} placeholder={"Link"}/>
                    </div>
                    <div>
                        <h1>
                            Type
                        </h1>
                            <div className="flex gap-1 p-4">
                            <Button title="Youtube" variant={ type===ContentType.Youtube ? "primary":"secondary"}onClick={()=>{
                                setType(ContentType.Youtube)
                            }}/>
                            <Button title="Twitter" variant={ type===ContentType.Twitter ? "primary":"secondary"}onClick={()=>{
                                setType(ContentType.Twitter)
                            }}/>
                        </div>
                    
                    </div>
                    <div className='flex justify-center'>
                        <Button onClick={addContent} variant='primary' title='Submit'/>
                        
                    </div>
                </span>
            
            </div> */}
