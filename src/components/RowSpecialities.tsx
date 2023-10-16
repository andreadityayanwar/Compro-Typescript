import React from 'react'

interface RowSpecialities {
    name: string
}

const RowSpecialities = ({name} : RowSpecialities) => {
    return (
        <div className='bg-[#1A2A2F] text-white rounded-md h-32 font-bold text-2xl ps-8 grid content-center'>
            {name}
        </div>
    )
}

export default RowSpecialities