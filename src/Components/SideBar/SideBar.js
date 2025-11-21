import './SideBar.css'
import { Link } from 'react-router-dom'
import { FaUserCircle } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { TbUsers } from "react-icons/tb";
import { AiOutlineProduct } from "react-icons/ai";
import { LuClipboardList } from "react-icons/lu";

export default function SideBar() {
  return (
    <aside className='sidebar-main-div'>
      <div className="user-d-div">
        <div className="user-d-pic-div">
          <FaUserCircle />
        </div>
        <p className="user-d-username">محسن زمانی</p>
      </div>
      <div className="dash-pages-main-div">
        <div className="dash-page-div">
          <FaRegUserCircle />
          <Link to='/'>پروفایل</Link>
        </div>
        <div className="dash-page-div">
          <TbUsers />
          <Link to='/users'>فهرست کاربران</Link>
        </div>
        <div className="dash-page-div">
          <AiOutlineProduct />
          <Link to='/manage-products'>مدیریت محصولات</Link>
        </div>
        <div className="dash-page-div">
          <LuClipboardList />
          <Link to='/all-orders'>لیست سفارشات</Link>
        </div>
      </div>
      <button className='sign-out-btn'>خروج از حساب کاربری</button>
    </aside>
  )
}
