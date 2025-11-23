import './AllOrders.css'
import Row from '../Row/Row'

export default function AllOrders() {
  return (
    <div className='dash-page-content-parent'>
        <div className="container">
            <p className='page-titles'>فهرست سفارشات</p>
            <Row borderDetails='1px solid #3d4d55' column1='نام کاربری' column2='نام محصول' column3='تاریخ سفارش' ><div style={{width: '7rem'}}></div></Row>

            <Row column1='mohsen2020' column2='موبایل' column3='8 ابان' >
                <select className='all-ords-select-box'>
                    <option value="sending">درحال ارسال</option>
                    <option value="complete">تکمیل شده</option>
                </select>
            </Row>
            
        </div>
    </div>
  )
}
