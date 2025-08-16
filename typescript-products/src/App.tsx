import { Outlet } from 'react-router-dom'
import NavBar2 from './components/common/HeaderBar2';

function App() {

  return (
    <div>
      <NavBar2 />
      <Outlet />
    </div>
  );
}

export default App
