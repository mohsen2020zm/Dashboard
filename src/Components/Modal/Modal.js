import './Modal.css'

export default function Modal({message, onClose}) {
  return (
    <div className='modal-main-div'>
        <p className="modal-message">{message}</p>
        <div className="modal-btns-div">
            <button className="modal-btn">بله</button>
            <button className="modal-btn" onClick={() => onClose()}>خیر</button>
        </div>
    </div>
  )
}
