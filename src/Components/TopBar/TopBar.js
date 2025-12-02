import './TopBar.css'
import { TiThMenu } from "react-icons/ti";

export default function TopBar({onOpenMenu}) {
  return (
    <nav className='topbar-main-div'>
      <div className="menu-btn" onClick={onOpenMenu}><TiThMenu /></div>
      <p className='topbar-title'>داشبورد</p>
      <div className="top-bar-flex-handler"></div>
    </nav>
  )
}
