import React from 'react'
import {Link} from 'react-router-dom'
const Debt = props => (
 <div className="row debtItemList">
 <Link to={'/debts/' + props._id}>
 <div className="col-md-6"><img width="200px" src={props.image}
alt={props.name} /></div>
 <div className="col-md-6">
 <div><b>{props.name}</b></div>
 {props.card ? <div>Tarjeta: {props.card.name}</div> : null}
 <div>Monto: {props.year}</div>
 <div>Empresa: {props.enterprise}</div>
 <div>Fecha de Vencimiento: {props.duedate}</div>
 </div>
 </Link><br /><br />
 </div>
)
export default Debt
