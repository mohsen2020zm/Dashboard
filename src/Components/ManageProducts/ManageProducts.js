import './ManageProducts.css'
import { useState } from 'react'
import data from '../../Data/data.json'
import Row from '../Row/Row'
import EditModal from './EditModal/EditModal'

export default function ManageProducts() {
  const [modalToggle, setModalToggle] = useState(false)
  const [productDetails, setProductDetails] = useState({})

  const faNumHandler = num => new Intl.NumberFormat('fa-IR').format(num)
  const editHandler = product => {
    setProductDetails(product)
    setModalToggle(true)
  }
  return (
    <>
      {modalToggle && <EditModal details={productDetails} onclose={() => setModalToggle(false)} />}
      <div className='dash-page-content-parent'>
          <div className='container'>
              <p className='page-titles'>مدیریت محصولات</p>
              <div className="manage-pros-main-div">
                <Row borderDetails='1px solid #3d4d55' column1='نام محصول' column2='قیمت' column3='موجودی' >
                  <div style={{width: "6rem"}}></div>
                  <div style={{width: "6rem"}}></div>
                </Row>

                {data.products.map(prod =>
                  <Row key={prod.id} column1={prod.name} column2={`${faNumHandler(prod.price)} تومان`} column3={`${faNumHandler(prod.inventory)} عدد`}>
                    <button className='manage-pros-btn' onClick={() => editHandler(prod)}>ویرایش</button>
                    <button className='manage-pros-btn'>حذف</button>
                  </Row>
                )}
              </div>
          </div>
      </div>
    </>
  )
}
