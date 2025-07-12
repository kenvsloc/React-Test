// src/components/NotFoundPage.tsx
import { Link } from 'react-router-dom';
import './404.css'



    const NotFoundPage: React.FC = () => {
      return (
        <div className='not-found-page'>
          <h1>helo guy</h1>
          <h1>NOT Found Page ❌</h1>
          <Link to ={"/"}>
          <button>Go To Home Page</button>
          </Link>

        </div>
      );
    };

    export default NotFoundPage;