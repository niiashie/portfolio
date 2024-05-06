import arrowDown from '../assets/arrow_down.png';

function AboutMePhoneItemComponent({year,description,position}){
    if(position == "last"){
        return <div className="w-4/5 mx-auto flex flex-col py-2 mt-2 items-center text-center ">
        <label className="text-base text-gray-400 font-medium">{year}</label> 
        <label className="mt-2 font-light text-gray-400 ">{description}</label>
      
       </div>
    }
    else{
        return <div className="w-4/5 mx-auto flex flex-col py-2 mt-2 text-center items-center">
        <label className="text-base text-gray-400 font-medium">{year}</label> 
         <label className="mt-2 font-light text-gray-400 ">{description}</label>
        <img style={{ width:"25px", height:"25px" }} className="mt-3" src={arrowDown}/> 
 
       </div>
    }
   
}

export default AboutMePhoneItemComponent;