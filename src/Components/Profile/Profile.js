import './Profile.css'

export default function Profile() {
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
          <p className='page-titles'>پروفایل</p>
          <div className="profile-inputs-parent-div" style={{borderBottom: '1px solid #3d4d55'}}>
            <div className="profile-input-div">
              <p className='profile-input-title'>نام و نام خانوادگی:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>نام کاربری:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>شماره تلفن:</p>
              <input type="number" className='profile-input' />
            </div>
            <div className='profile-btn-div'>
              <button className='profile-btn'>ویرایش</button>
            </div>
          </div>
          <div className="profile-inputs-parent-div">
            <div className="profile-input-div">
              <p className='profile-input-title'>رمز عبور فعلی:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className="profile-input-div">
              <p className='profile-input-title'>رمز عبور جدید:</p>
              <input type="text" className='profile-input' />
            </div>
            <div className='profile-btn-div'>
              <button className='profile-btn'>تغییر رمز</button>
            </div>
          </div>
        </div>
    </div>
  )
}
