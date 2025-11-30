import { useEffect, useState } from 'react'
import './EditModal.css'

export default function EditModal({details, onclose}) {
    const [detailsCopy, setDetailsCopy] = useState({})
    useEffect(() => {
        setDetailsCopy(details)
    },[])
  return (
    <div className='edit-modal-main-div'>
        <div className="edit-modal-input-div">
            <p className='edit-modal-input-title'>نام محصول:</p>
            <input
             type="text"
             className="edit-modal-input"
             value={detailsCopy.name} onChange={e => setDetailsCopy({...detailsCopy, name: e.target.value})} />
        </div>
        <div className="edit-modal-input-div">
            <p className='edit-modal-input-title'>قیمت:</p>
            <input
             type="text"
             className="edit-modal-input"
             value={detailsCopy.price} onChange={e => setDetailsCopy({...detailsCopy, price: e.target.value})} />
        </div>
        <div className="edit-modal-input-div">
            <p className='edit-modal-input-title'>موجودی:</p>
            <input
             type="number"
             className="edit-modal-input"
             value={detailsCopy.inventory} onChange={e => setDetailsCopy({...detailsCopy, inventory: e.target.value})} />
        </div>
        <div className="edit-modal-btns-div">
            <button className='edit-modal-btn'>ثبت</button>
            <button className='edit-modal-btn' onClick={onclose}>انصراف</button>
        </div>
    </div>
  )
}
