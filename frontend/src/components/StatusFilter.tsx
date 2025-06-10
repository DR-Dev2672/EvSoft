import React from 'react'

type Props={
  selectedType:string[],
  onChange:(event:React.ChangeEvent<HTMLInputElement>)=>void

}

function StatusFilter({selectedType,onChange}:Props) {
  return (
    <>
     <div className='border-b border-slate-300 pb-5'>
      <h4 className='text-md font-semibold'>Status Filter</h4>
      {
        ["Active","Inactive"].map((type)=>(
          <label className='flex items-center'>
            <input
             type="checkbox"
             value={type}
             checked={selectedType.includes(type)}
             onChange={onChange}
             />
             <span>{type}</span>
            
          </label>
        ))
      }
     </div>
    </>
  )
}

export default StatusFilter