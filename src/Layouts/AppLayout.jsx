import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Test from '../Pages/Test'
import MainFooter from '../components/MainFooter';

export default function AppLayout() {
  return (
  <>
    <Navbar />
    <main className='mt-20'>
      <Outlet />
    </main>
    <MainFooter />
  </>
  );
}