
import IndicatorComponent from './widgets/indicator'
import CurrentCV from './assets/cv_update.pdf'

function HomeComponent(){
    

    function loadPage(){
      window.open(CurrentCV, '_blank');
    }
    return <div style={{ height:"500px" }} id="home" className="mx-auto flex flex-row w-4/5 ">
       <div style={{ height:"500px" }} className="flex-1  flex items-center">
          <div className="py-2 px-4  ml-4 flex flex-col sm:text-center lg:text-left xl:text-left 2xl:text-left md:text-center">
            <label className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-500">Hello,I'm Emmanuel, </label>
            <label className="text-4xl font-semibold text-gray-400 mt-1 ">frontend and mobile developer</label>
            <label className="text-sm text-gray-400 mt-2">Self-motivated person, analytical skills, very committed, practical oriented with strong passion 
               for hard work, communication and presentation skills, creative and open minded person. 
               Pay attention to details in whatever I do.
                A team player who sees challenges as opportunity to test my capabilities and to acquire new skills. </label>
            <button onClick={loadPage} style={{ width:"150px",height:"45px" }} className="bg-gradient-to-br from-cyan-500 to-blue-500 text-white sm:mx-auto md:mx-auto lg:ml-0 xl:ml-0 2xl:ml-0 mt-4 rounded-3xl drop-shadow">View CV</button>    
          </div>
       </div>
       <div style={{ height:"500px", width:"200px" }} className=" sm:hidden md:hidden lg:block xl:block 2xl:block">
         <IndicatorComponent 
           menu={"first"}
         />
       </div>
    </div>
}

export default HomeComponent;