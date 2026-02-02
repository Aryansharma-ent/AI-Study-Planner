
import {Routes,Route} from 'react-router-dom'
import DashBoard from './pages/DashBoard'
import GenerateForm from './pages/GenerateForm'
import ResultPage from './pages/ResultPage'
import MainNav from './layouts/MainNav'

function App() {


  return (
    <Routes>
      <Route element={<MainNav/>} >
    <Route path='/' element = {<DashBoard/>} />
    <Route path='/GeneratePlan' element = {<GenerateForm/>} />
    <Route path='/result/:id' element = {<ResultPage/>} />
    </Route>
    </Routes>
  )
}

export default App
