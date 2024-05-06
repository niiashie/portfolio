import AboutMeItemComponent from './widgets/about_me_item'
import IndicatorComponent from './widgets/indicator'
import AboutMePhoneItemComponent from './widgets/about_me_phone_item'

function AboutMeComponent(){
    return <div id="aboutMe" className='mt-4 w-4/5 py-2  flex flex-col mx-auto text-left '>
      <label className="text-2xl font-semibold text-gray-400 sm:mx-auto md:mx-auto lg:ml-6 xl:ml-6 2xl:ml-6 ">About Me</label>
       <div className='w-full py-1  mt-4 sm:block md:block lg:hidden xl:hidden 2xl:hidden'>
        <div className='w-full py-1 flex flex-col '>
        <AboutMePhoneItemComponent
           description={"Graduated from the University Of Ghana with Bachelor Of Science Computer Engineering. I worked as an intern for 4 months at the University Of Ghana networking systems."}
           year={"2017"}
           
        />
        <AboutMePhoneItemComponent
           description={"Did my one year national service at a well known Agribusiness company called Frankatson CO LTD. Went ahead to build a website and a mobile application to showcase their products and bring the company to the knowledge of all and sundry. Developed a warehouse management system to monitor stock levels and provide data for decision making."}
           year={"2018"}
           
        />
        <AboutMePhoneItemComponent
           description={"Joined an IT firm by name BreakInvent LTD and worked as mobile developer. Learnt flutter and acquired more skills in developing cross platform mobile application. Played a major role in developing software solutions for the transport sector, trading and leasing sector etc."}
           year={"2019"}
           
        />
        <AboutMePhoneItemComponent
         description={"Began building full scale software applications entailing backend, frontend and mobile. Deployed shopmanagement software for a client who deals in electrical parts. Started learning new skills such as react, and upgraded my knowledge in flutter and laravel "}
         year={"2023"}
           position = {"last"}
        />
        </div>
        
       </div>
       <div className='mt-4 w-full py-2   mx-auto  text-left sm:hidden md:hidden lg:block xl:block 2xl:block'>
          <div className='w-full py-2  flex flex-row'>
            <div className='flex-1 flex flex-row  ml-4'>
            <div className="flex-1 py-1 ">
           <AboutMeItemComponent
             description={"Graduated from the University Of Ghana with Bachelor Of Science Computer Engineering. I worked as an intern for 4 months at the University Of Ghana networking systems."}
             year={"2017"}
           />
        </div>
        <div className="flex-1 py-1 ">
           <AboutMeItemComponent
             description={"Did my one year national service at a well known Agribusiness company called Frankatson CO LTD. Went ahead to build a website and a mobile application to showcase their products and bring the company to the knowledge of all and sundry. Developed a warehouse management system to monitor stock levels and provide data for decision making."}
             year={"2018"}
           />
        </div>
        <div className="flex-1 py-1 ">
           <AboutMeItemComponent
             description={"Joined an IT firm by name BreakInvent LTD and worked as mobile developer. Learnt flutter and acquired more skills in developing cross platform mobile application. Played a major role in developing software solutions for the transport sector, trading and leasing sector etc."}
             year={"2019"}
           />
        </div>
        <div className="flex-1 py-1 ">
           <AboutMeItemComponent
             description={"Began building full scale software applications entailing backend, frontend and mobile. Deployed shopmanagement software for a client who deals in electrical parts. Started learning new skills such as react, and upgraded my knowledge in flutter and laravel "}
             year={"2023"}
           />
        </div>
            </div>
            <div style={{ width:"200px" }} >
              <IndicatorComponent 
                menu={"second"}
              />
           </div>
          </div>
          
      </div>
    </div>
    
    // <div  className="mt-4 w-4/5 py-2 flex flex-col mx-auto  text-left px-4">
    //   <label className="text-2xl font-semibold text-gray-400 sm:mx-auto md:mx-auto lg:ml-6 xl:ml-6 2xl:ml-6 ">About Me</label>
    
    //     <AboutMePhoneItemComponent
    //        description={"Graduated from the University Of Ghana with Bachelor Of Science Computer Engineering. I worked as an intern for 4 months at the University Of Ghana networking systems."}
    //        year={"2017"}
           
    //     />
    //     <AboutMePhoneItemComponent
    //        description={"Did my one year national service at a well known Agribusiness company called Frankatson CO LTD. Went ahead to build a website and a mobile application to showcase their products and bring the company to the knowledge of all and sundry. Developed a warehouse management system to monitor stock levels and provide data for decision making."}
    //        year={"2018"}
           
    //     />
    //     <AboutMePhoneItemComponent
    //        description={"Joined an IT firm by name BreakInvent LTD and worked as mobile developer. Learnt flutter and acquired more skills in developing cross platform mobile application. Played a major role in developing software solutions for the transport sector, trading and leasing sector etc."}
    //        year={"2019"}
           
    //     />
    //     <AboutMePhoneItemComponent
    //      description={"Began building full scale software applications entailing backend, frontend and mobile. Deployed shopmanagement software for a client who deals in electrical parts. Started learning new skills such as react, and upgraded my knowledge in flutter and laravel "}
    //      year={"2023"}
    //        position = {"last"}
    //     />

    //   <div className='mt-6 w-full ml-6 flex flex-row py-2 sm:hidden md:hidden lg:block xl:block 2xl:block items-center'>
    //     <div className='flex-1  py-2 flex flex-row'>
    //     <div className="flex-1 py-1 ">
    //        <AboutMeItemComponent
    //          description={"Graduated from the University Of Ghana with Bachelor Of Science Computer Engineering. I worked as an intern for 4 months at the University Of Ghana networking systems."}
    //          year={"2017"}
    //        />
    //     </div>
    //     <div className="flex-1 py-1 ">
    //        <AboutMeItemComponent
    //          description={"Did my one year national service at a well known Agribusiness company called Frankatson CO LTD. Went ahead to build a website and a mobile application to showcase their products and bring the company to the knowledge of all and sundry. Developed a warehouse management system to monitor stock levels and provide data for decision making."}
    //          year={"2018"}
    //        />
    //     </div>
    //     <div className="flex-1 py-1 ">
    //        <AboutMeItemComponent
    //          description={"Joined an IT firm by name BreakInvent LTD and worked as mobile developer. Learnt flutter and acquired more skills in developing cross platform mobile application. Played a major role in developing software solutions for the transport sector, trading and leasing sector etc."}
    //          year={"2019"}
    //        />
    //     </div>
    //     <div className="flex-1 py-1 ">
    //        <AboutMeItemComponent
    //          description={"Began building full scale software applications entailing backend, frontend and mobile. Deployed shopmanagement software for a client who deals in electrical parts. Started learning new skills such as react, and upgraded my knowledge in flutter and laravel "}
    //          year={"2023"}
    //        />
    //     </div>
    //     </div>
    //     <div style={{  width:"200px" }} className=" sm:hidden md:hidden lg:block xl:block 2xl:block">
    //      <IndicatorComponent 
    //        menu={"second"}
    //      />
    //    </div>
    //   </div>
      
    // </div>
}

export default AboutMeComponent;