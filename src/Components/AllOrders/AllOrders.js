import './AllOrders.css'
import Row from '../Row/Row'
import DetailsModal from './ِDetailsModal/DetailsModal'
import data from '../../Data/data.json'
import { useState } from 'react'

export default function AllOrders() {

  const [modalToglle, setModalToglle] = useState(false)
  const [orderDetails, setOrderDetails] = useState({})

  const faNumHandler = completeDate => {
    let splitedDate = completeDate.split(' ')
    let faNum = new Intl.NumberFormat('fa-IR').format(splitedDate[0]) + ' ' + splitedDate[1]
    return faNum
  }
  const modalHandler = (order) => {
    setOrderDetails(order)
    setModalToglle(true)
  }

  return (
    <>
      {modalToglle && <DetailsModal {...orderDetails} date={faNumHandler(orderDetails.date)} onClose={() => setModalToglle(false)} />}
      <div className='dash-page-content-parent'>
          <div className="container">
              <p className='page-titles'>فهرست سفارشات</p>
              <div className="all-ords-main-div">
                <Row borderDetails='1px solid #3d4d55' column1='نام کاربر' column2='نام محصول' column3='تاریخ سفارش' >
                  <p className='row-tiles' style={{width: '6rem'}}>وضعیت</p>
                  <div style={{width: '8rem'}}></div>
                </Row>
                {
                data.orders.map(ord =>
                  <Row key={ord.id} column1={ord.user} column2={ord.productName} column3={faNumHandler(ord.date)} >
                    <select className='all-ords-select-box' value={ord.status}>
                        <option value="sending">درحال ارسال</option>
                        <option value="complete">تکمیل شده</option>
                    </select>
                    <button className="all-ords-details-modal-btn" onClick={() => modalHandler(ord)}>مشاهده جزییات</button>
                  </Row>)
                }
              </div>
          </div>
      </div>
    </>
  )
}
