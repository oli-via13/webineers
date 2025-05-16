import React from 'react'

function ListBox(props) {
  return (
    <>

      <div className='flex justify-center items-center'>
          <div className='grid grid-cols-5 bg-[#2D336B] shadow-lg gap-4 mb-2 w-130 rounded-md'>
            <div className='col-span-1'>
                <h2 className='ml-2 border-r-[#e8e8e8] border-r-6 text-white text-center py-3'> {props.nomor}</h2>
            </div>
            <div className='col-span-3 border-r-[#e8e8e8] border-r-6'>
                <h2 className='ml-5 text-white py-3'> {props.kegiatan}</h2>
            </div>
            <div>
                <h2 className='ml-1 text-white text-sm py-3'> {props.waktu}</h2>
            </div>
          </div>     
      </div>

    </>
  )
}

export default ListBox
