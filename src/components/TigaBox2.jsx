import React from 'react'
import gambar1 from '../../public/assets/streak.png'

const TigaBox2 = () => {
  return (
    <>

      <div className='flex gap-18 justify-center items-center'>
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 md:w-70 h-30 w-70'> 
                <h2 className='font-bold text-[#2D336B] text-xl ml-3'> Level XP </h2>
                <h2 className='font-bold text-red-600 text-3xl mt-2 text-center'> XP 100</h2>
                <p className='text-center text-sm mt-4 text-[#2D336B]'> Poin Keaktifan Group Study</p>
            </div>
      
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 w-70 h-30'>
              <h2 className='font-bold text-[#2D336B] text-xl ml-3'> Streak</h2>
              <div className='flex'>
                <img className='-mt-10' src={gambar1} alt="" />
                <h2 className='font-bold text-[#2D336B] text-5xl'> 100</h2>
              </div>
            </div>
      
            <div className='bg-white shadow-lg rounded-xl border-2 mb-2 w-70 h-30'>
              <h2 className='font-bold text-[#2D336B] ml-3 text-xl'> Mini Task</h2>
              <div className='flex justify-between bg-[#2D336B] rounded-lg mt-2 mb-2 mx-2 px-2'>
                <p className='text-white font-semibold'> Latihan soal Math</p>
                <p className='text-white font-semibold'> 100%</p>
              </div>
              <div className='flex justify-between bg-[#2D336B] rounded-lg mx-2 px-2'>
                <p className='text-white font-semibold'> Latihan soal Kuantitatif</p>
                <p className='text-white font-semibold'> 20%</p>
              </div>
            </div>
          </div>

    </>
  )
}

export default TigaBox2