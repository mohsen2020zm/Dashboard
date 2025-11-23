import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import TopBar from './Components/TopBar/TopBar'
import SideBar from './Components/SideBar/SideBar';
import ProfilePage from './Pages/ProfilePage'
import UsersPage from './Pages/UsersPage'
import ManageProductsPage from './Pages/ManageProductsPage';
import AllOrdersPage from './Pages/AllOrdersPage';
import AddProductPage from './Pages/AddProductPage'

function App() {
  return (
    <BrowserRouter>
      <TopBar />
      <SideBar />
      <Routes>
        <Route path='/' element={<ProfilePage />} />
        <Route path='/users' element={<UsersPage />} />
        <Route path='/manage-products' element={<ManageProductsPage />} />
        <Route path='/all-orders' element={<AllOrdersPage />} />
        <Route path='/add-product' element={<AddProductPage />} />
        <Route path='*' element={<p>پیدا نشد</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;