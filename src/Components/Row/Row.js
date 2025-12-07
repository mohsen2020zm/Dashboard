import './Row.css'

export default function Row({children ,borderDetails = 'none' ,column1, column2, column3}) {
  return (
    <div className='row-main-div' style={{borderBottom: borderDetails}}>
        <p title={column1} className="row-tiles">{column1}</p>
        <p title={column2} className="row-tiles">{column2}</p>
        <p title={column3} className="row-tiles">{column3}</p>
        {children}
    </div>
  )
}
