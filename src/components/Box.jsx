import React from 'react'

function Box(props) {

  return (
    <>

      <div className='flex justify-center items-center'>
        <div className='grid grid-cols-5 bg-[#2D336B] shadow-lg gap-4 mb-2 w-auto rounded-md'> 
          <div className='col-span-1'>
            <h2 className='ml-2 text-white py-3'> {props.kegiatan} </h2>
          </div>
          <div className='col-span-3'>
            <h2 className='ml-26 text-white py-3'> {props.mapel}</h2>
          </div>
          <div className='items-center'>
            <h2 className='ml-5 text-white py-3 '> {props.hari}</h2>
          </div>
        </div>
      </div>

    </>
  )
}

export default Box
