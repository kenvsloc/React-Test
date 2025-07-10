// src/components/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import './css/404.css'



export default function NotFoundPage () {

      return (
        <div className='not-found-page'>
          <h1>NOT Found Page ❌</h1>
          <Link to ={"/"}>
          <button>Go To Home Page</button>
          </Link>

        </div>
      );
};

