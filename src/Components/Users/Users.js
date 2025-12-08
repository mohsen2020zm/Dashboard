import './Users.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Row from '../Row/Row'
import data from '../../Data/data.json'

export default function Users() {

  const [filteredUsers, setFilteredUsers] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q') || ''
    let filter = data.users.filter(user => user.userName.toLowerCase().includes(query.toLowerCase()))
    setFilteredUsers(filter)
  },[searchParams])
  
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
          <div className="pages-nav-bar">
            <p className="page-titles">فهرست کاربران</p>
            <input
             type="text"
             placeholder='جستجوی کاربران...'
             className='pages-nav-bar-input'
             onChange={e => setSearchParams({q: e.target.value})} />
          </div>
          <div className="scroll-div">
            <div className="users-main-div">
              <Row column1='نام و نام خانوادگی' column2='نام کاربری' column3='شماره تلفن' />
              {
              filteredUsers.map(user => <Row key={user.id} column1={user.name} column2={user.userName} column3={user.phone} />)
              }
            </div>
          </div>
        </div>
    </div>
  )
}
