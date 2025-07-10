import { Outlet } from 'react-router-dom'
import NavBar from './components/common/HeaderBar'

function App() {

  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App
