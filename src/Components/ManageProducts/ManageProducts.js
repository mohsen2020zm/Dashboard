import './ManageProducts.css'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import data from '../../Data/data.json'
import Row from '../Row/Row'
import EditModal from './EditModal/EditModal'

export default function ManageProducts() {
  const [modalToggle, setModalToggle] = useState(false)
  const [productDetails, setProductDetails] = useState({})
  const [filteredProducts, setFilteredProducts] = useState([])

  const [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    const query = searchParams.get('q') || ''
    let filter = data.products.filter(product => product.name.toLowerCase().includes(query.toLowerCase()))
    setFilteredProducts(filter)
  },[searchParams])

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
              <div className="pages-nav-bar">
                <p className='page-titles'>مدیریت محصولات</p>
                <input
                type="text"
                placeholder='جستجوی محصولات...'
                className='pages-nav-bar-input'
                onChange={e => setSearchParams({q: e.target.value})} />
              </div>

              <div className="manage-pros-main-div">
                <Row borderDetails='1px solid #3d4d55' column1='نام محصول' column2='قیمت' column3='موجودی' >
                  <div className='manage-pros-flex-handle-div'></div>
                  <div className='manage-pros-flex-handle-div'></div>
                </Row>

                {filteredProducts.map(prod =>
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
