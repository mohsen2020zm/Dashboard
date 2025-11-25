import { useState } from 'react'
import './AddProduct.css'

export default function AddProduct() {

    const [fileName, setFileName] = useState('هیچ فایلی انتخاب نشده است')

    const fileInputChange = e => e.target.files[0] ? setFileName(e.target.files[0].name) : setFileName('هیچ فایلی انتخاب نشده است')

  return (
    <div className='dash-page-content-parent'>
        <div className='container'>
            <p className='page-titles'>اضافه کردن محصول</p>
            <div className="add-pros-inputs-parent-div">
                <div className="add-pros-input-div">
                    <p className='add-pros-input-title'>نام محصول:</p>
                    <input type="text" className='add-pros-input' />
                </div>
                <div className="add-pros-input-div">
                    <p className='add-pros-input-title'>قیمت محصول:</p>
                    <input type="text" className='add-pros-input' />
                </div>
                <div className="add-pros-input-div">
                    <p className='add-pros-input-title'>توضیحات:</p>
                    <textarea className='add-pros-description-input' />
                </div>
                <div className="add-pros-input-div">
                    <label className='add-pros-file-label' htmlFor='add-file'>آپلود عکس</label>
                    <input
                     className='add-pros-file-input'
                     type='file'
                     id='add-file'
                     accept='.jpg,.jpeg,.png' 
                     onChange={e => fileInputChange(e) }/>
                    <p className="add-pros-file-name">{fileName}</p>
                </div>
            </div>
            <button className='add-pros-btn'>اضافه کردن</button>
        </div>
    </div>
  )
}
