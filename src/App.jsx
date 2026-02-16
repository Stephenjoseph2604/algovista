import React from 'react'
import AlgoVista from './pages/Algovista'
import AlgoVistaLanding from './pages/AlgoVistaLanding'
import AlgoVistaRoadmap from './pages/AlgoVistaRoadmap'
import AlgoVistaTopics from './pages/AlogoVistaTopics'
import AlgoVistaProblems from './pages/AlgoVistaProblems'

const App = () => {
  return (
    <>
     {/* <AlgoVista/> */}
     <AlgoVistaLanding/>
     <AlgoVistaRoadmap/>
     <AlgoVistaTopics/>
     <AlgoVistaProblems/>
    </>
  )
}

export default App
