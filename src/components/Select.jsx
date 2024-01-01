import React, { useId } from 'react'

const Select = ({ options, label, className, ...props }, ref) => {
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label htmlFor={id} className=''>{label}</label>}
            <select ref={ref} id={id} className={`${className} px-3 py-2 rounded-lg bg-white text-black outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full  `} {...props} >
                {options?.map(opt => (<option key={opt} value={opt}>{opt}</option>))}
            </select>
        </div>
    )
}

export default React.forwardRef(Select)
