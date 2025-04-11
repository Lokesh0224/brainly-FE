import { ReactElement } from "react"

interface ButtonInterface{
    title: String
    size: 'sm'| 'md'| 'lg'
    startIcon?: ReactElement
    endIcon?: ReactElement
    variant: 'primary'| 'secondary'
    onClick?: ()=> void
    fullWidth?: boolean
    loading?: boolean

}

const sizeStyles={
    'lg': 'px-8 py-4 text-xl rounded-xl',
    'md': 'px-4 py-2 text-md rounded-md ',
    'sm': 'px-2 py-1 text-sm rounded-sm'
}

const varientStyles={
    'primary': 'bg-purple-700 text-white ',
    'secondary': 'bg-purple-100 text-purple-600',
    'sm': 'px-2 py-1 text-sm'
}

const textStyles= 'font-dark'

   

export function Button(props: ButtonInterface){
    
        return <button onClick={props.onClick} className={` ${sizeStyles[props.size]} ${varientStyles[props.variant]} ${textStyles} ${props.fullWidth? ' w-full flex justify-center items-center': ''} ${props.loading? "opacity-45" : ""}`}disabled= {props.loading}><div className='flex items-center cursor-pointer '>
            {props.startIcon} 
            <div className='pl-2 pr-2'>
            {props.title}
            </div>
            {props.endIcon}

        </div>
        
        </button>
    
}

