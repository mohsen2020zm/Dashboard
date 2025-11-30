import './DetailsModal.css'

export default function DetailsModal({onClose, id, user, productName, date, status, postCode, address}) {

  const faNumHandler = num => new Intl.NumberFormat('fa-IR', {useGrouping: false}).format(num)
  
  return (
    <div className='details-modal-main-div'>
        <p className="details-modal-p">کد سفارش: {faNumHandler(id)}</p>
        <p className="details-modal-p">نام کاربر: {user}</p>
        <p className="details-modal-p">نام محصول: {productName}</p>
        <p className="details-modal-p">تاریخ سفارش: {date}</p>
        <p className="details-modal-p">وضعیت: {status == 'sending' ? 'درحال ارسال' : 'تکمیل شده'}</p>
        <p className="details-modal-p">کد پستی: {faNumHandler(postCode)}</p>
        <p className="details-modal-p">آدرس: {address}</p>
        <div className='details-modal-btn-div'>
            <button className='details-modal-close-btn' onClick={onClose}>بستن</button>
        </div>
    </div>
  )
}
