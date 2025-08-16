// src/components/NotFoundPage.tsx
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';




    const NotFoundPage: React.FC = () => {


      return (
        <div className='h-screen flex items-center justify-center '>
          <div className='flex flex-col items-center'>

          <img
          className='mb-6'
        src="/Banner404.svg"
        width="512px"
        height="512px"
        alt="logo"
        loading="lazy"
      />

      <h1 className='font-medium text-2xl mb-4'>❌ NOT FOUND PAGE ❌</h1>
          <Link to ={"/"}>
          <Button variant="default">Go To Home Page</Button>
          </Link>

          </div>
        </div>
      );
    };

    export default NotFoundPage;