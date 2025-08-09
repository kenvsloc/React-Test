
import { Outlet } from 'react-router-dom'
import NavBarMain from './components/NavBar1'


function App() {


  return (
    <div>
    {/* <NavBar2 /> */}
    <NavBarMain />
    <Outlet />
    </div>
  )
}

export default App
