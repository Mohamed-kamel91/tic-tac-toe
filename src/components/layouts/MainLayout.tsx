import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';

export const MainLayout = () => {
  return (
    <>
      <div className="min-h-screen">
        <Header />

        <main className="col-start-2">
          <Outlet />
        </main>
      </div>
    </>
  );
};
