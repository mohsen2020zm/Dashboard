import './AllOrders.css'
import Row from '../Row/Row'
import data from '../../Data/data.json'

export default function AllOrders() {

  const faNumHandler = completeDate => {
    let splitedDate = completeDate.split(' ')
    let faNum = `${new Intl.NumberFormat('fa-IR').format(splitedDate[0])} ${splitedDate[1]}`
    return faNum
  }

  return (
    <div className='dash-page-content-parent'>
        <div className="container">
            <p className='page-titles'>فهرست سفارشات</p>
            <div className="all-ords-main-div">
              <Row borderDetails='1px solid #3d4d55' column1='نام کاربر' column2='نام محصول' column3='تاریخ سفارش' ><div style={{width: '7rem'}}></div></Row>
              {
              data.orders.map(ord =>
                <Row key={ord.id} column1={ord.user} column2={ord.productName} column3={faNumHandler(ord.date)} >
                  <select className='all-ords-select-box' value={ord.status}>
                      <option value="sending">درحال ارسال</option>
                      <option value="complete">تکمیل شده</option>
                  </select>
                </Row>)
              }
            </div>
        </div>
    </div>
  )
}
