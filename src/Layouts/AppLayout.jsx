import { Outlet } from 'react-router-dom'
import Navbar from '../Partials/Navbar'
import Test from '../Pages/Test'

export default function AppLayout() {
  return (
  <>
    <Navbar />
    <main className='mt-20'>
      <Outlet />
    </main>
  </>
  );
}