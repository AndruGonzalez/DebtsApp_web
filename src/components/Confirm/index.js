import React from 'react'
import './style.css'
const Confirm = props => (
 <div className="modalDelete">
 <div>
 <h2>Eliminar</h2>
 <p>¿Estás seguro que quieres borrar este elemento?</p>
 <button className="btn-debtsapp" onClick={props.delete}>Sí</button>
 <button className="btn-debtsapp" onClick={props.toggle}>No</button>
 </div>
 </div>
)
export default Confirm
