import IndicatorComponent from './widgets/indicator'
import ProjectItemComponentItem from './widgets/project_item' 
function ProjectsComponent(){
   

    return <div id="projects" className="mt-6 w-4/5 py-2 flex flex-col mx-auto  text-left ">
       <label className="text-2xl font-semibold text-gray-400 lg:ml-6 xl:ml-6 2xl:ml-6 sm:mx-auto md:mx-auto">Personal Projects</label>
       <div className='mt-4 w-full sm:block py-2 md:block lg:hidden xl:hidden 2xl:hidden'>
          <div className='w-full flex flex-col items-center'>
          <ProjectItemComponentItem
                title={"Frankatson Website"}
                description={"A responsive flutter website with API's built using laravel framework"}
                image="p1"
                github={'https://github.com/niiashie/frankatson_web'}
              />
              {/* <ProjectItemComponentItem
                title={"PaperTrail"}
                description={"A tailor made software solution for a company involved in leasing and selling printers and printer parts"}
                image="p3"
                github={'https://github.com/BreakInvent/papertrail-app'}
              /> */}
              <ProjectItemComponentItem
                title={"Shop Manager"}
                description={"An inventory management system for managing retail products and monitoring stock levels"}
                image="p4"
                github={'https://github.com/niiashie/shop_manager'}
              />
              <ProjectItemComponentItem
                title={"Warehouse Manager"}
                description={"An inventory management system for managing warehouse and monitoring stock levels"}
                image="http://localhost:5173/src/assets/frankowarehouse.png"
                github={'https://github.com/niiashie/franko_warehouse_web_app'}
              />
               <ProjectItemComponentItem
                title={"Apostle George Ayiku Media"}
                description={"A digital media application that allows users to pruchase and read books written by the man of God Apostle George Ayiku"}
                image="p2"
                github={'https://github.com/niiashie/lc_mana_web_app'}
              />
          </div>
       </div>
       <div className='mt-4 w-full py-2   mx-auto  text-left sm:hidden md:hidden lg:block xl:block 2xl:block'>
         <div className='w-full py-2  flex flex-row'>
            <div className='flex-1 flex flex-wrap justify-center ml-4'>
              <ProjectItemComponentItem
                title={"Frankatson Website"}
                description={"A responsive flutter website with API's built using laravel framework"}
                image="p1"
                github={'https://github.com/niiashie/frankatson_web'}
              />
              {/* <ProjectItemComponentItem
                title={"PaperTrail"}
                description={"A tailor made software solution for a company involved in leasing and selling printers and printer parts"}
                image="p3"
                github={'https://github.com/BreakInvent/papertrail-app'}
              /> */}
              <ProjectItemComponentItem
                title={"Shop Manager"}
                description={"An inventory management system for managing retail products and monitoring stock levels"}
                image="p4"
                github={'https://github.com/niiashie/shop_manager'}
              />
              <ProjectItemComponentItem
                title={"Warehouse Manager"}
                description={"An inventory management system for managing warehouse and monitoring stock levels"}
                image="http://localhost:5173/src/assets/frankowarehouse.png"
                github={'https://github.com/niiashie/franko_warehouse_web_app'}
              />
               <ProjectItemComponentItem
                title={"Apostle George Ayiku Media"}
                description={"A digital media application that allows users to pruchase and read books written by the man of God Apostle George Ayiku"}
                image="p2"
                github={'https://github.com/niiashie/lc_mana_web_app'}
              />
            </div> 
            <div style={{ width:"170px" }}  className=" sm:hidden md:hidden lg:block xl:block 2xl:block">
              <IndicatorComponent 
                menu={"fourth"}
              />
           </div>
         </div>
       </div>
    </div>
}

export default ProjectsComponent;