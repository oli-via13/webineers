import React from 'react'
import gambar1 from '../../public/assets/diagram.png'
import gambar2 from '../../public/assets/streak.png'

const TigaBox = () => {
  return (
    <>

      <div className='flex gap-18 justify-center items-center'>
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 w-70 h-30'> 
              <img className='w-full h-full mx-auto object-contain px-2' src={gambar1} alt="" />
            </div>
      
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 w-70 h-30'>
              <h2 className='font-bold text-[#2D336B] text-2xl ml-3'> Streak</h2>
              <div className='flex'>
                <img className='-mt-10' src={gambar2} alt="" />
                <h2 className='font-bold text-[#2D336B] text-5xl'> 100</h2>
              </div>
            </div>
      
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 w-70 h-30'>
              <h2 className='font-bold text-[#2D336B] ml-3 text-2xl'> Following</h2>
              <div className='text-center'>
                <h2 className='font-bold text-[#2D336B] text-5xl mt-2'> 155</h2>
              </div>
            </div>
          </div>

    </>
  )
}

export default TigaBox
