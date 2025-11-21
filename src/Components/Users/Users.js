import './Users.css'
import Row from '../Row/Row'

export default function Users() {
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
          <p className="page-titles">کاربران</p>
          <div className="users-main-div">
            <Row borderDetails='1px solid #3d4d55' column1='نام و نام خانوادگی' column2='نام کاربری' column3='شماره تلفن' />
            
            <Row column1='محسن زمانی' column2='mohsen-2020z' column3='09928437465' />
            <Row column1='محسن زمانی' column2='mohsen-2020z' column3='09928437465' />
          </div>
        </div>
    </div>
  )
}
