import './Row.css'

export default function Row({children, column1, column2, column3}) {
  return (
    <div className='row-main-div'>
        <p title={column1} className="row-tiles">{column1}</p>
        <p title={column2} className="row-tiles">{column2}</p>
        <p title={column3} className="row-tiles">{column3}</p>
        {children}
    </div>
  )
}
