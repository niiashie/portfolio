
function AboutMeItemComponent({year,description}){
  return <div className="w-full py-1 flex flex-col justify-start text-left">
    <div style={{ height: "30px" }} className="w-full  flex flex-col text-left">
       <label className="text-base text-gray-400 font-medium ml-2">{year}</label>
    </div>
    
    <div className="w-full mt-2 flex flex-row justify-center py-2">
       <div style={{ width:"18px",height:"18px" }} className="rounded-full bg-gradient-to-br from-cyan-500 to-blue-500"></div>
       <div style={{ height:"3px" }} className="flex-1 bg-gray-200 rounded mt-2"></div>
    </div>
    <label className="mt-2 font-light text-gray-400 mx-4">{description}</label>
  </div>
}

export default AboutMeItemComponent;