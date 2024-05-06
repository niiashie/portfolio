import TechnologyComponentItem from './widgets/technology_item'
import IndicatorComponent from './widgets/indicator'

function TechnologyComponent(){
    return <div id="technology"  className="mt-6 w-4/5  py-2 flex flex-col mx-auto  text-left ">
        <label className="text-2xl font-semibold text-gray-400 lg:ml-6 xl:ml-6 2xl:ml-6 sm:mx-auto md:mx-auto">Technology</label>
        <div className='mt-6 w-full ml-6 flex flex-row py-2  items-center '>
          <div className='flex-1  py-2 flex flex-col '>
            <TechnologyComponentItem
              title={"HTML && CSS"}
              level="Advanced"
            />
            <TechnologyComponentItem
              title={"Javascript"}
              level="Advanced"
            />
            <TechnologyComponentItem
              title={"Typescript"}
              level="Regular"
            />
            <TechnologyComponentItem
              title={"Flutter"}
              level="Professional"
            />
            <TechnologyComponentItem
              title={"Laravel"}
              level="Advanced"
            />
            <TechnologyComponentItem
              title={"React"}
              level="Beginner"
            />
            <TechnologyComponentItem
              title={"Tailwind CSS"}
              level="Professional"
            />
            <TechnologyComponentItem
              title={"Dart"}
              level="Professional"
            />
            <TechnologyComponentItem
              title={"PHP"}
              level="Advanced"
            />
            <TechnologyComponentItem
              title={"Git"}
              level="Professional"
            />
          </div>
          <div style={{  width:"200px" }} className=" sm:hidden md:hidden lg:block xl:block 2xl:block">
         <IndicatorComponent 
           menu={"third"}
         />
       </div>
        </div>
    </div>
}

export default TechnologyComponent;