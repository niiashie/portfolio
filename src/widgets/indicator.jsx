
function IndicatorComponent({menu}){
    if (menu == "first") {
        return <div className="w-full h-full flex flex-col  justify-center">
            <div style={{ width:"15px",height:"15px" }} className="rounded-full mx-auto bg-gradient-to-br from-cyan-500 to-blue-500"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
        </div>
    } 
    else if(menu == "second"){
       
        return <div className="w-full h-full flex flex-col  justify-center">
            <div style={{ width:"15px",height:"15px" }} className="rounded-full mx-auto border-gray-300 border-2"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto  bg-gradient-to-br from-cyan-500 to-blue-500"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
            <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
            <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
        </div> 
    } else if(menu == "third"){
        return <div className="w-full h-full flex flex-col  justify-center">
        <div style={{ width:"15px",height:"15px" }} className="rounded-full mx-auto border-gray-300 border-2"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto border-2 border-gray-300"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto bg-gradient-to-br from-cyan-500 to-blue-500"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full border-2 mx-auto border-gray-300"></div>
    </div> 
    }
    else {
        return <div className="w-full h-full flex flex-col  justify-center">
        <div style={{ width:"15px",height:"15px" }} className="rounded-full mx-auto border-gray-300 border-2"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto border-2 border-gray-300"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto border-2 border-gray-300"></div>
        <div style={{ width:"0.5px",height:"40px" }} className="bg-gray-300 mx-auto"></div>
        <div style={{ width:"15px",height:"15px" }} className="rounded-full  mx-auto  bg-gradient-to-br from-cyan-500 to-blue-500"></div>
    </div> 
    }
}

export default IndicatorComponent;