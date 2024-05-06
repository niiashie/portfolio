import linkedIn from './assets/linkedin.png'
import facebook from './assets/facebook.png'
import email from './assets/email.png'
import React, { useEffect } from 'react';

function NavigatorComponent(){
    
    function handleClick() {
       
        var element = document.getElementById("dropdown");
        if(element.classList.contains("hidden")){
            element.classList.remove("hidden");
        }
        else{
            element.classList.add("hidden"); 
        }
        
    }

    const runOnPageLoad = () => {
        console.log('Page loaded!');
        const techCon = document.getElementById('techCon');
        techCon.addEventListener('click', scrollToView());

        // Perform other actions here
    };

    // useEffect(() => {
       
    // }, []);

    function scrollToView(id){
        
      const element = document.getElementById(id);

      const scrollOptions = {
       
        behavior: 'smooth' // Use smooth scrolling
      };
      element.scrollIntoView(scrollOptions);
      handleClick();
    }

    return <div className="sticky top-0 bg-slate-100 shadow-md flex 2xl:justify-around md:justify-around lg:justify-around xl:justify-around sm:justify-between" style={{ height: "70px" }}  >
        <div className="px-2 flex items-center" style={{  height:"70px" }} >
            <label className="font-sans md:text-lg lg:text-lg xl:text-lg 2xl:text-lg sm:text-base font-medium text-gray-600">E.M. Portfolio</label> 
        </div>

       
  
        <div  className="px-2 flex flex-row items-center" style={{height:"70px",  }}>
            <div onClick={() => scrollToView('home')}  className="px-2 py-2 hover:px-4 lg:block md:block xl:block sm:hidden 2xl:block  bg-inherit hover:drop-shadow-md rounded-3xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white text-gray-500  items-center">
               <label className=" text-base ">Home</label>
            </div>
            <div onClick={() => scrollToView('aboutMe')} className="px-2 py-2 hover:px-4  lg:block md:block xl:block sm:hidden 2xl:block ml-3 bg-inherit hover:drop-shadow-md rounded-3xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white text-gray-500  items-center">
              <label className=" text-base ">About Me</label>  
            </div>
            <div id="techCon"  className="px-2 py-2 hover:px-4 lg:block md:block xl:block sm:hidden 2xl:block ml-3 bg-inherit hover:drop-shadow-md rounded-3xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white text-gray-500  items-center">
              <button onClick={() => scrollToView('technology')} className=" text-base ">Technologies</button>  
            </div>
            <div onClick={() => scrollToView('projects')} className="px-2 py-2 hover:px-4 lg:block md:block xl:block sm:hidden 2xl:block ml-3 bg-inherit hover:drop-shadow-md rounded-3xl hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-white text-gray-500  items-center">
              <label className=" text-base ">Projects</label>  
            </div>
            <div  className="  lg:hidden md:hidden xl:hidden sm:block 2xl:hidden">
                <div className='ml-1 px-2 py-2 relative flex flex-row items-center'>
                <div style={{ height:"70px" }} className="px-2  mr-1 flex flex-row items-center">
                    <a  href="https://www.linkedin.com/in/emmanuel-ashie-219222174/" target="_blank" ><img src={linkedIn} style={{width:"25px", height:"25px"}}/></a>
                    <a href='https://web.facebook.com/emmanuel.ashie.165' target="_blank"><img src={facebook} className="ml-2" style={{width:"25px", height:"25px"}}/></a>
                </div>
                <button id="dropdownDefaultButton" style={{ height:"30px",backgroundColor:"#9c9c9c" }}  data-dropdown-toggle="dropdown" data-dropdown-trigger="hover" onClick={handleClick} className="   rounded-lg text-sm px-2 py-2 text-center inline-flex items-center " type="button"> 
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-white font-bold">
                    <path strokeLinecap={"round"} strokeLinejoin={"round"} d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>

                </button>
                
                <div id="dropdown" className="z-30 hidden  absolute top-20 right-1  bg-white divide-y divide-slate-400 rounded-lg drop-shadow-md w-56 bg-gray-100">
                    <ul className="py-2 text-sm text-gray-900 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                    <li onClick={() => scrollToView('home')}>
                        <a href="#" className="block px-4 py-2 text-gray-700">Home</a>
                    </li>
                    <li onClick={() => scrollToView('aboutMe')}>
                        <a href="#" className="block px-4 py-2 text-gray-700">About Me</a>
                    </li>
                    <li onClick={() => scrollToView('technology')}>
                        <a href="#" className="block px-4 py-2 text-gray-700">Technologies</a>
                    </li>
                    <li onClick={() => scrollToView('projects')}>
                        <a href="#" className="block px-4 py-2 text-gray-700">Projects</a>
                    </li>
                    </ul>
               </div>
                </div>
                
            </div>
            
            

            
            
        </div> 

        <div style={{ height:"70px" }} className="px-2   sm:hidden md:block lg:block xl:block 2xl:block">
          <div style={{ height:"70px" }} className='flex flex-row items-center '>
                <a  href="https://www.linkedin.com/in/emmanuel-ashie-219222174/" target="_blank" ><img src={linkedIn} style={{width:"20px", height:"20px"}}/></a>
            <a href='https://web.facebook.com/emmanuel.ashie.165' target="_blank"><img src={facebook} className="ml-2" style={{width:"20px", height:"20px"}}/></a>
            <img src={email} style={{ width:"20px", height:"25px" }} className="ml-2"></img>
            <label className='ml-1 text-gray-500 font-medium'>rhemayiku@gmail.com</label>
           </div>
           
        </div>
    </div>
}
//#9C9C9C
//lg:hidden md:block xl:hidden sm:block 2xl:hidden 

export default NavigatorComponent;