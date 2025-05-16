import React from "react";
import gambar1 from '../../public/assets/diagrambulat.png'
import gambar2 from '../../public/assets/titik1.png'
import gambar3 from '../../public/assets/titik2.png'
import gambar4 from '../../public/assets/titik3.png'
import gambar5 from '../../public/assets/tandapanah1.svg'

const Diagram1 = () => {
  return (
    <>

        <div className="flex gap-7">
          <div className="bg-[#2D336B] rounded-xl">
            <div className="flex justify-between pl-3 pt-3">
              <div className="">
                <p className="text-white font-semibold"> Diagram Plans</p>
              </div>
              <div className="bg-white flex items-center gap-2 mr-3 px-4 py-2 rounded-lg">
                <p className="font-semibold"> Week</p>
                <img className="w-2 h-2" src={gambar5} alt="" />
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div>
                <img src={gambar1} alt="" />
              </div>
              <div className="gap-2">
                 <img className="mb-2" src={gambar2} alt="" />
                 <img className="mb-2" src={gambar3} alt="" />
                 <img src={gambar4} alt="" />
              </div>
            </div>
          </div>

          <div className="bg-[#2D336B] rounded-xl">
            <div className="flex justify-between pl-3 pt-3">
              <div className="">
                <p className="text-white font-semibold"> My Plans Done</p>
              </div>
              <div className="bg-white flex items-center gap-2 mr-3 px-4 py-2 rounded-lg">
                <p className="font-semibold"> Week</p>
                <img className="w-2 h-2" src={gambar5} alt="" />
              </div>
            </div>
            <div className="flex flex-col gap-3 px-10 my-15">
              <div className="flex justify-between">
                <img src={gambar2} alt="" />
                <p className="text-white font-semibold"> 21h - 70%</p>
              </div>
              <div className="bg-white w-[407px] h-[17px] relative rounded-xl">
                <div className="w-full h-5 bg-white absolute rounded-xl"></div>
                <div className="w-[80%] h-5 bg-[#DAE1F1] absolute rounded-l-xl"></div>
              </div>

              <div className="flex justify-between ">
                <img src={gambar3} alt="" />
                <p className="text-white font-semibold"> 10h - 20%</p>
              </div>
              <div className="bg-white w-[407px] h-[17px] relative rounded-xl">
                <div className="w-full h-5 bg-white absolute rounded-xl"></div>
                <div className="w-[20%] h-5 bg-[#2973B2] absolute rounded-l-xl"></div>
              </div>

              <div className="flex justify-between ">
                <img src={gambar4} alt="" />
                <p className="text-white font-semibold"> 8h - 16%</p>
              </div>
              <div className="bg-white w-[407px] h-[17px] relative rounded-xl">
                <div className="w-full h-5 bg-white absolute rounded-xl"></div>
                <div className="w-[16%] h-5 bg-[#39056C] absolute rounded-l-xl"></div>
              </div>
            </div>
          </div>
        </div>

    </>
  )
}

export default Diagram1