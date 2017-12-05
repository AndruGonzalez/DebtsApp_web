import React from 'react'
import {Link} from 'react-router-dom'
const Card = props => (
 <div className="row CardItemList">
 <Link to={'/cards/' + props._id}>
 <div className="col-md-6"><img width="200px" src={props.image}
alt={props.name} /></div>
 <div className="col-md-6"><b>{props.name}</b><br />{props.description}</div>
 </Link><br /><br />
 </div>
)
export default Card
