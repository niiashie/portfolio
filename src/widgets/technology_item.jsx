
function TechnologyComponentItem({level,title}){
    if(level == "Beginner"){
        return <div className="w-full py-4 flex flex-row items-center mt-2">
        <div className="flex-1 flex flex-col">
            <label className="text-base text-gray-400 font-medium">{title}</label>
            <div style={{ height:"15px" }} className="mt-4 w-2/5 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
        </div>
        <div style={{ width:"200px" }} className="text-center">
            <label className="font-light text-gray-400">{level}</label>
        </div>
      </div>
    }
    else if(level == "Regular"){
        return <div className="w-full py-4 flex flex-row items-center mt-2">
            <div className="flex-1 flex flex-col">
                <label className="text-base text-gray-400 font-medium">{title}</label>
                <div style={{ height:"15px" }} className="mt-4 w-1/2 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <div style={{ width:"200px" }} className="text-center">
                <label className="font-light text-gray-400">{level}</label>
            </div>
      </div>
    }else if(level == "Advanced"){
      return <div className="w-full py-4 flex flex-row items-center mt-2">
            <div className="flex-1 flex flex-col">
                <label className="text-base text-gray-400 font-medium">{title}</label>
                <div style={{ height:"15px" }} className="mt-4 w-3/4 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <div style={{ width:"200px" }} className="text-center">
                <label className="font-light text-gray-400">{level}</label>
            </div>
      </div> 
    }else{
        return <div className="w-full py-4 flex flex-row items-center mt-2">
            <div className="flex-1 flex flex-col">
                <label className="text-base text-gray-400 font-medium">{title}</label>
                <div style={{ height:"15px" }} className="mt-4 w-full bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full"></div>
            </div>
            <div style={{ width:"200px" }} className="text-center">
                <label className="font-light text-gray-400">{level}</label>
            </div>
       </div>   
    }
   
}

export default TechnologyComponentItem;