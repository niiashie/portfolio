import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavigatorComponent from './navigator'
import HomeComponent from './home'
import AboutMeComponent from './about_me'
import TechnologyComponent from './technology'
import ProjectsComponent from './projects'

function App() {
  const [count, setCount] = useState(0)

  return (
 
   <div className='w-full h-full flex flex-col'>
       <NavigatorComponent/>
        <HomeComponent/>
        <AboutMeComponent/>
        <TechnologyComponent/>
        <ProjectsComponent/>
   </div>
 
  )
}

export default App
