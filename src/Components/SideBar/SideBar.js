import './SideBar.css'
import { Link } from 'react-router-dom'
import { useState, useContext } from 'react';
import { newContext } from '../../context';
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdCloseCircleOutline } from "react-icons/io";
import Modal from '../Modal/Modal';

export default function SideBar({onCloseMenu}) {

  const [modalToggle, setModalToggle] = useState(false)
  const {showMenu} = useContext(newContext)

  const closeMenu = () => window.innerWidth <= 768 && onCloseMenu()
  
  return (
    <>  
      {modalToggle && <Modal message='آیا مطمئن هستید که می‌خواهید خارج شوید؟' onClose={() => setModalToggle(false)} />}
      <aside className='sidebar-main-div' style={{right: showMenu ? '0' : '-15rem'}}>
        <div className="close-menu-btn" onClick={onCloseMenu}><IoMdCloseCircleOutline /></div>
        <div className="user-d-div">
          <div className="user-d-pic-div">
            <FaUserCircle />
          </div>
          <p className="user-d-username">محسن زمانی</p>
        </div>
        <div className="dash-pages-main-div">
          <div className="dash-page-div">
            <FaRegUserCircle />
            <Link to='/' onClick={closeMenu}>پروفایل</Link>
          </div>
          <div className="dash-page-div">
            <TbUsers />
            <Link to='/users' onClick={closeMenu}>فهرست کاربران</Link>
          </div>
          <div className="dash-page-div">
            <LuClipboardList />
            <Link to='/all-orders' onClick={closeMenu}>فهرست سفارشات</Link>
          </div>
          <div className="dash-page-div">
            <AiOutlineProduct />
            <Link to='/manage-products' onClick={closeMenu}>مدیریت محصولات</Link>
          </div>
          <div className="dash-page-div">
            <IoMdAddCircleOutline />
            <Link to='/add-product' onClick={closeMenu}>اضافه کردن محصول</Link>
          </div>
        </div>
        <button className='sign-out-btn' onClick={() => setModalToggle(true)}>خروج از حساب کاربری</button>
      </aside>
    </>
  )
}
