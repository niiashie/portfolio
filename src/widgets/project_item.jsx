import frankoweb from '../assets/frankoweb.png';
import lcMana from '../assets/lc_mana.png';
import paperTrail from '../assets/paperTrail.png';
import shopManager from '../assets/shopManager.png';
import warehouseManager from '../assets/frankowarehouse.png';


function ProjectItemComponentItem({image,title,description,github}){
   
    function loadPage(){
        window.open(github, '_blank');
    }

    function getImage(){
        return frankoweb;
    } 

   return <div style={{ width:"300px",height:"400px" }} className="border-2 border-gray-200 rounded-xl flex flex-col mx-2 mt-3 text-center items-center justify-center">
       <img style={{ width:"280px", height: "170px"}}  src={image=='p1'?frankoweb:image == 'p2'?lcMana:image=='p3'?paperTrail:image == 'p4'?shopManager:warehouseManager} />
       <label className='mt-2 text-lg text-gray-400 font-normal'>{title}</label>
       <label className='mt-2 text-base text-gray-400 font-light px-4'>{description}</label>
       <button style={{ width:"150px", height:"40px" }}  onClick={loadPage} className='mt-8 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full drop-shadow-md text-white'>View Github</button>
   </div>
}

export default ProjectItemComponentItem;