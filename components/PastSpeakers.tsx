
import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
  } from "@material-tailwind/react";
   

export default function PastSpeakers() {
    const speakers = [
        {
            name: "ASHNEER GROVER",
            src: "https://images.moneycontrol.com/static-mcnews/2021/08/Ashneer-Grover-2-770x433.jpg?impolicy=website&width=770&height=431",
            desc: "Former co-founder of BharatPe",
        },
        {
            name: "Kenny Sebastian",
            src: "https://i0.wp.com/deadant.co/wp-content/uploads/2020/05/KennyNew.png?fit=1489%2C841&ssl=1",
            desc: "Comedian",
        },
        {
            name: "Vinod Dham",
            src: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Vinod_Dham_%28cropped%29.jpg",
            desc: "Father Of Pentium Chip",
        },
        {
            name: "Rahul Dua",
            src: "https://starsunfolded.com/wp-content/uploads/2020/08/Rahul-Dua.jpg",
            desc: "Comedian",
        },



        {
            name: "ASHWANI LOHANI",
            src: "https://img.theweek.in/content/dam/week/magazine/theweek/business/images/2019/12/13/52-Ashwani-Lohani.jpg",
            desc: "CEO AIR INDIA LIMITED",
        },
        {
            name: "RAJIV SIKKA",
            src: "https://i0.wp.com/cgdindia.net/wp-content/uploads/2020/11/APH_1663-scaled.jpg?resize=1280%2C640&ssl=1",
            desc: "CEO INDIAN OIL-ADANI GAS",
        },
        {
            name: "Chhaya Sharma",
            src: "https://etimg.etb2bimg.com/thumb/msid-88179266,imgsize-50620,width-1200,height-900,overlay-etgovernment/top-ips-officer-chhaya-sharma-to-assume-charge-as-jt-commissioner-of-police-in-delhi.jpg",
            desc: "IPS officer (cracked Nirbhaya case)",
        },
        {
            name: "Subash Chaudhary",
            src: "https://cdn.zeebiz.com/sites/default/files/styles/zeebiz_850x478/public/2021/08/11/156320-dukaan.jpg?itok=3-ESTIEE&c=c5af8c0f92ccc8e249257bf0f1cb18e8",
            desc: "Co-Founder & CTO of DUKAAN",
        },
    ]
  return (
    <>
    
    <div className=" bg-[url('https://img.freepik.com/premium-photo/cargo-space-craft-earth-planet-dark-background-sci-fi-wallpaper-space-station-orbiting-earth-space-ship-space-art-wallpaper-solar-observatory-elements-this-image-furnished-by-nasa-3d-illustration_150455-15545.jpg?w=2000')] bg-cover bg-center bg-scroll 2xl:container 2xl:mx-auto w-screen">
      <div className="bg-background/90 w-screen">
        <h1 className=" text-2xl text-center  lg:text-5xl font-bold text-white ease-in duration-200 bg-gradient-to-tr from-pink1 to-pink2  p-5 pl-10">
          Our Past Speakers
        </h1>




    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      
       
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 ">

        {speakers.map((info)=>{
            return (
           <div key={info.name}>
           <div className="relative overflow-hidden transition duration-300  transform rounded-2xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
             <img
               className="object-cover w-full h-35 md:h-64 xl:h-80  "
               src={info.src}
               alt="Person"
             />
             <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
               <p className="mb-1 uppercase text-lg font-bold hover:text-pink text-gray-100">
                 {info.name}
               </p>
               <p className="mb-4 text-sm italic hover:text-pink text-gray-100"> {info.desc}</p>
              
               
             </div>
           </div>
         </div>
        )})}
      </div>
    </div> 
    </div>
    </div>
    </>
  )
}