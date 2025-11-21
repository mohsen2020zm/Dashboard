import './ManageProducts.css'
import Row from '../Row/Row'

export default function ManageProducts() {
    const faNumHandler = num => new Intl.NumberFormat('fa-IR').format(num)
  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
            <p className='page-titles'>مدیریت محصولات</p>
            <Row borderDetails='1px solid #3d4d55' column1='نام محصول' column2='قیمت' column3='موجودی' ><div style={{width: "7rem"}}></div></Row>

            <Row column1='لباس ورزشی' column2={`${faNumHandler(250000)} تومان`} column3={`${faNumHandler(12)} عدد`}><button className='manage-pros-del-btn'>حذف</button></Row>
        </div>
    </div>
  )
}
