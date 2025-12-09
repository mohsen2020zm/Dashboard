import './Profile.css'
import { useEffect, useState } from 'react'
import data from '../../Data/data.json'

export default function Profile() {
  const [userDetails, setUserDetails] = useState({})
  useEffect(() => {
    setUserDetails(data.admin)
  },[])
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
          <p className='page-titles'>پروفایل</p>
          <form className="profile-inputs-parent-div" style={{borderBottom: '1px solid #3d4d55'}}>
            <div className="profile-input-div">
              <p className='profile-input-title'>نام و نام خانوادگی:</p>
              <input
               type="text"
               name='name' 
               className='profile-input'
               value={userDetails.name}
               onChange={e => setUserDetails({...userDetails, name: e.target.value})} />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>نام کاربری:</p>
              <input
               type="text" 
               name='userName'
               className='profile-input'
               value={userDetails.userName}
               onChange={e => setUserDetails({...userDetails, userName: e.target.value})} />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>شماره تلفن:</p>
              <input
               type="number" 
               name='phone'
               className='profile-input'
               value={userDetails.phone}
               onChange={e => setUserDetails({...userDetails, phone: e.target.value})} />
            </div>
            <div className='profile-btn-div'>
              <input type='submit' className='profile-btn' value='ویرایش' onClick={e => e.preventDefault()} />
            </div>
          </form>
          <form className="profile-inputs-parent-div">
            <div className="profile-input-div">
              <p className='profile-input-title'>رمز عبور فعلی:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>رمز عبور جدید:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className='profile-btn-div'>
              <input type='submit' className='profile-btn' value='تغییر رمز' onClick={e => e.preventDefault()} />
            </div>
          </form>
        </div>
    </div>
  )
}
