import './Users.css'
import Row from '../Row/Row'
import data from '../../Data/data.json'

export default function Users() {
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
          <p className="page-titles">فهرست کاربران</p>
          <div className="users-main-div">
            <Row borderDetails='1px solid #3d4d55' column1='نام و نام خانوادگی' column2='نام کاربری' column3='شماره تلفن' />
            {
            data.users.map(user => <Row key={user.id} column1={user.name} column2={user.userName} column3={user.phone} />)
            }
          </div>
        </div>
    </div>
  )
}
