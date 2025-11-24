import './ManageProducts.css'
import Row from '../Row/Row'
import data from '../../Data/data.json'

export default function ManageProducts() {

    const faNumHandler = num => new Intl.NumberFormat('fa-IR').format(num)
    
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
            <p className='page-titles'>مدیریت محصولات</p>
            <div className="manage-pros-main-div">
              <Row borderDetails='1px solid #3d4d55' column1='نام محصول' column2='قیمت' column3='موجودی' ><div style={{width: "7rem"}}></div></Row>
              {
              data.products.map(prod => <Row key={prod.id} column1={prod.name} column2={`${faNumHandler(prod.price)} تومان`} column3={`${faNumHandler(prod.inventory)} عدد`}><button className='manage-pros-del-btn'>حذف</button></Row>)
              }
            </div>
        </div>
    </div>
  )
}
